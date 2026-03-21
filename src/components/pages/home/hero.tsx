'use client'

import { useState } from 'react'
import Image from 'next/image'
import heroImage from '../../../../public/assets/background-calu.jpeg'
import redTulip from '../../../../public/assets/red-tulip.png'
import ScrollReveal from './scroll-reveal'

const motivos = [
  'Porque o seu sorriso ilumina até os meus dias mais difíceis.',
  'Pelo jeito como você me olha e me faz sentir a pessoa mais especial do mundo.',
  'Porque com você, qualquer momento simples (até ir no shopping na chuva) se torna inesquecível.',
  'Porque voce é doidona meo kakakakakakk amo isso.',
  'Porque sim simplesmente tabom so aceita.',
  'Pelo seu abraço, que é o lugar mais seguro do mundo para mim.',
  'Porque mesmo depois de todo esse tempo, meu coração ainda acelera quando te vejo.',
  'N posso contar o pq e segredo.',
  'Porque você é a minha pessoa favorita no universo inteiro.',
]

export default function Hero() {
  const [modalAberto, setModalAberto] = useState(false)
  const [motivoSorteado, setMotivoSorteado] = useState('')

  // Função para sortear um motivo e abrir a janelinha
  const abrirPote = () => {
    const indiceAleatorio = Math.floor(Math.random() * motivos.length)
    setMotivoSorteado(motivos[indiceAleatorio])
    setModalAberto(true)
  }

  return (
    /* Substituí min-h-screen por min-h-[100dvh] para evitar problemas com a barra de endereço no mobile */
    <section className="bg-paper relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      {/* Conteúdo - Ajuste no padding lateral para w-full e px-4 no mobile e px-6 no sm */}
      <div className="relative z-10 mx-auto w-full max-w-2xl px-4 text-center sm:px-6">
        <ScrollReveal>
          <Image
            src={redTulip}
            alt="Tulipa vermelha"
            width={96}
            height={96}
            className="animate-float mx-auto mb-6 h-20 w-20 sm:mb-8 sm:h-24 sm:w-24"
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          {/* Adicionado text-3xl para telas muito pequenas, sm:text-4xl e md:text-6xl */}
          <h1
            className="font-display text-ink mb-4 text-3xl font-[300] leading-[1.1] tracking-tight sm:mb-6 sm:text-4xl md:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Para Você,
            <br />
            <span className="text-red-sun font-[500]">Lindona</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          {/* Ajuste do texto para text-base no mobile, subindo para text-lg e text-xl */}
          <p
            className="text-ink-light mx-auto mb-8 max-w-lg text-base font-light leading-relaxed sm:mb-10 sm:text-lg md:text-xl"
            style={{ textWrap: 'pretty' }}
          >
            Um cantinho nosso, onde cada momento vira eternidade — entre tulipas
            e o pôr do sol.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <button
            onClick={abrirPote}
            className="bg-red-sun font-display inline-block w-full px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lg active:scale-[0.97] sm:w-auto sm:px-8"
          >
            Pote dos Motivos
          </button>
        </ScrollReveal>
      </div>

      {/* Sol decorativo - Recuado no mobile (-right-4 -top-4) para não invadir o texto na tela pequena */}
      <div className="bg-red-sun absolute -right-4 -top-4 z-0 h-20 w-20 rounded-full opacity-80 sm:right-12 sm:top-12 md:h-24 md:w-24" />

      {/* MODAL DO POTE DE MOTIVOS */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setModalAberto(false)}
          />

          {/* Card do modal com padding ajustado para telas menores (p-6) */}
          <div className="bg-paper border-red-sun/10 relative z-10 w-full max-w-md scale-100 rounded-2xl border p-6 text-center shadow-2xl duration-300 animate-in fade-in zoom-in-95 sm:p-8 md:p-12">
            <Image
              src={redTulip}
              alt=""
              width={40}
              height={40}
              className="mx-auto mb-4 h-8 w-8 opacity-80 sm:mb-6 sm:h-10 sm:w-10"
            />

            <p className="font-display text-ink text-lg font-light italic leading-relaxed sm:text-xl md:text-2xl">
              {"'"}
              {motivoSorteado}
              {"'"}
            </p>

            <button
              onClick={() => setModalAberto(false)}
              className="text-ink-light hover:text-red-sun mt-8 text-xs uppercase tracking-widest transition-colors sm:mt-10"
            >
              Guardar no coração
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
