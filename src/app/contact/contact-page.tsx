"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, User, AtSign, FileText, Briefcase, ListFilter, Linkedin, Twitter, Facebook, Youtube, Instagram } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "it-consulting",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [useEmailFallback, setUseEmailFallback] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success: boolean
    message: string
    visible: boolean
  } | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })

  const formRef = useRef<HTMLDivElement>(null)
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })

  const infoRef = useRef<HTMLDivElement>(null)
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.2 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    // If we're using the email fallback, use the fallback form
    if (useEmailFallback) {
      try {
        // Send email directly using mailto link
        const subject = `Contact Form: ${formData.name} - ${formData.service}`
        const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Company: ${formData.company || "Not provided"}
Service: ${formData.service}

Message:
${formData.message}
        `.trim()

        // Create mailto link
        const mailtoLink = `mailto:hi@oddiant.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

        // Open email client
        window.location.href = mailtoLink

        // Show success message
        setFormStatus({
          success: true,
          message: "Email client opened. Please send the email to complete your submission.",
          visible: true,
        })
        toast.success("Email client opened. Please send the email to complete your submission.")

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "it-consulting",
          message: "",
        })

        // Hide the message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => (prev ? { ...prev, visible: false } : null))
        }, 5000)
      } catch (error) {
        console.error("Error with fallback form:", error)
        setFormStatus({
          success: false,
          message: "Could not open email client. Please contact us directly at hi@oddiant.com",
          visible: true,
        })
        toast.error("Could not open email client. Please contact us directly at hi@oddiant.com")

        // Hide the message after 5 seconds
        setTimeout(() => {
          setFormStatus((prev) => (prev ? { ...prev, visible: false } : null))
        }, 5000)
      } finally {
        setIsSubmitting(false)
      }
      return
    }

    try {
      // Use absolute URL for API endpoint to avoid path issues
      const apiUrl = "/api/contact"

      // Use fetch with improved error handling
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 15000) // 15 second timeout

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      // Check if response is ok first
      if (!response.ok) {
        let errorMessage = `Server error: ${response.status}. Please try again later.`

        try {
          const errorData = await response.json()
          if (errorData && errorData.message) {
            errorMessage = errorData.message
          }
        } catch (e) {
          // If we can't parse JSON, try to get text
          try {
            const errorText = await response.text()
            console.error("Error response text:", errorText)
          } catch (textError) {
            console.error("Could not read error response text:", textError)
          }
        }

        // If we get a 405 error, offer to use the email fallback
        if (response.status === 405) {
          setFormStatus({
            success: false,
            message: "The contact form is currently unavailable. Would you like to use your email client instead?",
            visible: true,
          })
          toast.error("The contact form is currently unavailable.", {
            action: {
              label: "Use Email",
              onClick: () => setUseEmailFallback(true),
            },
            duration: 10000,
          })
        } else {
          throw new Error(errorMessage)
        }
        return
      }

      // Try to parse the response as JSON
      let data
      try {
        data = await response.json()
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError)
        throw new Error("Received invalid response from server. Please try again.")
      }

      // Show success message
      setFormStatus({
        success: true,
        message: data?.message || "Message sent successfully! We'll get back to you soon.",
        visible: true,
      })
      toast.success(data?.message || "Message sent successfully! We'll get back to you soon.")

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "it-consulting",
        message: "",
      })

      // Hide the message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => (prev ? { ...prev, visible: false } : null))
      }, 5000)
    } catch (error: any) {
      console.error("Error submitting form:", error)

      // More specific error messages
      if (error.name === "AbortError") {
        setFormStatus({
          success: false,
          message: "Request timed out. Please check your connection and try again.",
          visible: true,
        })
        toast.error("Request timed out. Please check your connection and try again.")
      } else if (error instanceof TypeError && error.message.includes("fetch")) {
        setFormStatus({
          success: false,
          message: "Network error. Please check your connection and try again.",
          visible: true,
        })
        toast.error("Network error. Please check your connection and try again.")
        toast.error("Would you like to use your email client instead?", {
          action: {
            label: "Use Email",
            onClick: () => setUseEmailFallback(true),
          },
          duration: 10000,
        })
      } else {
        setFormStatus({
          success: false,
          message: error instanceof Error ? error.message : "Failed to send message. Please try again.",
          visible: true,
        })
        toast.error(error instanceof Error ? error.message : "Failed to send message. Please try again.")
      }

      // Hide the message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => (prev ? { ...prev, visible: false } : null))
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office Locations",
      details: [
        {
          text: "D.D Puram Bareilly, Uttar Pradesh",
          link: "https://maps.app.goo.gl/BBFMKuiDnabN2rPE6",
        },
        {
          text: "Sector-63 Noida, Uttar Pradesh",
          link: "https://maps.app.goo.gl/bMVpmZkageHxXuc76",
        },
      ],
      color: "blue",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: [
        {
          text: "hi@oddiant.com",
          link: "mailto:hi@oddiant.com",
        },
      ],
      color: "green",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: [
        {
          text: "+91 7300875549",
          link: "tel:+917300875549",
        },
        {
          text: "+91 8755498866",
          link: "tel:+918755498866",
        },
      ],
      color: "purple",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      details: [
        {
          text: "Mon-Fri: 9:30 AM - 6:30 PM IST",
        },
        {
          text: "Sat-Sun: Closed",
        },
      ],
      color: "amber",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/30" />

          {/* Animated particles */}
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white opacity-20"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">
              Get in touch with our team to discuss how we can help your business grow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-blue-400" />
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white flex items-center">
                        <User className="mr-2 h-4 w-4 text-gray-400" />
                        Your Name <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="bg-white/10 border-zinc-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: formData.name ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white flex items-center">
                        <AtSign className="mr-2 h-4 w-4 text-gray-400" />
                        Your Email <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john.doe@example.com"
                          className="bg-white/10 border-zinc-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: formData.email ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-gray-400" />
                        Phone Number
                      </Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 1234567890"
                          className="bg-white/10 border-zinc-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: formData.phone ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white flex items-center">
                        <Briefcase className="mr-2 h-4 w-4 text-gray-400" />
                        Company Name
                      </Label>
                      <div className="relative">
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="bg-white/10 border-zinc-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        />
                        <motion.span
                          initial={{ width: "0%" }}
                          animate={{ width: formData.company ? "100%" : "0%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white flex items-center">
                      <ListFilter className="mr-2 h-4 w-4 text-gray-400" />
                      Service of Interest <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white/10 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      >
                        <option value="it-consulting">IT Consulting</option>
                        <option value="hr-services">HR Services</option>
                        <option value="recruitment">Recruitment</option>
                        <option value="staffing">Staffing</option>
                        <option value="other">Other</option>
                      </select>
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: formData.service ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-gray-400" />
                      Your Message <span className="text-red-500 ml-1">*</span>
                    </Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe how we can help you..."
                        className="min-h-[150px] bg-white/10 border-zinc-700 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                      <motion.span
                        initial={{ width: "0%" }}
                        animate={{ width: formData.message ? "100%" : "0%" }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    </div>
                  </div>

                  {formStatus && formStatus.visible && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-md flex items-center gap-2 ${
                        formStatus.success
                          ? "bg-green-900/30 text-green-300 border border-green-800"
                          : "bg-red-900/30 text-red-300 border border-red-800"
                      }`}
                    >
                      {formStatus.success ? (
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-400" />
                      )}
                      <span className="text-sm font-medium">{formStatus.message}</span>
                      {!formStatus.success && !useEmailFallback && formStatus.message.includes("unavailable") && (
                        <Button
                          type="button"
                          variant="link"
                          className="text-blue-400 hover:text-blue-300 p-0 h-auto"
                          onClick={() => setUseEmailFallback(true)}
                        >
                          Use Email Client
                        </Button>
                      )}
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium transition-all duration-300 rounded-md py-6"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {useEmailFallback ? "Opening Email Client..." : "Sending..."}
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        {useEmailFallback ? "Send via Email Client" : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>

                  {!useEmailFallback && (
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Having trouble with the form?{" "}
                      <button
                        type="button"
                        onClick={() => setUseEmailFallback(true)}
                        className="text-blue-400 hover:text-blue-300 hover:underline"
                      >
                        Use email client instead
                      </button>
                    </p>
                  )}
                </form>
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/30 rounded-full filter blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-500/30 rounded-full filter blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              ref={infoRef}
              initial="hidden"
              animate={isInfoInView ? "visible" : "hidden"}
              variants={staggerContainerVariants}
              className="space-y-8"
            >
              <motion.div variants={fadeInUpVariants}>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-gray-300 mb-8">
                  We'd love to hear from you. Reach out to us through any of the following channels or fill out the
                  contact form.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const colorClasses = {
                    blue: "bg-blue-500/20 text-blue-400",
                    green: "bg-green-500/20 text-green-400",
                    purple: "bg-purple-500/20 text-purple-400",
                    amber: "bg-amber-500/20 text-amber-400",
                  }

                  return (
                    <motion.div
                      key={info.title}
                      variants={fadeInUpVariants}
                      className="bg-white/5 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg group"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-full ${
                            colorClasses[info.color as keyof typeof colorClasses]
                          } flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-white mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <div key={idx}>
                                {detail.link ? (
                                  <a
                                    href={detail.link}
                                    target={detail.link.startsWith("http") ? "_blank" : undefined}
                                    rel={detail.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                    className="text-gray-400 hover:text-white transition-colors"
                                  >
                                    {detail.text}
                                  </a>
                                ) : (
                                  <p className="text-gray-400">{detail.text}</p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Map */}
              <motion.div variants={fadeInUpVariants} className="mt-12">
                <div className="bg-white/5 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 overflow-hidden">
                  <h3 className="text-lg font-medium text-white mb-4">Find Us</h3>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0011089455!2d77.3772!3d28.6273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f25ac323e5%3A0x9e06f1aaca9e8e4a!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Google Maps showing Oddiant Techlabs location"
                      className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    ></iframe>
                  </div>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div variants={fadeInUpVariants} className="mt-8">
                <h3 className="text-lg font-medium text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 transition-all duration-300"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 transition-all duration-300"
                  >
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
