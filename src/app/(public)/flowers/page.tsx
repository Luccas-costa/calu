'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import introImage from '../../../../public/flowers/print-intro.jpg'
import finalImage from '../../../../public/flowers/pagina2.png'

export default function Flowers() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [started, setStarted] = useState(false)
  const [videoEnded, setVideoEnded] = useState(false)

  const handleClick = async () => {
    setStarted(true)

    setTimeout(() => {
      videoRef.current?.play()
    }, 50)
  }

  useEffect(() => {
    const preload = new window.Image()
    preload.src = '/flowers/page.webp'
  }, [])

  if (videoEnded) {
    return (
      <div className="w-full">
        <Image
          src={finalImage}
          alt="Flowers"
          className="h-auto w-full"
          priority
        />
      </div>
    )
  }

  return (
    <div
      onClick={!started ? handleClick : undefined}
      className="fixed inset-0 overflow-hidden"
    >
      {!started && (
        <Image
          src={introImage}
          alt="Intro"
          fill
          priority
          className="object-cover"
        />
      )}

      <video
        ref={videoRef}
        src="/flowers/intro.mp4"
        className={`h-full w-full object-cover ${started ? 'block' : 'hidden'}`}
        muted
        playsInline
        preload="auto"
        onEnded={() => setVideoEnded(true)}
      />
    </div>
  )
}
