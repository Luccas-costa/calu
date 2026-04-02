'use client'

import Image from 'next/image'
import starMap from '../../../../public/assets/starMap.jpeg'
import ScrollReveal from './scroll-reveal'

const StarMapSection = () => {
  return (
    <section className="bg-ink relative overflow-hidden px-6 py-20 md:py-32">
      {/* Background estrelas */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 40 }).map((_, i) => {
          const top = Math.random() * 100
          const left = Math.random() * 100
          const delay = Math.random() * 4
          const duration = 2 + Math.random() * 3

          return (
            <div
              key={i}
              className="absolute h-[2px] w-[2px] animate-pulse rounded-full bg-primary-foreground"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <ScrollReveal>
          <h2 className="font-display mb-4 text-center text-2xl tracking-wider text-primary-foreground md:text-4xl">
            O Céu do Nosso Dia
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="font-body mx-auto mb-12 max-w-lg text-center text-sm text-primary-foreground/60 md:text-base">
            As estrelas que brilhavam no céu na noite em que tudo começou ✨
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="relative mx-auto h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]">
            {/* Glow externo */}
            <div className="from-red-sun/15 absolute inset-[-12px] rounded-full bg-gradient-to-br to-transparent blur-xl" />

            {/* Imagem */}
            <Image
              src={starMap}
              alt="Mapa das estrelas do nosso dia especial"
              fill
              className="rounded-full border-[3px] border-primary-foreground/20 object-cover shadow-2xl"
            />

            {/* Overlay */}
            <div className="from-ink/30 pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t to-transparent" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <div className="mt-10 space-y-1 text-center">
            <p className="font-display text-lg tracking-wide text-primary-foreground/90 md:text-xl">
              5 de Janeiro de 2026
            </p>
            <p className="font-body text-xs uppercase tracking-widest text-primary-foreground/50 md:text-sm">
              O dia em que as estrelas conspiraram a nosso favor
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default StarMapSection
