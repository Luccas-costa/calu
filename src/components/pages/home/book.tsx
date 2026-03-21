'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowLeft, Heart } from 'lucide-react'

// --- TIPOS E DADOS ---
interface Topic {
  id: string
  title: string
  desc: string
  content: string
}

const topicsData: Topic[] = [
  {
    id: '01',
    title: 'O Primeiro Olhar',
    desc: 'Como tudo começou...',
    content:
      'Naquele dia, tudo parecia normal, até os nossos olhares se cruzarem. Foi como se o tempo tivesse parado por um segundo. A partir dali, eu soube que a minha vida nunca mais seria a mesma. Cada detalhe daquele momento ficou gravado na minha memória para sempre.',
  },
  {
    id: '02',
    title: 'Nossas Viagens',
    desc: 'Aventuras pelo mundo.',
    content:
      'Lembrar de cada lugar que conhecemos juntos me enche de alegria. Não importa o destino, o que faz a viagem ser perfeita é ter você ao meu lado. Mal posso esperar pelas nossas próximas aventuras e pelas histórias que ainda vamos construir.',
  },
  {
    id: '03',
    title: 'Risadas Sem Fim',
    desc: 'Nossas piadas internas.',
    content:
      'O seu sorriso é a minha parte favorita do dia. Nossas brincadeiras, as piadas que só nós entendemos e as crises de riso de madrugada são os pequenos momentos que tornam o nosso amor tão leve e especial.',
  },
  {
    id: '04',
    title: 'O Futuro',
    desc: 'O que ainda vamos viver.',
    content:
      'Quando fecho os olhos e imagino o futuro, tudo o que eu vejo inclui você. Nossos planos, nossa casa, nossos sonhos... Construir uma vida ao seu lado é o meu maior desejo e a minha maior certeza.',
  },
]

// --- COMPONENTES VISUAIS DAS PÁGINAS ---

const Paper = ({
  children,
  isLeft,
}: {
  children: React.ReactNode
  isLeft?: boolean
}) => (
  <div
    className={`relative flex h-full w-full flex-col bg-[#F9F6F0] p-6 text-[#4A2F1D] shadow-inner sm:p-10 ${
      isLeft ? 'rounded-l-md' : 'rounded-r-md'
    }`}
  >
    <div
      className={`pointer-events-none absolute bottom-0 top-0 w-8 ${
        isLeft ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'
      } from-black/10 to-transparent`}
    />
    {children}
  </div>
)

const CoverFront = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-r-xl bg-[#4A2F1D] p-3 shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
  >
    <div className="absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
    <div className="relative h-full w-full rounded-lg border-[3px] border-double border-[#C5A059] p-2">
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded border border-[#C5A059] px-6 pt-8 transition-transform group-hover:scale-[1.01]">
        <div className="mb-6 text-3xl drop-shadow-md sm:text-4xl">🌷</div>
        <h1 className="text-center font-serif text-3xl leading-snug tracking-wide text-[#C5A059] sm:text-4xl">
          Nosso Livro
          <br />
          de Amor
        </h1>
        <div className="my-6 h-[1px] w-16 bg-[#C5A059] opacity-60" />
        <p className="text-[10px] font-light tracking-[0.3em] text-[#C5A059] sm:text-xs">
          PARA SEMPRE
        </p>
      </div>
    </div>
  </div>
)

// MELHORIA 1: Verso da capa agora é uma folha em branco (guarda do livro)
const CoverBack = () => (
  <Paper isLeft>
    <div className="flex h-full w-full items-center justify-center opacity-10">
      {/* Pode colocar um enfeite sutil aqui, ou deixar em branco */}
      <Heart size={64} className="text-[#C5A059]" />
    </div>
  </Paper>
)

const IntroFront = ({ onNext }: { onNext: () => void }) => (
  <Paper>
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h2 className="mb-6 font-serif text-3xl text-[#4A2F1D] sm:text-4xl">
        Nossa História
      </h2>
      <p className="mb-10 max-w-sm text-base leading-relaxed text-gray-700 sm:text-lg">
        Este livro guarda os momentos mais especiais da nossa jornada juntos.
        Cada página foi escrita com carinho e representa um pedacinho do nosso
        amor.
      </p>
      <button
        onClick={onNext}
        className="flex animate-bounce items-center gap-2 font-semibold text-[#C5A059] transition-colors hover:text-[#8a6635]"
      >
        Abrir Capítulos <ChevronRight size={20} />
      </button>
    </div>
  </Paper>
)

const TOCLeft = ({ onSelect }: { onSelect: (t: Topic) => void }) => (
  <Paper isLeft>
    <div className="px-2 pt-8">
      <h2 className="mb-8 inline-block border-b-2 border-[#C5A059]/30 pb-4 font-serif text-3xl text-[#4A2F1D]">
        Capítulos
      </h2>
      <div className="flex flex-col gap-6">
        {topicsData.slice(0, 2).map((t) => (
          <div
            key={t.id}
            onClick={() => onSelect(t)}
            className="group flex cursor-pointer items-start gap-3"
          >
            <span className="font-serif text-xl text-[#C5A059] opacity-50 transition-opacity group-hover:opacity-100">
              {t.id}.
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#4A2F1D] transition-colors group-hover:text-[#C5A059]">
                {t.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Paper>
)

const TOCRight = ({ onSelect }: { onSelect: (t: Topic) => void }) => (
  <Paper>
    <div className="px-2 pt-[5.5rem]">
      <div className="flex flex-col gap-6">
        {topicsData.slice(2, 4).map((t) => (
          <div
            key={t.id}
            onClick={() => onSelect(t)}
            className="group flex cursor-pointer items-start gap-3"
          >
            <span className="font-serif text-xl text-[#C5A059] opacity-50 transition-opacity group-hover:opacity-100">
              {t.id}.
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#4A2F1D] transition-colors group-hover:text-[#C5A059]">
                {t.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Paper>
)

const TopicLeft = ({ topic, onBack }: { topic: Topic; onBack: () => void }) => (
  <Paper isLeft>
    <div className="flex h-full flex-col">
      <button
        onClick={onBack}
        className="mb-6 flex w-fit items-center gap-2 text-sm text-[#C5A059] transition-colors hover:text-[#8a6635]"
      >
        <ArrowLeft size={16} /> Voltar aos Capítulos
      </button>
      <h2 className="mb-4 font-serif text-2xl text-[#4A2F1D] sm:text-3xl">
        {topic.title}
      </h2>
      <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-gray-700 sm:text-base">
        {topic.content}
      </p>
      <div className="mt-auto text-center font-serif text-sm text-[#C5A059]">
        ~ {topic.id} ~
      </div>
    </div>
  </Paper>
)

const BaseRight = ({ topic }: { topic: Topic }) => (
  <div
    className="absolute inset-0 h-full w-full"
    style={{ left: '50%', width: '50%' }}
  >
    <Paper>
      <div className="flex h-full flex-col items-center justify-center p-4">
        <div className="group relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-[#C5A059]/40 bg-[#C5A059]/5 transition-colors hover:bg-[#C5A059]/10">
          <p className="z-10 px-4 text-center font-medium text-[#C5A059]/80">
            [ Espaço para colocar uma foto linda nossa aqui ]
          </p>
          <Heart className="absolute h-32 w-32 text-[#C5A059] opacity-5" />
        </div>
        <p className="mt-4 text-center text-xs italic text-gray-400">
          Nossas memórias: {topic.title}
        </p>
      </div>
    </Paper>
  </div>
)

const Sheet = ({
  index,
  step,
  front,
  back,
}: {
  index: number
  step: number
  front: React.ReactNode
  back: React.ReactNode
}) => {
  const isFlipped = step > index
  const zIndex = isFlipped ? 10 + index : 50 - index

  return (
    <motion.div
      className="absolute left-1/2 top-0 h-full w-1/2"
      style={{
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        zIndex,
      }}
      animate={{ rotateY: isFlipped ? -180 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {front}
      </div>
      <div
        className="absolute inset-0 h-full w-full"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        {back}
      </div>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function LoveBook() {
  const [step, setStep] = useState(0)
  const [activeTopic, setActiveTopic] = useState<Topic>(topicsData[0])
  const [isFlipping, setIsFlipping] = useState(false)

  const handleTopicSelect = (topic: Topic) => {
    setActiveTopic(topic)
    setIsFlipping(true)

    setTimeout(() => {
      setStep(3)
    }, 300)

    setTimeout(() => {
      setIsFlipping(false)
    }, 900)
  }

  return (
    // Transformei em um flex-col para o botão ficar em baixo
    <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1c1c1c] p-4 font-sans sm:p-8">
      {/* Container Principal do Livro */}
      <div
        className="relative aspect-[1/1.2] w-full max-w-[800px] sm:aspect-[1.6/1]"
        style={{ perspective: '2500px' }}
      >
        <motion.div
          animate={{ x: step === 0 ? '-25%' : '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <BaseRight topic={activeTopic} />

          <Sheet
            index={2}
            step={step}
            front={<TOCRight onSelect={handleTopicSelect} />}
            back={<TopicLeft topic={activeTopic} onBack={() => setStep(2)} />}
          />

          <Sheet
            index={1}
            step={step}
            front={<IntroFront onNext={() => setStep(2)} />}
            back={<TOCLeft onSelect={handleTopicSelect} />}
          />

          <Sheet
            index={0}
            step={step}
            front={<CoverFront onClick={() => setStep(1)} />}
            back={<CoverBack />}
          />

          {/* MELHORIA 2: Páginas fantasmas arrumadas (sem backfaceVisibility hidden) */}
          {isFlipping && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{ transformStyle: 'preserve-3d', zIndex: 60 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`dummy-${i}`}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                  // Removido o backface-visibility daqui, então as páginas não somem no meio!
                  className="absolute left-1/2 h-full w-1/2 border-l border-black/5 bg-[#F9F6F0] shadow-[2px_0_10px_rgba(0,0,0,0.1)]"
                  style={{ transformOrigin: 'left center' }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* MELHORIA 3: Botão externo para fechar o livro */}
      <AnimatePresence>
        {step > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setStep(0)}
            className="z-50 mt-10 font-light tracking-wide text-[#C5A059] underline decoration-1 underline-offset-4 transition-colors hover:text-[#e0b769]"
          >
            Fechar livro
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
