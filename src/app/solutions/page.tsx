"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Monitor, Users, UserPlus, BookOpen, CheckCircle, Sparkles, Zap, Star, Rocket } from "lucide-react"

export default function SolutionsPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })

  const servicesRef = useRef<HTMLDivElement>(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

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
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        {/* Enhanced Cosmic Background */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

          {/* Animated starfield */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`hero-star-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  background: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#06B6D4"][
                    Math.floor(Math.random() * 7)
                  ],
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
                }}
                animate={{
                  y: [0, Math.random() * -200 - 100],
                  x: [0, Math.random() * 100 - 50],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={`hero-orbit-${i}`}
                className="absolute border border-white/10 rounded-full"
                style={{
                  width: 200 + i * 150,
                  height: 200 + i * 150,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20 + i * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                {/* Orbital particles */}
                {Array.from({ length: 3 + i }).map((_, j) => (
                  <motion.div
                    key={`hero-orbital-particle-${i}-${j}`}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: `linear-gradient(45deg, ${
                        ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"][i]
                      }, ${["#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#EC4899"][i]})`,
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${100 + i * 75}px 0`,
                      boxShadow: `0 0 10px ${["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444"][i]}`,
                    }}
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15 + j * 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: j * 2,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Enhanced floating gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(139,92,246,0.2) 50%, transparent 100%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full filter blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(245,158,11,0.2) 50%, transparent 100%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full filter blur-2xl"
            style={{
              background: "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(6,182,212,0.2) 50%, transparent 100%)",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.7, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
                <Rocket className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Our Solutions</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 leading-tight mb-6">
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive services tailored to meet your business needs and drive exceptional growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section ref={servicesRef} className="py-24 relative overflow-hidden">
        {/* Enhanced background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />

        {/* Animated constellation pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={`service-star-${i}`}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            >
              <div
                className="w-1 h-1 rounded-full"
                style={{
                  background: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"][Math.floor(Math.random() * 4)],
                  boxShadow: `0 0 ${Math.random() * 8 + 4}px currentColor`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-purple-500/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 6, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Sparkles className="h-4 w-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Service Portfolio</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We provide end-to-end solutions tailored to your business requirements
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
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
                  variants={fadeInUpVariants}
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Link href={`#${service.id}`}>
                    <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 h-full overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${
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
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          <span className="text-sm font-medium">Explore Solution</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* IT Consulting Section */}
      <section id="it-consulting" ref={itConsultingRef} className="py-24 relative overflow-hidden">
        {/* Enhanced cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/5" />

        {/* Spiral galaxy effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`it-spiral-${i}`}
              className="absolute"
              style={{
                width: 250 + i * 80,
                height: 250 + i * 80,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30 + i * 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {Array.from({ length: 8 }).map((_, j) => (
                <motion.div
                  key={`it-spiral-particle-${i}-${j}`}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: "#3B82F6",
                    top: "50%",
                    left: "50%",
                    transformOrigin: `${125 + i * 40}px 0`,
                    transform: `rotate(${j * 45}deg)`,
                    boxShadow: `0 0 4px #3B82F6`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: j * 0.2,
                  }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Innovative IT Solutions for Your Business
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our IT consulting services provide expert guidance to optimize technology, improve efficiency, and
                support business growth through innovative IT solutions. We help businesses leverage technology to gain
                a competitive edge in today's digital landscape.
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

                {/* Enhanced Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                      <Star className="w-6 h-6 text-blue-400" />
                      Benefits
                    </h3>
                    <div className="space-y-4">
                      {services[0].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-blue-300" />
                          </div>
                          <span className="text-white font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.2) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
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
      <section id="hr-services" ref={hrConsultingRef} className="py-24 relative overflow-hidden">
        {/* Enhanced cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-purple-900/5" />

        {/* Network constellation */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={`hr-node-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                background: "#8B5CF6",
                boxShadow: `0 0 10px #8B5CF6`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isHrConsultingInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants} className="order-2 lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-700/20 mix-blend-overlay z-10" />

                {/* Enhanced Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                      <Star className="w-6 h-6 text-purple-400" />
                      Benefits
                    </h3>
                    <div className="space-y-4">
                      {services[1].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-purple-300" />
                          </div>
                          <span className="text-white font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.2) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Strategic HR Solutions for Growth
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our HR consulting services guide businesses in managing people, improving workplace culture, and
                aligning HR strategies with business goals. We help organizations build strong, engaged teams that drive
                success.
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
      <section id="recruitment" ref={recruitmentRef} className="py-24 relative overflow-hidden">
        {/* Enhanced cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 to-green-900/5" />

        {/* Floating hexagons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`recruitment-hexagon-${i}`}
            className="absolute border border-green-500/20"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              rotate: 360,
              y: [0, -30, 0],
            }}
            transition={{
              rotate: { duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              y: { duration: 8 + i * 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Connect with Top Talent
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our recruitment and manpower consulting services connect businesses with the right talent to drive
                growth and success. We provide strategic recruitment solutions tailored to your specific needs and
                industry requirements.
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

                {/* Enhanced Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                      <Star className="w-6 h-6 text-green-400" />
                      Benefits
                    </h3>
                    <div className="space-y-4">
                      {services[2].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-green-300" />
                          </div>
                          <span className="text-white font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(16,185,129,0.2) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
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
      <section id="staffing" ref={pdpRef} className="py-24 relative overflow-hidden">
        {/* Enhanced cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-900/5" />

        {/* Shooting stars */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`pdp-shooting-star-${i}`}
              className="absolute h-0.5 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                background: `linear-gradient(90deg, #F59E0B, transparent)`,
                top: `${Math.random() * 100}%`,
                left: "-100px",
                boxShadow: `0 0 10px #F59E0B`,
              }}
              animate={{
                x: ["0px", "100vw"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 8,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isPdpInView ? "visible" : "hidden"}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUpVariants} className="order-2 lg:order-1 relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-700/20 mix-blend-overlay z-10" />

                {/* Enhanced Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="max-w-md p-6">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                      <Star className="w-6 h-6 text-amber-400" />
                      Benefits
                    </h3>
                    <div className="space-y-4">
                      {services[3].benefits.map((benefit, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                          className="bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                        >
                          <div className="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-amber-300" />
                          </div>
                          <span className="text-white font-medium">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced background pattern */}
                <div className="absolute inset-0 bg-zinc-900 z-0">
                  <div className="absolute inset-0 opacity-30">
                    <div
                      className="h-full w-full"
                      style={{
                        backgroundImage: "radial-gradient(circle, rgba(245,158,11,0.2) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Enhanced floating elements */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unlock Your Full Potential
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
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
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        {/* Enhanced CTA background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />

        {/* Pulsing energy rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={`cta-energy-ring-${i}`}
              className="absolute border rounded-full"
              style={{
                width: 200 + i * 150,
                height: 200 + i * 150,
                borderColor: ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B"][i],
                borderWidth: "1px",
                opacity: 0.3,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">Ready to Transform</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss how our solutions can help you achieve your business goals and drive
              exceptional growth.
            </p>
            <Button
              asChild
              className="rounded-full px-8 py-7 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="/contact" className="flex items-center">
                Get Started Today
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
