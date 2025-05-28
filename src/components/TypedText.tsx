"use client"

import { useEffect, useRef } from "react"
import Typed from "typed.js"

interface TypedTextProps {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  backDelay?: number
  loop?: boolean
  showCursor?: boolean
  cursorChar?: string
  className?: string
}

export default function TypedText({
  strings,
  typeSpeed = 70,
  backSpeed = 40,
  backDelay = 1000,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className = "",
}: TypedTextProps) {
  const el = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (!el.current) return

    // Clean up any previous instance
    if (typed.current) {
      typed.current.destroy()
    }

    // Process strings to ensure special characters are handled properly
    const processedStrings = strings.map((str) => str.replace(/&/g, "&amp;"))

    // Create new Typed instance with optimized settings
    typed.current = new Typed(el.current, {
      strings: processedStrings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      showCursor,
      cursorChar,
      smartBackspace: false,
      startDelay: 0,
      autoInsertCss: true,
      // Additional settings to fix the delay issue
      contentType: "html",
      loopCount: loop ? Number.POSITIVE_INFINITY : 0,
      // Prevent issues with special characters
      escapeHTML: false,
      // Ensure smooth transitions
      fadeOut: false,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 0,
      // Prevent any character skipping
      shuffle: false,
      // Ensure consistent timing
      bindInputFocusEvents: false,
      attr: null,
      // Improve performance
      stringsElement: null,
    })

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor, cursorChar])

  return <span ref={el} className={className}></span>
}
