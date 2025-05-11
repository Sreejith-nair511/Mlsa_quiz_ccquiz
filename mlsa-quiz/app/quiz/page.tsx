"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "react-transition-group/CSSTransition"
import "react-transition-group/TransitionGroup"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Timer } from "@/components/timer"
import { questions } from "@/lib/questions"
import { motion } from "framer-motion"
import { CustomProgress } from "@/components/ui/custom-progress"

interface UserData {
  name: string
  usn: string
  yearSem: string
  department: string
}

export default function QuizPage() {
  const router = useRouter()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""))
  const [isTimerRunning, setIsTimerRunning] = useState(true)
  const [elapsedTime, setElapsedTime] = useState(0)
  const [userData, setUserData] = useState<UserData | null>(null)

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUserData = localStorage.getItem("quizUserData")
    if (!storedUserData) {
      router.push("/register")
      return
    }

    setUserData(JSON.parse(storedUserData))
  }, [router])

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  const handleNextQuestion = () => {
    if (!selectedOption) return

    // Check if answer is correct and update score
    if (selectedOption === currentQuestion.correctOptionId) {
      setScore(score + 1)
    }

    // Save the answer
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = selectedOption
    setAnswers(newAnswers)

    // Reset selected option
    setSelectedOption(null)

    // Move to next question or finish quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Quiz completed
      setIsTimerRunning(false)

      // Store results in localStorage for results page
      const quizResults = {
        name: userData?.name || "",
        usn: userData?.usn || "",
        yearSem: userData?.yearSem || "",
        department: userData?.department || "",
        score: score + (selectedOption === currentQuestion.correctOptionId ? 1 : 0),
        totalTime: elapsedTime,
      }

      localStorage.setItem("quizResults", JSON.stringify(quizResults))

      // Navigate to results page
      router.push("/results")
    }
  }

  const handleTimeUpdate = (time: number) => {
    setElapsedTime(time)
  }

  if (!userData) {
    return (
      <div className="quiz-container flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-white">Loading quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container vibranium-pattern flex min-h-screen flex-col p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="relative w-10 h-10 mr-2">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" fill className="object-contain" />
          </div>
          <h1 className="text-xl font-orbitron font-bold text-white glow-text">MLSA Quiz</h1>
        </div>
        <Timer isRunning={isTimerRunning} onTimeUpdate={handleTimeUpdate} />
      </div>

      <div className="mb-4">
        <CustomProgress value={progress} />
        <div className="flex justify-between mt-1 text-sm text-gray-400">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>
      </div>

      <TransitionGroup>
        <CSSTransition key={currentQuestionIndex} timeout={300} classNames="question">
          <div className="flex-1 flex flex-col">
            <Card className="flex-1 bg-black/40 backdrop-blur-sm border-purple-900 glow-box">
              <CardContent className="p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-white font-orbitron">{currentQuestion.text}</h2>

                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <motion.div
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`option-card p-4 rounded-lg cursor-pointer transition-all
                        ${selectedOption === option.id ? "selected" : ""}
                      `}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="font-bold text-white">{option.id}</span>
                        </div>
                        <span className="text-white">{option.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Button
                onClick={handleNextQuestion}
                disabled={!selectedOption}
                className="w-full bg-accent hover:bg-accent/90 text-black font-bold font-orbitron glow-box-gold"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Finish Quiz"}
              </Button>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>

      <div className="text-center text-xs text-gray-500 mt-4">Made by sreejith of MLSA</div>
    </div>
  )
}
