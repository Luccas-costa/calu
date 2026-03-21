'use client'
import React, { useState, useEffect } from 'react'

import fonts from '@/styles/globals/fonts.module.css'
import IndexDesktop from '@/components/pages/home/index/index-desktop'
import IndexMobile from '@/components/pages/home/index/index-mobile'
import LoadingScreen from '@/assets/loading-screen' // <- Ajuste o caminho se necessário

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true) // <- Novo estado de loading

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className={`${fonts.monserrat} h-screen w-screen bg-black text-white`}>
      {/* Se estiver carregando, mostra a tela da tulipa */}
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div className="h-full w-full duration-1000 animate-in fade-in">
          {isMobile ? <IndexMobile /> : <IndexDesktop />}
        </div>
      )}
    </div>
  )
}
