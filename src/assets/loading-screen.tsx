'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image' // <- Importamos o Image nativo do Next.js
import svgTulipa from '../../public/assets/tulipa.png'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    let currentProgress = 0

    const updateProgress = () => {
      // Pulo aleatório entre 5% e 15%
      const jump = Math.floor(Math.random() * 11) + 5
      currentProgress += jump

      if (currentProgress >= 100) {
        setProgress(100)
        // Quando chega em 100%, espera, faz o fade out e avisa que acabou
        setTimeout(() => {
          setIsFadingOut(true)
          setTimeout(onComplete, 500)
        }, 800)
      } else {
        setProgress(currentProgress)
        // Delay aleatório entre pulos (100ms a 400ms)
        const nextTickDelay = Math.floor(Math.random() * 300) + 100
        setTimeout(updateProgress, nextTickDelay)
      }
    }

    const initialDelay = setTimeout(updateProgress, 300)

    return () => clearTimeout(initialDelay)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ background: '#CA4646' }}
    >
      {/* Container da Tulipa Estática */}
      <div className="relative mb-8 flex items-center justify-center">
        <Image
          src={svgTulipa}
          alt="Ícone de Tulipa carregando"
          width={120}
          height={120}
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="font-display text-2xl font-light text-white md:text-5xl">
          {progress}%
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-pink-500/80">
          Carregando o nosso universo...
        </span>
      </div>
    </div>
  )
}
