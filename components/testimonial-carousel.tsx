"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote:
      "We raised our Series A in just 3 months after connecting with investors through this platform. The matching algorithm is incredibly accurate.",
    author: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As an investor, I've found three promising startups that perfectly match our investment thesis. The detailed profiles saved us countless hours of screening.",
    author: "Michael Chen",
    role: "Partner, Horizon Ventures",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The platform's deal room feature streamlined our negotiation process and helped us close our seed round efficiently and professionally.",
    author: "Alex Rivera",
    role: "Founder, DataSync",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-700/50 shadow-md">
                <CardContent className="p-8">
                  <Quote className="mb-4 h-10 w-10 text-primary/30" />
                  <p className="mb-6 text-lg italic text-slate-700 dark:text-slate-300">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="mr-4 h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full" aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant={current === index ? "default" : "outline"}
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className="h-8 w-8 rounded-full p-0"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

