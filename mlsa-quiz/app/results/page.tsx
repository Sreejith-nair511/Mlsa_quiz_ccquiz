"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Clock, Home } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface QuizResults {
  name: string
  usn: string
  yearSem: string
  department: string
  score: number
  totalTime: number
}

export default function ResultsPage() {
  const router = useRouter()
  const [results, setResults] = useState<QuizResults | null>(null)

  useEffect(() => {
    // Get results from localStorage
    const storedResults = localStorage.getItem("quizResults")
    if (!storedResults) {
      router.push("/")
      return
    }

    setResults(JSON.parse(storedResults))
  }, [router])

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  if (!results) {
    return (
      <div className="quiz-container flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-white">Loading results...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container panthera-bg flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" fill className="object-contain" />
          </div>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-purple-900 glow-box mb-6">
          <CardHeader className="text-center pb-2">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <CardTitle className="text-3xl font-orbitron font-bold text-white glow-text">
                Well Done, {results.name}!
              </CardTitle>
            </motion.div>
          </CardHeader>
          <CardContent className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center items-center mb-8"
            >
              <Trophy className="text-accent mr-3" size={40} />
              <span className="text-5xl font-bold text-white font-orbitron glow-gold">{results.score} / 15</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="bg-primary/20 p-4 rounded-lg mb-6"
            >
              <Clock className="text-primary mx-auto mb-2" size={24} />
              <p className="text-sm text-gray-400">Time Taken</p>
              <p className="text-2xl font-mono font-bold text-white">{formatTime(results.totalTime)}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Link href="/">
                <Button className="w-full bg-accent hover:bg-accent/90 text-black font-bold font-orbitron glow-box-gold flex items-center justify-center">
                  <Home className="mr-2" size={18} />
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-400">Made by sreejith of MLSA</div>
      </motion.div>
    </div>
  )
}
