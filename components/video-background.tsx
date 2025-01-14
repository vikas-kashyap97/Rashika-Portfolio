"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/lib/theme-context"

export function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const { currentTheme } = useTheme()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Video autoplay failed")
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div className={`absolute inset-0 bg-gradient-to-br ${currentTheme.background} opacity-90`} />
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${isVideoLoaded ? 'opacity-50' : 'opacity-0'}`}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

