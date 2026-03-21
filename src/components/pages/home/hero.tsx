'use client'

import { useState } from 'react'
import Image from 'next/image'
import heroImage from '../../../../public/assets/background-calu.jpeg'
import redTulip from '../../../../public/assets/red-tulip.png'
import ScrollReveal from './scroll-reveal'

// Lista de motivos (você pode adicionar quantos quiser aqui!)
const motivos = [
  'Porque o seu sorriso ilumina até os meus dias mais difíceis.',
  'Pelo jeito como você me olha e me faz sentir a pessoa mais especial do mundo.',
  'Porque com você, qualquer momento simples (até ir ao mercado) se torna inesquecível.',
  'Pela sua risada, que sem dúvida é a minha música favorita.',
  'Porque você me inspira a ser alguém melhor todos os dias.',
  'Pelo seu abraço, que é o lugar mais seguro do mundo para mim.',
  'Porque mesmo depois de todo esse tempo, meu coração ainda acelera quando te vejo.',
  'Pela forma como a gente se entende só pelo olhar.',
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
    <section className="bg-paper relative flex min-h-screen items-center justify-center overflow-hidden">
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

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <ScrollReveal>
          <Image
            src={redTulip}
            alt="Tulipa vermelha"
            width={96}
            height={96}
            className="animate-float mx-auto mb-8"
          />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1
            className="font-display text-ink mb-6 text-4xl font-[300] leading-[1.1] tracking-tight md:text-6xl"
            style={{ textWrap: 'balance' }}
          >
            Para Você,
            <br />
            <span className="text-red-sun font-[500]">Meu Amor</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p
            className="text-ink-light mx-auto mb-10 max-w-lg text-lg font-light leading-relaxed md:text-xl"
            style={{ textWrap: 'pretty' }}
          >
            Um cantinho nosso, onde cada momento vira eternidade — entre tulipas
            e o pôr do sol.
          </p>
        </ScrollReveal>

        {/* Adicionamos o evento onClick aqui! */}
        <ScrollReveal delay={600}>
          <button
            onClick={abrirPote}
            className="bg-red-sun font-display inline-block px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
          >
            Pote dos Motivos
          </button>
        </ScrollReveal>
      </div>

      {/* Sol decorativo */}
      <div className="bg-red-sun absolute right-12 top-12 z-0 h-16 w-16 rounded-full opacity-80 md:h-24 md:w-24" />

      {/* MODAL DO POTE DE MOTIVOS */}
      {modalAberto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Fundo escuro desfocado (clicar fora fecha) */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
            onClick={() => setModalAberto(false)}
          />

          {/* Cartãozinho da frase */}
          <div className="bg-paper border-red-sun/10 relative z-10 w-full max-w-md scale-100 rounded-2xl border p-8 text-center shadow-2xl duration-300 animate-in fade-in zoom-in-95 md:p-12">
            <Image
              src={redTulip}
              alt=""
              width={40}
              height={40}
              className="mx-auto mb-6 opacity-80"
            />

            <p className="font-display text-ink text-xl font-light italic leading-relaxed md:text-2xl">
              {"'"}
              {motivoSorteado}
              {"'"}
            </p>

            <button
              onClick={() => setModalAberto(false)}
              className="text-ink-light hover:text-red-sun mt-10 text-xs uppercase tracking-widest transition-colors"
            >
              Guardar no coração
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
