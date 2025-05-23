"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/company", label: "Company" },
    { href: "/solutions", label: "Solutions" },
    { href: "/contact", label: "Contact Us" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
    className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black backdrop-blur-md shadow-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div variants={logoVariants} initial="initial" animate="animate" whileHover="hover">
            <Link href="/" className="relative">
              <div style={{ width: "180px", height: "40px", position: "relative" }}>
                <Image
                  src="/images/logos/oddiant-preview.png"
                  alt="Oddiant Techlabs"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div key={link.href} variants={itemVariants}>
                <Link
                  href={link.href}
                  className={`relative text-white font-medium transition-colors group overflow-hidden`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transform origin-left transition-transform duration-300 ${
                      activeLink === link.href ? "scale-x-100" : "scale-x-0"
                    } group-hover:scale-x-100`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-colors">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-b from-black to-zinc-900 text-white border-zinc-800">
              <SheetTitle className="text-white sr-only">Navigation Menu</SheetTitle>
              <div className="flex justify-end mb-8">
                {/* <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X size={24} />
                </Button> */}
              </div>

              <div className="flex flex-col space-y-8 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-2xl font-medium transition-all duration-300 hover:text-green-400 ${
                      activeLink === link.href ? "text-green-400" : "text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        className={`h-0.5 w-5 bg-green-400 ${activeLink === link.href ? "opacity-100" : "opacity-0"}`}
                      ></span>
                      <span>{link.label}</span>
                    </div>
                  </Link>
                ))}
              </div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>

      )
    }