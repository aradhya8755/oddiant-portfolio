import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { sign, verify, type JwtPayload } from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { connectToDatabase } from "./mongodb"
import { ObjectId } from "mongodb"

// Ensure JWT_SECRET is always defined
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_development"
const TOKEN_EXPIRATION = "1d"

// Define the token type
export interface DecodedToken extends JwtPayload {
  userId: string
  role?: string
}

// Add the auth function that was missing
export async function auth() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth_token")?.value

    if (!token) {
      return null
    }

    const decoded = verifyToken(token)
    if (!decoded?.userId) {
      return null
    }

    const user = await getUserById(decoded.userId)
    if (!user) {
      return null
    }

    return {
      user,
    }
  } catch (error) {
    console.error("Auth error:", error)
    return null
  }
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10)
  return bcrypt.hash(password, salt)
}

// Compare password with hash
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

// Generate JWT token - Updated to include role
export function generateToken(userId: string, role?: string): string {
  // Ensure JWT_SECRET is a string (TypeScript needs this assurance)
  const secret: string = JWT_SECRET
  return sign({ userId, role }, secret, { expiresIn: TOKEN_EXPIRATION })
}

// Verify JWT token - Updated to return the role
export function verifyToken(token: string): DecodedToken | null {
  try {
    // Ensure JWT_SECRET is a string (TypeScript needs this assurance)
    const secret: string = JWT_SECRET
    return verify(token, secret) as DecodedToken
  } catch (error) {
    console.error("Token verification error:", error)
    return null
  }
}

// Set JWT token in cookies
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    sameSite: "lax",
  })
}

// Clear auth cookie
export async function clearAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("auth_token")
}

// Get user ID from request
export async function getUserFromRequest(req: NextRequest): Promise<string | null> {
  const token = req.cookies.get("auth_token")?.value
  if (!token) {
    return null
  }
  const decoded = verifyToken(token)
  return decoded?.userId || null
}

// Auth middleware
export async function authMiddleware(req: NextRequest): Promise<NextResponse | null> {
  const userId = await getUserFromRequest(req)
  if (!userId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }
  return null
}

// Get user by ID
export async function getUserById(userId: string) {
  try {
    const { db } = await connectToDatabase()

    // Check both collections for the user
    let user = await db.collection("students").findOne({ _id: new ObjectId(userId) })

    // If not found in students, try employees collection
    if (!user) {
      user = await db.collection("employees").findOne({ _id: new ObjectId(userId) })
    }

    if (!user) {
      return null
    }

    // Remove password from user object
    const { password, ...userWithoutPassword } = user
    return userWithoutPassword
  } catch (error) {
    console.error("Error getting user by ID:", error)
    return null
  }
}

// Generate OTP
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}