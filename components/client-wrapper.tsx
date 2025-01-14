"use client"

import { VideoBackground } from "./video-background"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VideoBackground />
      {children}
    </>
  )
}

