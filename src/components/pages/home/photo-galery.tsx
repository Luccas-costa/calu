'use client' // Importante se você estiver usando o App Router do Next.js (pasta app)

import { useState, useEffect } from 'react'
import ScrollReveal from './scroll-reveal'
import Timeline from './timiline'

// Componente auxiliar para os blocos de tempo ficarem harmoniosos
const TimeBlock = ({ value, label }: { value: number; label: string }) => (
  <div className="flex w-16 flex-col items-center justify-center md:w-20">
    <span className="font-display text-red-sun mb-1 text-4xl font-light md:text-5xl">
      {String(value).padStart(2, '0')}
    </span>
    <span className="text-ink-light text-[10px] uppercase tracking-widest md:text-xs">
      {label}
    </span>
  </div>
)

const PhotoGallery = () => {
  // Estado para armazenar o tempo decorrido
  const [timeElapsed, setTimeElapsed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Hook para calcular e atualizar o tempo a cada segundo
  useEffect(() => {
    // A data em que vocês começaram a se falar
    const startDate = new Date('2026-01-05T19:22:00')

    const updateTimer = () => {
      const now = new Date()
      const difference = now.getTime() - startDate.getTime()

      if (difference > 0) {
        const totalDays = Math.floor(difference / (1000 * 60 * 60 * 24))
        const months = Math.floor(totalDays / 30)
        const days = totalDays % 30
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeElapsed({ months, days, hours, minutes, seconds })
      }
    }

    // Atualiza imediatamente e depois a cada 1 segundo (1000ms)
    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-paper-warm px-6 pb-[150px] pt-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display text-ink mb-4 text-center text-3xl font-light md:text-4xl">
            Nossos <span className="text-red-sun">Momentos</span>
          </h2>
          <p className="text-ink-light mx-auto mb-16 max-w-md text-center">
            Cada foto guarda um pedacinho do nosso amor
          </p>
        </ScrollReveal>

        <Timeline />

        {/* Novo Widget do Contador de Tempo */}
        <ScrollReveal direction="up">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center rounded-3xl bg-white/40 px-4 py-10 shadow-sm backdrop-blur-sm md:px-12 md:py-14">
            <p className="text-ink-light font-display mb-8 text-center text-sm uppercase tracking-widest md:text-base">
              Ja faz quantos dias que se me respondeu
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
              <TimeBlock value={timeElapsed.months} label="Meses" />
              <span className="text-red-sun/30 pb-4 text-3xl font-light md:text-5xl">
                :
              </span>

              <TimeBlock value={timeElapsed.days} label="Dias" />
              <span className="text-red-sun/30 pb-4 text-3xl font-light md:text-5xl">
                :
              </span>

              <TimeBlock value={timeElapsed.hours} label="Horas" />
              <span className="text-red-sun/30 pb-4 text-3xl font-light md:text-5xl">
                :
              </span>

              <TimeBlock value={timeElapsed.minutes} label="Minutos" />

              {/* Segundos (escondido em telas muito pequenas para não quebrar a linha, opcional) */}
              <span className="text-red-sun/30 hidden pb-4 text-3xl font-light sm:block md:text-5xl">
                :
              </span>
              <div className="hidden sm:block">
                <TimeBlock value={timeElapsed.seconds} label="Segundos" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default PhotoGallery
