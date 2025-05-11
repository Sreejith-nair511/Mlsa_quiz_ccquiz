"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Clock, ArrowLeft, Medal } from "lucide-react"

interface LeaderboardEntry {
  id: number
  name: string
  usn: string
  department: string
  score: number
  time: number
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, fetch from API
    // For now, generate mock data
    const mockData: LeaderboardEntry[] = [
      { id: 1, name: "Aditya Sharma", usn: "1CG20CS001", department: "CSE", score: 15, time: 145000 },
      { id: 2, name: "Priya Patel", usn: "1CG20CS045", department: "CSE", score: 14, time: 152000 },
      { id: 3, name: "Rahul Verma", usn: "1CG20IS032", department: "ISE", score: 14, time: 167000 },
      { id: 4, name: "Sneha Gupta", usn: "1CG20EC021", department: "ECE", score: 13, time: 143000 },
      { id: 5, name: "Vikram Singh", usn: "1CG20CS078", department: "CSE", score: 13, time: 178000 },
      { id: 6, name: "Ananya Reddy", usn: "1CG20IS012", department: "ISE", score: 12, time: 162000 },
      { id: 7, name: "Karthik Nair", usn: "1CG20CS033", department: "CSE", score: 12, time: 189000 },
      { id: 8, name: "Meera Joshi", usn: "1CG20EC056", department: "ECE", score: 11, time: 171000 },
      { id: 9, name: "Arjun Kumar", usn: "1CG20ME018", department: "ME", score: 10, time: 195000 },
      { id: 10, name: "Divya Shah", usn: "1CG20CS022", department: "CSE", score: 10, time: 203000 },
    ]

    // Sort by score (descending) and then by time (ascending)
    const sortedData = [...mockData].sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score
      }
      return a.time - b.time
    })

    setLeaderboard(sortedData)
    setIsLoading(false)
  }, [])

  const formatTime = (time: number) => {
    const totalSeconds = Math.floor(time / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  const getMedalColor = (position: number) => {
    switch (position) {
      case 0:
        return "text-yellow-400" // Gold
      case 1:
        return "text-gray-300" // Silver
      case 2:
        return "text-amber-600" // Bronze
      default:
        return "text-gray-500"
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center quiz-container">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-white">Loading leaderboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col p-4 quiz-container">
      <div className="flex items-center justify-between mb-6">
        <Link href="/">
          <Button variant="ghost" className="text-white p-0">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Button>
        </Link>
        <div className="relative w-10 h-10">
          <Image src="/mlsa-logo.png" alt="MLSA Logo" fill className="object-contain" />
        </div>
      </div>

      <Card className="bg-black/40 backdrop-blur-sm border-purple-900">
        <CardHeader className="text-center pb-2">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="text-accent mr-2" size={24} />
            <CardTitle className="text-2xl font-bold text-white">Leaderboard</CardTitle>
          </div>
          <p className="text-gray-400 text-sm">Top performers ranked by score and time</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboard.map((entry, index) => (
              <div
                key={entry.id}
                className={`flex items-center p-3 rounded-lg ${index < 3 ? "bg-primary/20" : "bg-gray-800/30"}`}
              >
                <div className="flex-shrink-0 w-8 text-center">
                  {index < 3 ? (
                    <Medal className={getMedalColor(index)} size={20} />
                  ) : (
                    <span className="text-gray-400 font-bold">{index + 1}</span>
                  )}
                </div>

                <div className="ml-3 flex-1">
                  <p className="font-bold text-white">{entry.name}</p>
                  <p className="text-xs text-gray-400">
                    {entry.usn} • {entry.department}
                  </p>
                </div>

                <div className="flex items-center">
                  <div className="text-right mr-4">
                    <p className="font-bold text-white">{entry.score}/15</p>
                    <div className="flex items-center text-xs text-gray-400">
                      <Clock className="mr-1" size={12} />
                      {formatTime(entry.time)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
