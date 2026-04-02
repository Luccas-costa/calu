'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/globals/fonts.module.css'
import sliderStyle from '@/styles/slider.module.css'
import { Asterisk } from '@phosphor-icons/react/dist/ssr'

const items = [
  'Chatona',
  'Carol',
  'Princesa',
  'Lindona',
  'Bobona',
  'Cakinha',
  'Cá',
]

interface SkillsProps {
  isFaixa?: boolean
}

export default function Apelidos({ isFaixa }: SkillsProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 550)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Extraímos os itens para uma função e evitamos repetir código
  const renderItems = () => (
    <>
      {items.map((text, index) => (
        <React.Fragment key={index}>
          <Asterisk size={isMobile ? 16 : 22} weight="bold" />
          <div>{text}</div>
        </React.Fragment>
      ))}
    </>
  )

  return (
    <div className="relative h-full w-full">
      {isFaixa && (
        <div
          style={{ zIndex: 1 }}
          className="absolute left-1/2 top-0 h-full w-[110vw] translate-x-[-50%] rotate-[3.5deg] bg-[#714da6] pb-[80px] opacity-0 screen630:rotate-[2deg]"
        ></div>
      )}
      <div
        style={{ zIndex: 2 }}
        className="relative h-[55px] w-full overflow-hidden bg-[#CA4546]"
      >
        {/* Container principal que faz a animação de scroll */}
        <div
          className={`flex h-full w-max text-zinc-900 screen550:text-xl screen630:text-2xl ${sliderStyle.sliderTrack} ${styles.monserrat}`}
        >
          {/* GRUPO 1: Lista Original */}
          <div className="flex h-full items-center gap-[20px] pr-[20px] screen550:gap-[30px] screen550:pr-[30px] screen630:gap-[50px] screen630:pr-[50px]">
            {renderItems()}
          </div>

          {/* GRUPO 2: Lista Clone idêntica */}
          <div className="flex h-full items-center gap-[20px] pr-[20px] screen550:gap-[30px] screen550:pr-[30px] screen630:gap-[50px] screen630:pr-[50px]">
            {renderItems()}
          </div>
        </div>
      </div>
    </div>
  )
}
