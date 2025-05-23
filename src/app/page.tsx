"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import FAQSection from "@/components/FAQSection"
import TypedText from "@/components/TypedText"
import {
  ArrowRight,
  Monitor,
  Users,
  UserPlus,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Award,
} from "lucide-react"

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  const servicesRef = useRef<HTMLDivElement>(null)
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const aboutRef = useRef<HTMLDivElement>(null)
  const isAboutInView = useInView(aboutRef, { once: true, amount: 0.2 })

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
      title: "IT Consulting",
      description: "Web Based Solutions & Web App Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "HR Consulting",
      description: "Background Verification & Onboarding and Payroll",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
    },
    {
      title: "Recruitment & Manpower Consulting",
      description: "Permanent Staffing & Contingent Staffing",
      icon: <UserPlus className="w-6 h-6" />,
      color: "green",
    },
    {
      title: "Personality Development Program (PDP)",
      description: "Resume Writing, Soft Skill Training & Interview Preparation",
      icon: <BookOpen className="w-6 h-6" />,
      color: "amber",
    },
  ]

  const stats = [
    { value: "7+", label: "Years Experience" },
    { value: "20+", label: "Global Clients" },
    { value: "1200+", label: "Successful Placements" },
    { value: "2", label: "Delivery Centers" },
  ]

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={targetRef}
        style={{ y, opacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

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

          {/* Animated Shapes */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
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

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-100 leading-tight">
                <TypedText
                  strings={["Empowering Through Personality, Talent & Tech"]}
                  typeSpeed={70}
                  showCursor={true}
                />
              </h1>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Innovative IT consulting, expert staffing solutions, and tailored personality development
              programs—delivered to fit your unique business needs.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            >
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white rounded-full px-8 py-7 text-lg group transition-all duration-300"
              >
                <Link href="/solutions" className="flex items-center">
                  Explore Solutions
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button
                asChild
                className="rounded-full px-8 py-7 text-lg bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 1.5, duration: 1 } },
              }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                  <motion.div
                    className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Sparkles className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Our Services</span>
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
                  key={service.title}
                  variants={fadeInUpVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="h-full"
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 h-full overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                    <CardHeader className="pb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
                      {/* <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                        <span className="text-sm font-medium">Learn more</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div> */}
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-gradient-to-br from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate={isAboutInView ? "visible" : "hidden"} variants={fadeInUpVariants}>
              <div className="inline-block mb-3">
                <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                  <Zap className="h-4 w-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">About Us</span>
                </div>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Roadmap Oddiant Techlabs
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  With over 7 years of industry experience, we've built a strong reputation for delivering results that
                  matter. Our commitment to excellence has earned us the trust of 20+ global clients who rely on us for
                  dependable, top-tier service.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p>
                      <span className="font-bold text-white">1234 Placements & Counting</span> - We take pride in
                      connecting talent with opportunity—making over 1,200 successful placements and transforming
                      careers around the world.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p>
                      <span className="font-bold text-white">2 Strategic Delivery Centers</span> - Our dual-location
                      model enables us to offer seamless support and agile solutions to clients across the globe.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-full px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white transition-all duration-300"
                >
                  <Link href="/company" className="flex items-center">
                    Learn More
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
              variants={fadeInUpVariants}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10" />

                {/* Stats grid */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md p-6">
                    {stats.map((stat, idx) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                        className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
                      >
                        <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                          {stat.value}
                        </span>
                        <span className="text-sm text-gray-300">{stat.label}</span>
                      </motion.div>
                    ))}
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
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <div className="inline-block mb-3">
              <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                <Shield className="h-4 w-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Advantages
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover what makes Oddiant Techlabs the preferred choice for businesses worldwide
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Proven Track Record",
                description: "Over 20+ satisfied clients globally across various industries with consistent results.",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Expert Team",
                description: "Our team of professionals brings diverse expertise and experience to every project.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Quick Turnaround",
                description: "Efficient processes ensuring fast delivery without compromising on quality.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Tailored Solutions",
                description: "Customized approaches to meet your specific business requirements and challenges.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Innovative Approach",
                description: "Leveraging cutting-edge technologies and methodologies for optimal results.",
              },
              {
                icon: <CheckCircle className="w-6 h-6" />,
                title: "Quality Assurance",
                description: "Rigorous quality control processes to ensure excellence in every deliverable.",
              },
            ].map((item, index) => (
              <motion.div key={item.title} variants={fadeInUpVariants} className="h-full">
                <Card className="bg-white/5 backdrop-blur-sm border-zinc-800 h-full overflow-hidden group hover:bg-white/10 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                          {item.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <FAQSection />
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
              Ready to accelerate your business growth?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Contact us today to discuss how Oddiant Techlabs can help you achieve your business goals.
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
