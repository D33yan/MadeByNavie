"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Send, CheckCircle, AlertCircle, Loader2, User, Mail, MessageSquare, Briefcase, Clock, Github, Linkedin, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sendEmail, sendAutoReply, type EmailData } from "@/lib/email"

interface FormData {
  name: string
  email: string
  company: string
  project: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface SubmissionState {
  isSubmitting: boolean
  isSubmitted: boolean
  isError: boolean
  message: string
}

// ContactForm: Form for users to contact MadeByNavie
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const projectTypes = [
    "Website Development",
    "Brand Identity",
    "UI/UX Design",
    "E-commerce Platform",
    "Web Application",
    "Logo Design",
    "Complete Rebrand",
    "Other",
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    // Clear submission state when user modifies form
    if (submissionState.isSubmitted || submissionState.isError) {
      setSubmissionState({
        isSubmitting: false,
        isSubmitted: false,
        isError: false,
        message: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      // Shake animation for invalid form
      if (formRef.current) {
        formRef.current.classList.add("animate-shake")
        setTimeout(() => {
          formRef.current?.classList.remove("animate-shake")
        }, 500)
      }
      return
    }

    setSubmissionState({
      isSubmitting: true,
      isSubmitted: false,
      isError: false,
      message: "",
    })

    try {
      // Prepare email data
      const emailData: EmailData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        project: formData.project,
        message: formData.message.trim(),
      }

      // Send main email
      const result = await sendEmail(emailData)

      if (result.success) {
        // Send auto-reply in background (don't wait for it)
        sendAutoReply(emailData).catch(console.error)

        setSubmissionState({
          isSubmitting: false,
          isSubmitted: true,
          isError: false,
          message: result.message,
        })

        // Reset form after success animation
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            company: "",
            project: "",
            message: "",
          })
          setSubmissionState({
            isSubmitting: false,
            isSubmitted: false,
            isError: false,
            message: "",
          })
        }, 5000) // Show success message for 5 seconds
      } else {
        throw new Error(result.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionState({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: error instanceof Error ? error.message : "An unexpected error occurred. Please try again.",
      })
    }
  }

  // Success state
  if (submissionState.isSubmitted) {
    return (
      <Card className="bg-slate-900/30 dark:bg-slate-900/30 light:bg-white/95 light:shadow-2xl light:shadow-[rgba(0,0,0,0.08)] border-white/10 dark:border-white/10 light:border-slate-200/80 backdrop-blur-xl transition-colors duration-700">
        <CardContent className="p-8 text-center">
          <div className="animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500/80 to-teal-600/80 rounded-full mx-auto mb-6 flex items-center justify-center animate-bounce shadow-2xl shadow-emerald-500/20">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-800 mb-4 transition-colors duration-700">
              Message Sent Successfully! 🎉
            </h3>
            <p className="text-slate-900 dark:text-slate-400 light:text-slate-600 leading-relaxed font-light mb-6 transition-colors duration-700">
              {submissionState.message}
            </p>
            <div className="flex items-center justify-center space-x-2 text-indigo-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Expected response time: Within 24 hours</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Error state
  if (submissionState.isError) {
    return (
      <Card className="bg-slate-900/30 dark:bg-slate-900/30 light:bg-white/95 light:shadow-2xl light:shadow-[rgba(0,0,0,0.08)] border-red-500/20 dark:border-red-500/20 light:border-red-500/40 backdrop-blur-xl transition-colors duration-700">
        <CardContent className="p-8 text-center">
          <div className="animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-r from-red-500/80 to-rose-600/80 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse shadow-2xl shadow-red-500/20">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-medium text-white dark:text-white light:text-slate-800 mb-4 transition-colors duration-700">
              Oops! Something went wrong
            </h3>
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed font-light mb-6 transition-colors duration-700">
              {submissionState.message}
            </p>
            <Button
              onClick={() =>
                setSubmissionState({
                  isSubmitting: false,
                  isSubmitted: false,
                  isError: false,
                  message: "",
                })
              }
              className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 hover:from-indigo-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white dark:bg-slate-900/30 border-slate-200 dark:border-white/10 shadow-xl backdrop-blur-xl transition-colors duration-700">
      <CardContent className="p-8">
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-bold text-slate-900 dark:text-slate-300 transition-colors duration-700"
              >
                Full Name *
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User
                    className={`w-4 h-4 transition-colors duration-300 ${
                      focusedField === "name" || formData.name
                        ? "text-indigo-500"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  disabled={submissionState.isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800/50 border rounded-xl text-slate-900 dark:text-white placeholder-white dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.name
                      ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                      : "border-white dark:border-white/10 hover:border-white dark:hover:border-white/20"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-400 animate-pulse" />
                  </div>
                )}
              </div>
              {errors.name && <p className="text-red-400 text-sm font-light animate-slide-in-left">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-900 dark:text-slate-300 transition-colors duration-700"
              >
                Email Address *
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail
                    className={`w-4 h-4 transition-colors duration-300 ${
                      focusedField === "email" || formData.email
                        ? "text-indigo-500"
                        : "text-slate-400 dark:text-slate-500"
                    }`}
                  />
                </div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  disabled={submissionState.isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800/50 border rounded-xl text-slate-900 dark:text-white placeholder-white dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                    errors.email
                      ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                      : "border-white dark:border-white/10 hover:border-white dark:hover:border-white/20"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <AlertCircle className="w-4 h-4 text-red-400 animate-pulse" />
                  </div>
                )}
              </div>
              {errors.email && <p className="text-red-400 text-sm font-light animate-slide-in-right">{errors.email}</p>}
            </div>
          </div>

          {/* Company Field */}
          <div className="space-y-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-slate-900 dark:text-slate-300 transition-colors duration-700"
            >
              Company / Organization
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Briefcase
                  className={`w-4 h-4 transition-colors duration-300 ${
                    focusedField === "company" || formData.company
                      ? "text-indigo-500"
                      : "text-slate-500 dark:text-slate-500 light:text-slate-500"
                  }`}
                />
              </div>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                onFocus={() => setFocusedField("company")}
                onBlur={() => setFocusedField(null)}
                disabled={submissionState.isSubmitting}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800/50 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20"
                placeholder="Your company name (optional)"
              />
            </div>
          </div>

          {/* Project Type and Budget Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Type */}
            <div className="space-y-2">
              <label
                htmlFor="project"
                className="block text-sm font-medium text-slate-900 dark:text-slate-300 transition-colors duration-700"
              >
                Project Type
              </label>
              <select
                id="project"
                value={formData.project}
                onChange={(e) => handleInputChange("project", e.target.value)}
                onFocus={() => setFocusedField("project")}
                onBlur={() => setFocusedField(null)}
                disabled={submissionState.isSubmitting}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-900 dark:text-slate-300 transition-colors duration-700"
            >
              Project Details *
            </label>
            <div className="relative group">
              <div className="absolute top-3 left-3 pointer-events-none">
                <MessageSquare
                  className={`w-4 h-4 transition-colors duration-300 ${
                    focusedField === "message" || formData.message
                      ? "text-indigo-500"
                      : "text-slate-500 dark:text-slate-500 light:text-slate-500"
                  }`}
                />
              </div>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                disabled={submissionState.isSubmitting}
                className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800/50 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.message
                    ? "border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50"
                    : "border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20"
                }`}
                placeholder="Tell me about your project goals, timeline, and any specific requirements..."
              />
              {errors.message && (
                <div className="absolute top-3 right-3">
                  <AlertCircle className="w-4 h-4 text-red-400 animate-pulse" />
                </div>
              )}
            </div>
            {errors.message && (
              <p className="text-red-400 text-sm font-light animate-slide-in-left">{errors.message}</p>
            )}
            <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-500 light:text-slate-600 transition-colors duration-700">
              <span>Minimum 10 characters</span>
              <span
                className={`transition-colors duration-300 ${formData.message.length >= 10 ? "text-emerald-500" : ""}`}
              >
                {formData.message.length}/500
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={submissionState.isSubmitting}
              className="w-full bg-gradient-to-r from-[hsl(var(--primary))]/90 to-[hsl(var(--accent))]/90 hover:from-[hsl(var(--primary))] hover:to-[hsl(var(--accent))] text-white py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-102 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group border border-white/10"
            >
              {submissionState.isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                  <span className="font-bold">Sending Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-200" />
                  <span className="font-bold">Send Message</span>
                </>
              )}
            </Button>
          </div>

          {/* Form Footer */}
          <div className="text-center pt-4">
            <p className="text-slate-500 dark:text-slate-500 light:text-slate-600 text-sm font-light transition-colors duration-700">
              I typically respond within 24 hours. Let's create something amazing together! 🚀
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
