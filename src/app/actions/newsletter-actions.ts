"use server"

import { connectToDatabase } from "@/lib/mongodb"
import { sendEmail } from "@/lib/email"
import { generateNewsletterExcel } from "@/lib/newsletter-excel"

interface NewsletterSubscriber {
  email: string
  subscribedAt: Date
}

export async function subscribeToNewsletter(email: string) {
  try {
    // Validate email
    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address" }
    }

    // Connect to database
    const { db } = await connectToDatabase()

    // Check if email already exists in the newsletters collection
    const existingSubscriber = await db.collection("newsletters").findOne({ email })

    if (existingSubscriber) {
      return { success: false, message: "This email is already subscribed to our newsletter" }
    }

    // Create new subscriber document
    const newSubscriber: NewsletterSubscriber = {
      email,
      subscribedAt: new Date(),
    }

    // Insert into newsletters collection
    await db.collection("newsletters").insertOne(newSubscriber)

    // Generate Excel file specifically for newsletter subscribers
    const excelBuffer = await generateNewsletterExcel()

    // Send email with Excel attachment
    await sendEmail({
      subject: "New Newsletter Subscription",
      text: `A new user has subscribed to the newsletter: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the newsletter.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>Please find attached an updated list of all newsletter subscribers.</p>
      `,
      attachments: [
        {
          filename: "newsletter_subscribers.xlsx",
          content: excelBuffer,
        },
      ],
    })

    return { success: true }
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return {
      success: false,
      message: "An error occurred while processing your subscription. Please try again later.",
    }
  }
}
