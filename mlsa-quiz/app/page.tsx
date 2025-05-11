"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Home() {
  const router = useRouter()
  const [showIntro, setShowIntro] = useState(true)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const handleStart = () => {
    router.push("/register")
  }

  return (
    <main className="quiz-container panthera-bg flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden">
      {showIntro ? (
        <div className="intro-animation flex flex-col items-center justify-center h-screen w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-48 h-48 mb-4 logo-animation"
          >
            <Image
              src="/mlsa-logo.png"
              alt="MLSA Logo"
              fill
              className="object-contain"
              priority
              onLoad={() => setLogoLoaded(true)}
            />
          </motion.div>
          {logoLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h1 className="text-4xl font-orbitron font-bold text-center glow-text">MLSA CIT Chapter</h1>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 mb-2"
          >
            <Image src="/mlsa-logo.png" alt="MLSA Logo" fill className="object-contain" priority />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
            <h1 className="text-4xl font-orbitron font-bold tracking-tight text-white">
              <span className="block">MLSA CIT Chapter</span>
              <span className="block mt-2 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-accent glow-gold">
                Content Creation Quiz
              </span>
            </h1>

            <p className="text-lg text-gray-300 max-w-sm mt-4">
              Test your knowledge about content creation strategies and best practices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8 w-full"
          >
            <Button
              onClick={handleStart}
              className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-white font-orbitron glow-box"
            >
              START QUIZ
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-sm text-gray-400 mt-8"
          >
            Made by sreejith of MLSA
          </motion.div>
        </div>
      )}
    </main>
  )
}
