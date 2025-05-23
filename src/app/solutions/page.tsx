"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Monitor, Users, UserPlus, BookOpen, CheckCircle, Sparkles, Zap, Shield } from 'lucide-react'

export default function SolutionsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })

  const itConsultingRef = useRef<HTMLDivElement>(null)
  const isItConsultingInView = useInView(itConsultingRef, { once: true, amount: 0.2 })

  const hrConsultingRef = useRef<HTMLDivElement>(null)
  const isHrConsultingInView = useInView(hrConsultingRef, { once: true, amount: 0.2 })

  const recruitmentRef = useRef<HTMLDivElement>(null)
  const isRecruitmentInView = useInView(recruitmentRef, { once: true, amount: 0.2 })

  const pdpRef = useRef<HTMLDivElement>(null)
  const isPdpInView = useInView(pdpRef, { once: true, amount: 0.2 })

  const ctaRef = useRef<HTMLDivElement>(null)
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 })

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

  const services = [
    {
      id: "it-consulting",
      title: "IT Consulting",
      icon: <Monitor className="w-6 h-6" />,
      color: "blue",
      description:
        "Expert guidance to optimize technology, improve efficiency, and support business growth through innovative IT solutions.",
      features: [
        "Web Based Solutions",
        "Web App Development",
        "Mobile App Development",
        "Custom Software Development",
        "Cloud Solutions",
        "IT Strategy & Planning",
      ],
      benefits: [
        "Increased operational efficiency",
        "Reduced IT costs",
        "Enhanced security",
        "Improved customer experience",
        "Scalable technology infrastructure",
      ],
    },
    {
      id: "hr-services",
      title: "HR Consulting",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      description:
        "Comprehensive HR solutions to manage people, improve workplace culture, and align HR strategies with business goals.",
      features: [
        "Background Verification",
        "Onboarding and Payroll",
        "HR Policy Development",
        "Performance Management",
        "Employee Engagement",
        "Compliance Management",
      ],
      benefits: [
        "Improved employee retention",
        "Enhanced workplace culture",
        "Reduced compliance risks",
        "Streamlined HR processes",
        "Better talent management",
      ],
    },
    {
      id: "recruitment",
      title: "Recruitment & Manpower Consulting",
      icon: <UserPlus className="w-6 h-6" />,
      color: "green",
      description:
        "Connect businesses with the right talent to drive growth and success through strategic recruitment solutions.",
      features: [
        "Permanent Staffing",
        "Contingent Staffing",
        "Executive Search",
        "Bulk Hiring",
        "Campus Recruitment",
        "Talent Assessment",
      ],
      benefits: [
        "Access to quality talent pool",
        "Reduced time-to-hire",
        "Lower recruitment costs",
        "Improved candidate quality",
        "Enhanced employer branding",
      ],
    },
    {
      id: "staffing",
      title: "Personality Development Program (PDP)",
      icon: <BookOpen className="w-6 h-6" />,
      color: "amber",
      description:
        "Comprehensive programs to enhance personal and professional skills, boosting confidence and career prospects.",
      features: [
        "Resume Writing",
        "Soft Skill Training",
        "Interview Preparation",
        "Communication Skills",
        "Leadership Development",
        "Career Counseling",
      ],
      benefits: [
        "Improved communication skills",
        "Enhanced confidence",
        "Better career opportunities",
        "Stronger professional network",
        "Increased adaptability",
      ],
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
              Our Solutions
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive services tailored to meet your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const colorClasses = {
                blue: "from-blue-500 to-blue-700 shadow-blue-500/20",
                purple: "from-purple-500 to-purple-700 shadow-purple-500/20",
                green: "from-green-500 to-green-700 shadow-green-500/20",
                amber: "from-amber-500 to-amber-700 shadow-amber-500/20",
              }

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Link href={`#${service.id}`}>
                    <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 h-full overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${
                            colorClasses[service.color as keyof typeof colorClasses]
                          } shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {service.description}
                        </p>
                        <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IT Consulting Section */}
      <section id="it-consulting" ref={itConsultingRef} className="py-24 bg-gradient-to-r from-blue-900/20 to-blue-900/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isItConsultingInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants}>
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <Monitor className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-400">IT Consulting</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Innovative IT Solutions for Your Business
              </h2>
              <p className="text-gray-300 mb-8">
                Our IT consulting services provide expert guidance to optimize technology, improve efficiency, and
                support business growth through innovative IT solutions. We help businesses leverage technology to gain a
                competitive edge in today's digital landscape.
              </p>

              <div className="space-y-4 mb-8">
                {services[0].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isItConsultingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 text-blue-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 mix-blend-overlay z-10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
                    <div className="space-y-4">
                      {services[0].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-blue-300" />
                          </div>
                          <span className="text-white">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
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
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/30 rounded-full filter blur-xl"
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
          </motion.div>
        </div>
      </section>

      {/* HR Consulting Section */}
      <section id="hr-services" ref={hrConsultingRef} className="py-24 bg-gradient-to-r from-purple-900/20 to-purple-900/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isHrConsultingInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants} className="order-2 lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 mix-blend-overlay z-10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
                    <div className="space-y-4">
                      {services[1].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-purple-300" />
                          </div>
                          <span className="text-white">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-purple-500/30 rounded-full filter blur-xl"
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

            <motion.div variants={fadeInUpVariants} className="order-1 lg:order-2">
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <Users className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400">HR Consulting</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Strategic HR Solutions for Growth
              </h2>
              <p className="text-gray-300 mb-8">
                Our HR consulting services guide businesses in managing people, improving workplace culture, and aligning
                HR strategies with business goals. We help organizations build strong, engaged teams that drive success.
              </p>

              <div className="space-y-4 mb-8">
                {services[1].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isHrConsultingInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 text-purple-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Recruitment & Manpower Section */}
      <section id="recruitment" ref={recruitmentRef} className="py-24 bg-gradient-to-r from-green-900/20 to-green-900/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isRecruitmentInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants}>
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <UserPlus className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Recruitment & Manpower</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Connect with Top Talent
              </h2>
              <p className="text-gray-300 mb-8">
                Our recruitment and manpower consulting services connect businesses with the right talent to drive growth
                and success. We provide strategic recruitment solutions tailored to your specific needs and industry
                requirements.
              </p>

              <div className="space-y-4 mb-8">
                {services[2].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isRecruitmentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeInUpVariants} className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20 mix-blend-overlay z-10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
                    <div className="space-y-4">
                      {services[2].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-green-300" />
                          </div>
                          <span className="text-white">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-green-500/30 rounded-full filter blur-xl"
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
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-green-500/30 rounded-full filter blur-xl"
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
          </motion.div>
        </div>
      </section>

      {/* Personality Development Section */}
      <section id="staffing" ref={pdpRef} className="py-24 bg-gradient-to-r from-amber-900/20 to-amber-900/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isPdpInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants} className="order-2 lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-4 text-white">Benefits</h3>
                    <div className="space-y-4">
                      {services[3].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-amber-300" />
                          </div>
                          <span className="text-white">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-amber-500/30 rounded-full filter blur-xl"
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
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-amber-500/30 rounded-full filter blur-xl"
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

            <motion.div variants={fadeInUpVariants} className="order-1 lg:order-2">
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <BookOpen className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-400">Personality Development</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unlock Your Full Potential
              </h2>
              <p className="text-gray-300 mb-8">
                Our Personality Development Program (PDP) offers comprehensive training to enhance personal and
                professional skills, boosting confidence and career prospects. We help individuals develop the skills
                needed to excel in today's competitive job market.
              </p>

              <div className="space-y-4 mb-8">
                {services[3].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isPdpInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 text-amber-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <Button
                asChild
                className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  Get Started
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss how our solutions can help you achieve your business goals.
            </p>
            <Button
              asChild
              className="rounded-full px-8 py-7 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center">
                Get Started
                <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
