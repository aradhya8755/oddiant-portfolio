"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  MessageCircleMore,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { subscribeToNewsletter } from "@/app/actions/newsletter-actions"
import { AnimatePresence } from "framer-motion"
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscriptionStatus, setSubscriptionStatus] = useState<{
    success: boolean
    message: string
    visible: boolean
  } | null>(null)

  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })

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

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }
const XIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
);

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
 { icon: <XIcon />, href: "https://twitter.com", label: "X" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com", label: "YouTube" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://whatsapp.com", label: "WhatsApp" },
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/company", label: "Company" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact Us" },
  ]

  const serviceLinks = [
    { href: "/solutions#it-consulting", label: "IT Consulting" },
    { href: "/solutions#hr-services", label: "HR Consulting" },
    { href: "/solutions#recruitment", label: "Recruitment & Manpower" },
    { href: "/solutions#staffing", label: "Personality Development" },
  ]

  return (
    <motion.footer
      ref={footerRef}
      variants={footerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative bg-gradient-to-b from-black to-zinc-900 text-white pt-20 pb-8 overflow-hidden z-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/30" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Subscription */}
        <motion.div variants={itemVariants} className="relative mb-16 pb-16 border-b border-zinc-800">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm">
                  Subscribe to our newsletter for updates, industry insights, and exclusive offers.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-medium transition-all duration-300 rounded-md py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Subscribing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>

                {/* Subscription Status Message */}
                <AnimatePresence>
                  {subscriptionStatus && subscriptionStatus.visible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`mt-3 p-3 rounded-md flex items-center gap-2 ${
                        subscriptionStatus.success
                          ? "bg-green-900/30 text-green-300 border border-green-800"
                          : "bg-red-900/30 text-red-300 border border-red-800"
                      }`}
                    >
                      {subscriptionStatus.success ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      )}
                      <span className="text-sm font-medium">{subscriptionStatus.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Company Info */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-[180px] h-[40px]">
                <Image src="/images/logos/oddiant-preview.png" alt="Oddiant Techlabs" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering businesses through innovative IT consulting, expert staffing solutions, and tailored
              personality development programs.
            </p>
            <p className="text-md font-bold text-white mb-4">Follow Us:</p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r from-blue-600 to-green-500 transition-all duration-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white flex items-center group transition-all duration-300"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Office Locations</p>
                  <a
                    href="https://maps.app.goo.gl/BBFMKuiDnabN2rPE6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    D.D Puram Bareilly, Uttar Pradesh
                  </a>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/bMVpmZkageHxXuc76"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Sector-63 Noida, Uttar Pradesh
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:hi@oddiant.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    hi@oddiant.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a href="tel:+917300875549" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 7300875549
                  </a>
                  <br />
                  <a href="tel:+918755498866" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 8755498866
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Business Hours</p>
                  <p className="text-gray-400 text-sm">Mon-Fri: 9:30 AM - 6:30 PM IST</p>
                  <p className="text-gray-400 text-sm">Sat-Sun: Closed</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="my-10 bg-zinc-800" />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Oddiant Techlabs LLP. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
