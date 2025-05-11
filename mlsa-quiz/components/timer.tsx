"use client"

import { useEffect, useState } from "react"

interface TimerProps {
  isRunning: boolean
  onTimeUpdate: (time: number) => void
}

export function Timer({ isRunning, onTimeUpdate }: TimerProps) {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [elapsedTime, setElapsedTime] = useState(0)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isRunning) {
      if (startTime === null) {
        setStartTime(Date.now() - elapsedTime)
      }

      intervalId = setInterval(() => {
        const currentElapsedTime = Date.now() - (startTime || Date.now())
        setElapsedTime(currentElapsedTime)
        onTimeUpdate(currentElapsedTime)
      }, 100)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [isRunning, startTime, elapsedTime, onTimeUpdate])

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return <div className="text-2xl font-mono font-bold text-accent glow-gold">{formatTime(elapsedTime)}</div>
}
