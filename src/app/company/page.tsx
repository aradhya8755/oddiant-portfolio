"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Testimonials from "@/components/Testimonials"
import ClientsPlanetary from "@/components/ClientsPlanetary"
import WhyChooseUs from "@/components/why-choose-us"
import WhatMakesUsDifferent from "@/components/what-makes-us"
import { ArrowRight, CheckCircle, Target, Compass, Award, Users, Building } from "lucide-react"

export default function CompanyPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })

  const aboutRef = useRef<HTMLDivElement>(null)
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 })

  const visionRef = useRef<HTMLDivElement>(null)
  const isVisionInView = useInView(visionRef, { once: true, amount: 0.2 })

  const teamRef = useRef<HTMLDivElement>(null)
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 })

  const certRef = useRef<HTMLDivElement>(null)
  const isCertInView = useInView(certRef, { once: true, amount: 0.2 })

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
              Company
            </h1>
            <p className="text-xl text-gray-300">
              Learn about our mission, vision, and the team behind Oddiant Techlabs
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10" />
              <div className="absolute inset-0 bg-white flex items-center justify-center">
                <div className="relative w-72 h-72">
                  <Image
                    src="/images/logos/oddiant-preview.png"
                    alt="Oddiant Techlabs"
                    fill
                    className="object-contain p-8"
                  />
                </div>
              </div>

              {/* Floating elements */}
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

            <motion.div initial="hidden" animate={isAboutInView ? "visible" : "hidden"} variants={fadeInUpVariants}>
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <Building className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">About Us</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Oddiant Techlabs
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Oddiant Techlabs LLP is a fast-growing, bootstrapped IT services start-up focused on empowering talent
                  and personality through an AI-driven SaaS job assessment web platform for both organizations and job
                  seekers. Recognized by Startup India, Start in UP, Invertis Incubation, MSME, GST, and the Government
                  of India, Oddiant operates on an asset-light model. We are headquartered in Noida, Uttar Pradesh.
                </p>
                <p className="text-gray-300">
                  Our offerings include end-to-end IT consulting, HR and staffing solutions, personality development
                  training, and AI-based manpower outsourcing services. With over seven years of industry experience,
                  our team is known for delivering impactful, result-oriented solutions.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center">
                    Get In Touch
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section ref={visionRef} className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUpVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-zinc-800 h-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                      Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    To become a global leader in delivering innovative, reliable, and scalable consulting solutions in
                    IT, HR, and personality development— empowering organizations and individuals.
                  </p>

                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-400">Driving innovation through technology and human potential</p>
                    </div>
                    <div className="flex items-start gap-3 mt-3">
                      <div className="mt-1 text-blue-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-400">
                        Creating sustainable growth opportunities for businesses and individuals
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUpVariants}>
              <Card className="bg-white/10 backdrop-blur-sm border-zinc-800 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 hover:scale-105 transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 flex-shrink-0">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                      Mission
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg">
                    We are on a mission to empower businesses with best-fit talent and 24/7 strategic support through
                    customized, scalable solutions. From global staffing to technical hiring and corporate training,
                    Oddiant Techlabs is your trusted end-to-end partner.
                  </p>

                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-400">Delivering excellence through customized solutions</p>
                    </div>
                    <div className="flex items-start gap-3 mt-3">
                      <div className="mt-1 text-purple-400">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                      <p className="text-gray-400">Building long-term partnerships based on trust and results</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* What Makes Us Different Section */}
      <WhatMakesUsDifferent />

      {/* Clients Section */}
      <section>
        <ClientsPlanetary />
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Users className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Our Team</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Team of Experts
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Meet the talented professionals driving innovation and excellence at Oddiant Techlabs
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isTeamInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                name: "Aradhya Saxena",
                role: "CEO & Founder",
                image: "/images/logos/AS.jpg",
                initials: "AS",
              },
              {
                name: "Saloni",
                role: "Business Partner",
                image: "/images/logos/SA.jpg",
                initials: "SA",
              },
              {
                name: "Himanshu Walia",
                role: "Sr. Resource Manager",
                image: "/images/logos/HW.png",
                initials: "HW",
              },
              {
                name: "Nimrat Kaur Bagga",
                role: "Business Development Manager",
                image: "/images/logos/NK.png",
                initials: "NK",
              },
            ].map((member, idx) => (
              <motion.div key={member.name} variants={fadeInUpVariants} className="group">
                <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 p-6 flex flex-col items-center text-center group-hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <Avatar className="w-28 h-28 border-4 border-white/10 shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {member.role}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials section */}
      <section>
        <Testimonials />
      </section>

      {/* Certifications Section */}
      <section ref={certRef} className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isCertInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Award className="h-4 w-4 text-amber-400" />
                <span className="text-sm font-medium text-amber-400">Certifications</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Due Diligence & Compliance
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence is recognized through various certifications
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isCertInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                name: "GST Registered",
                logo: "/images/logos/gst-1.png",
                description: "GST Number : 09AAJFO2188G1ZY",
              },
              {
                name: "Startup India",
                logo: "/images/logos/startup-india.png",
                description: "DIPP: 202299",
              },
              {
                name: "MSME Certified",
                logo: "/images/logos/msme-logo.png",
                description: "MSME: UDYAM-UP-15-0070931",
              },
              {
                name: "Invertis Incubation",
                logo: "/images/logos/incub-logo.png",
                description: "Startup Certified with Invertis Incubation",
              },
              {
                name: "MCA",
                logo: "/images/logos/inc-logo.png",
                description: "LLP Identification Number: ACJ-3756",
              },
              {
                name: "START IN UP",
                logo: "/images/logos/upstart_logo.png",
                description: "Certified Startup with UP Government",
              },
            ].map((cert, idx) => (
              <motion.div key={cert.name} variants={fadeInUpVariants} className="group">
                <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 p-8 flex flex-col items-center text-center h-full group-hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-24 w-48 mb-6">
                    <div className="absolute inset-0 bg-white rounded-lg"></div>
                    <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} fill className="object-contain p-2" />
                  </div>
                  <h3 className="text-lg font-medium text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors duration-300">
                    {cert.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
