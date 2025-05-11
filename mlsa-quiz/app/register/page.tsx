"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  usn: z.string().min(3, {
    message: "USN must be at least 3 characters.",
  }),
  yearSem: z.string({
    required_error: "Please select your year and semester.",
  }),
  department: z.string({
    required_error: "Please select your department.",
  }),
})

export default function RegisterPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      usn: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Store user data in localStorage
    localStorage.setItem("quizUserData", JSON.stringify(values))

    // Navigate to countdown page
    router.push("/countdown")
  }

  return (
    <div className="quiz-container vibranium-pattern flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-black/40 backdrop-blur-sm border-purple-900 glow-box">
          <CardHeader className="text-center">
            <div className="mx-auto relative w-24 h-24 mb-2">
              <Image src="/mlsa-logo.png" alt="MLSA Logo" fill className="object-contain" />
            </div>
            <CardTitle className="text-2xl font-orbitron font-bold text-white glow-text">
              Register for the Quiz
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="bg-black/30 border-purple-900/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="usn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">USN</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your USN" {...field} className="bg-black/30 border-purple-900/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yearSem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Year & Semester</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/30 border-purple-900/50">
                            <SelectValue placeholder="Select year and semester" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black/90 border-purple-900">
                          <SelectItem value="1-1">1st Year - 1st Semester</SelectItem>
                          <SelectItem value="1-2">1st Year - 2nd Semester</SelectItem>
                          <SelectItem value="2-1">2nd Year - 1st Semester</SelectItem>
                          <SelectItem value="2-2">2nd Year - 2nd Semester</SelectItem>
                          <SelectItem value="3-1">3rd Year - 1st Semester</SelectItem>
                          <SelectItem value="3-2">3rd Year - 2nd Semester</SelectItem>
                          <SelectItem value="4-1">4th Year - 1st Semester</SelectItem>
                          <SelectItem value="4-2">4th Year - 2nd Semester</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Department</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-black/30 border-purple-900/50">
                            <SelectValue placeholder="Select your department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-black/90 border-purple-900">
                          <SelectItem value="CSE">Computer Science Engineering</SelectItem>
                          <SelectItem value="ISE">Information Science Engineering</SelectItem>
                          <SelectItem value="ECE">Electronics & Communication</SelectItem>
                          <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                          <SelectItem value="ME">Mechanical Engineering</SelectItem>
                          <SelectItem value="CV">Civil Engineering</SelectItem>
                          <SelectItem value="BT">Biotechnology</SelectItem>
                          <SelectItem value="OTHER">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-orbitron glow-box"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Start Quiz"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="text-center text-sm text-gray-400 mt-4">Made by sreejith of MLSA</div>
      </motion.div>
    </div>
  )
}
