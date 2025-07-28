import ExcelJS from "exceljs"
import path from "path"
import os from "os"
import { connectToDatabase } from "./mongodb"

// Define a consistent file path for the Excel file
const EXCEL_FILE_NAME = "newsletter_subscribers.xlsx"
const TEMP_DIR = os.tmpdir()
const EXCEL_FILE_PATH = path.join(TEMP_DIR, EXCEL_FILE_NAME)

// Collection name for Excel file metadata
const EXCEL_FILES_COLLECTION = "excelFiles"
const NEWSLETTER_FILE_ID = "newsletter_subscribers_master_file"

interface NewsletterSubscriber {
  email: string
  subscribedAt: Date
}

export async function generateNewsletterExcel(): Promise<Buffer> {
  try {
    console.log("Starting Newsletter Excel generation...")

    // Connect to the database
    const { db } = await connectToDatabase()

    // Create a new workbook
    const workbook = new ExcelJS.Workbook()
    let worksheet: ExcelJS.Worksheet

    // Initialize the worksheet
    worksheet = workbook.addWorksheet("Newsletter Subscribers")

    // Define columns - ONLY Date and Email for newsletter subscribers
    worksheet.columns = [
      { header: "Date", key: "subscribedAt", width: 20 },
      { header: "Email", key: "email", width: 40 },
    ]

    // Style the header row
    const headerRow = worksheet.getRow(1)
    headerRow.font = { bold: true }
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    }

    // Commit the styling
    headerRow.commit()

    // Get ALL subscribers from the database
    console.log("Fetching all newsletter subscribers from database...")
    const allSubscribers = await db
      .collection("newsletters")
      .find({})
      .sort({ subscribedAt: 1 }) // Sort by date ascending
      .toArray()

    console.log(`Found ${allSubscribers.length} total newsletter subscribers in database`)

    // Add all subscribers to the worksheet - ONLY Date and Email
    allSubscribers.forEach((subscriber) => {
      worksheet.addRow({
        subscribedAt: subscriber.subscribedAt,
        email: subscriber.email,
      })
    })

    // Format date column
    worksheet.getColumn("subscribedAt").numFmt = "yyyy-mm-dd hh:mm:ss"

    // Save the workbook to a buffer
    console.log("Generating Excel buffer...")
    const buffer = (await workbook.xlsx.writeBuffer()) as unknown as Buffer

    try {
      // Save the Excel file to the file system (for backup purposes)
      console.log("Saving Excel file to:", EXCEL_FILE_PATH)
      await workbook.xlsx.writeFile(EXCEL_FILE_PATH)

      // Update the excelFiles collection with the latest file data and subscription count
      await db.collection(EXCEL_FILES_COLLECTION).updateOne(
        { fileId: NEWSLETTER_FILE_ID },
        {
          $set: {
            fileData: buffer,
            lastUpdated: new Date(),
            subscriberCount: allSubscribers.length,
          },
        },
        { upsert: true }, // Create if it doesn't exist
      )
      console.log("Updated Excel file metadata in database")
    } catch (dbError) {
      console.error("Error updating Excel file in database:", dbError)
      // Continue with the buffer we already have
    }

    console.log("Excel generation complete with all subscribers included")
    return buffer
  } catch (error) {
    console.error("Error in Newsletter Excel generation:", error)
    // Create a fallback Excel file with minimal structure
    return createFallbackNewsletterExcel()
  }
}

// Helper function to create a fallback Excel file
async function createFallbackNewsletterExcel(): Promise<Buffer> {
  try {
    console.log("Creating fallback Excel file...")
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet("Newsletter Subscribers")

    // Define columns - ONLY Date and Email
    worksheet.columns = [
      { header: "Date", key: "subscribedAt", width: 20 },
      { header: "Email", key: "email", width: 40 },
    ]

    // Style the header row
    const headerRow = worksheet.getRow(1)
    headerRow.font = { bold: true }
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    }

    headerRow.commit()

    // Generate buffer directly without saving to file
    const buffer = (await workbook.xlsx.writeBuffer()) as unknown as Buffer
    console.log("Fallback Excel file created successfully")
    return buffer
  } catch (fallbackError) {
    console.error("Error creating fallback Excel:", fallbackError)
    // Last resort: return a simple JSON buffer
    console.log("Returning JSON as last resort")
    const jsonString = JSON.stringify({ error: "Failed to generate Excel file" }, null, 2)
    return Buffer.from(jsonString, "utf-8")
  }
}
