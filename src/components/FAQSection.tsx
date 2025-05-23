"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

// Define the FAQ item type
interface FAQItem {
  question: string
  answer: string
}

// Define the component props type
interface FAQSectionProps {
  className?: string
}

const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in recruitment, talent sourcing, and HR solutions tailored to global business needs. Our comprehensive services include IT consulting, HR consulting, recruitment & manpower consulting, and personality development programs.",
  },
  {
    question: "How experienced is your team?",
    answer:
      "Our team brings over 7 years of experience in the recruitment and IT consulting industry with a strong track record of successful placements and projects. We have a diverse team of professionals with expertise across various domains.",
  },
  {
    question: "Where are your delivery centers located?",
    answer:
      "We operate two strategically located delivery centers in Noida and Bareilly, Uttar Pradesh, India to provide seamless service across time zones and ensure efficient project delivery.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, we've partnered with over 20 clients globally across various industries and sectors. Our international experience allows us to understand diverse business needs and provide tailored solutions.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "You can reach out through our contact form or schedule a free consultation. We'll guide you through the process step-by-step, understanding your requirements and proposing the most suitable solutions for your business.",
  },
]

const FAQSection: React.FC<FAQSectionProps> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={`max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="text-center mb-16">
        <div className="inline-block mb-3">
          <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <HelpCircle className="h-4 w-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">FAQ</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about our services and approach
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="border border-zinc-800 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center p-6 focus:outline-none"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-medium text-white">{faq.question}</span>
              <span className="ml-2 flex-shrink-0">
                {openIndex === index ? (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <ChevronUp className="h-5 w-5 text-blue-400" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 border-t border-zinc-800 text-gray-300">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection
