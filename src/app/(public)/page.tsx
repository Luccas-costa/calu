'use client'
import React, { useState, useEffect } from 'react'

import fonts from '@/styles/globals/fonts.module.css'
import IndexDesktop from '@/components/pages/home/index/index-desktop'
import IndexMobile from '@/components/pages/home/index/index-mobile'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Adiciona o event listener no resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Remove o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className={`${fonts.monserrat} h-screen w-screen bg-black text-white`}>
      {isMobile ? <IndexMobile /> : <IndexDesktop />}
    </div>
  )
}
