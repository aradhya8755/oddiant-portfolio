"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

interface TypedTextProps {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
  showCursor?: boolean
  backDelay?: number
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  loop = true,
  showCursor = true,
  backDelay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentString = strings[currentStringIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentString.length) {
          setDisplayedText(currentString.substring(0, displayedText.length + 1))
          timeoutRef.current = setTimeout(handleTyping, typeSpeed)
        } else {
          // Finished typing, wait then start deleting (only if loop is true and multiple strings)
          if (loop && strings.length > 1) {
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true)
              handleTyping()
            }, backDelay)
          }
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
          timeoutRef.current = setTimeout(handleTyping, backSpeed)
        } else {
          // Finished deleting, move to next string
          setIsDeleting(false)
          setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length)
        }
      }
    }

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Start the typing process
    timeoutRef.current = setTimeout(handleTyping, isDeleting ? backSpeed : typeSpeed)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [displayedText, currentStringIndex, isDeleting, strings, typeSpeed, backSpeed, loop, backDelay])

  return (
    <>
      {displayedText}
      {showCursor && <span className="blinking-cursor">|</span>}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 0.5em;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            color: transparent;
          }
          50% {
            color: white;
          }
        }
      `}</style>
    </>
  )
}

export default TypedText
