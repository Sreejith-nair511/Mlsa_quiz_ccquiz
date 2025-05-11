"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export default function CountdownPage() {
  const router = useRouter()
  const [count, setCount] = useState(3)

  useEffect(() => {
    if (count === 0) {
      router.push("/quiz")
      return
    }

    const timer = setTimeout(() => {
      setCount(count - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [count, router])

  return (
    <div className="quiz-container flex min-h-screen flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={count}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {count > 0 ? (
            <div className="text-9xl font-orbitron font-bold text-accent glow-gold countdown-animation">{count}</div>
          ) : (
            <div className="text-5xl font-orbitron font-bold text-white glow-text">GO!</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
