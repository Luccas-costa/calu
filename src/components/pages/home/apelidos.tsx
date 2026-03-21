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
    // Função para verificar o tamanho da tela
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 550)
    }

    // Adiciona o event listener no resize
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    // Remove o event listener quando o componente desmonta
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const duplicated = [...items, ...items]

  return (
    <div className="relative h-full w-full">
      {isFaixa ? (
        <div
          style={{ zIndex: 1 }}
          className="absolute left-1/2 top-0 h-full w-[110vw] translate-x-[-50%] rotate-[3.5deg] bg-[#714da6] pb-[80px] opacity-0 screen630:rotate-[2deg]"
        ></div>
      ) : (
        <></>
      )}
      <div
        style={{ zIndex: 2 }}
        className="relative h-[55px] w-full overflow-hidden bg-[#CA4546]"
      >
        <div
          className={`flex h-full translate-x-[-14px] items-center gap-[20px] text-zinc-900 screen550:gap-[30px] screen550:text-xl screen630:gap-[50px] screen630:text-2xl ${sliderStyle.sliderTrack} ${styles.monserrat}`}
        >
          {duplicated.map((text, index) => (
            <React.Fragment key={index}>
              <Asterisk size={isMobile ? 16 : 22} weight="bold" />
              <div>{text}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}
