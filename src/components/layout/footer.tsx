"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXTwitter, faFacebookF, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { subscribeToNewsletter } from "@/app/actions/newsletter-actions"
import { toast } from "sonner"
import { CheckCircle2, AlertCircle } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success: boolean
    message: string
    visible: boolean
  } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      try {
        setIsSubmitting(true)
        setSubscriptionStatus(null)

        const result = await subscribeToNewsletter(email)

        if (result.success) {
          // Show success message
          setSubscriptionStatus({
            success: true,
            message: "Thank you for subscribing to our newsletter!",
            visible: true,
          })
          toast.success("Thank you for subscribing to our newsletter!")
          setEmail("")

          // Hide the message after 5 seconds
          setTimeout(() => {
            setSubscriptionStatus((prev) => (prev ? { ...prev, visible: false } : null))
          }, 5000)
        } else {
          // Show error message
          setSubscriptionStatus({
            success: false,
            message: result.message || "Failed to subscribe. Please try again.",
            visible: true,
          })
          toast.error(result.message || "Failed to subscribe. Please try again.")

          // Hide the message after 5 seconds
          setTimeout(() => {
            setSubscriptionStatus((prev) => (prev ? { ...prev, visible: false } : null))
          }, 5000)
        }
      } catch (error) {
        console.error("Subscription error:", error)
        setSubscriptionStatus({
          success: false,
          message: "An error occurred. Please try again later.",
          visible: true,
        })
        toast.error("An error occurred. Please try again later.")

        // Hide the message after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus((prev) => (prev ? { ...prev, visible: false } : null))
        }, 5000)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <footer className="bg-gradient-to-r from-black to-blue-950 z-0 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Newsletter Subscription */}
        <div className="mb-12 pb-10 border-b border-black">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white text-sm">
                  Subscribe to our newsletter for updates, industry insights, and exclusive offers.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-white border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </form>

                {/* Subscription Status Message */}
                {subscriptionStatus && subscriptionStatus.visible && (
                  <div
                    className={`mt-3 p-3 rounded-md flex items-center gap-2 ${
                      subscriptionStatus.success
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}
                  >
                    {subscriptionStatus.success ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className="text-sm font-medium">{subscriptionStatus.message}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div style={{ width: "150px", height: "35px", position: "relative" }}>
                <Image src="/images/logos/oddiant-preview.png" alt="Oddiant Techlabs" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-md font-bold">Follow Us:</p>
            <div className="mt-4 flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-blue-500 hover:text-white transition-colors"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="w-6 h-6 text-zinc-400 hover:text-white transition-colors"
                />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="w-6 h-6 text-blue-500 hover:text-white transition-colors"
                />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 text-red-600 hover:text-white transition-colors" />
              </a>

              <a href="https://wa.me/your-number" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-6 h-6 text-green-400 hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/" className="hover:border-white hover:border-b-2 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:border-white hover:border-b-2 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:border-white hover:border-b-2 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:border-white hover:border-b-2 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link href="/solutions#it-consulting" className="hover:border-white hover:border-b-2 transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/solutions#hr-services" className="hover:border-white hover:border-b-2 transition-colors">
                  HR Consulting
                </Link>
              </li>
              <li>
                <Link href="/solutions#recruitment" className="hover:border-white hover:border-b-2 transition-colors">
                  Recruitment & Manpower Consulting
                </Link>
              </li>
              <li>
                <Link href="/solutions#staffing" className="hover:border-white hover:border-b-2 transition-colors">
                  Personality Development Program (PDP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a
                  href="https://www.google.com/maps/search/Noida,+U.P.,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Noida, U.P., India
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@oddianttechlabs.com" className="hover:underline">
                  info@oddiant.com
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+911234567890" className="hover:underline">
                  +917300875549
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-zinc-800" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Oddiant Techlabs LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/images/logos/PRIVACY-TERMS[1].pdf"
              target="_blank"
              className="text-white hover:border-white hover:border-b-2 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white hover:border-white hover:border-b-2 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
