'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Gift, XCircle } from 'lucide-react'

// --- COMPONENTE DA RASPADINHA (CANVAS) ---
interface ScratchCardProps {
  width: number
  height: number
  onComplete: () => void
  bgImage: string // Imagem do prêmio
}

const ScratchCardLuxo: React.FC<ScratchCardProps> = ({
  width,
  height,
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratched, setIsScratched] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    // Preenche o canvas com a cor vermelha do tema, mas mais texturizada
    ctx.fillStyle = '#c22727' // Cor base
    ctx.fillRect(0, 0, width, height)

    // Adiciona uma textura sutil ao canvas
    const gradient = ctx.createRadialGradient(
      width / 2,
      height / 2,
      20,
      width / 2,
      height / 2,
      width / 2,
    )
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)') // Leve brilho no centro
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    // Texto indicativo, mais central e elegante
    ctx.font = 'bold 24px sans-serif'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Raspe Aqui!', width / 2, height / 2)
  }, [width, height])

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 25, 0, Math.PI * 2) // Tamanho da "moeda" que raspa
    ctx.fill()
  }

  const getCoordinates = (
    e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent,
  ) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()

    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      }
    }
    return {
      x: (e as React.MouseEvent).clientX - rect.left,
      y: (e as React.MouseEvent).clientY - rect.top,
    }
  }

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDrawing(true)
    const { x, y } = getCoordinates(e)
    scratch(x, y)
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return
    const { x, y } = getCoordinates(e)
    scratch(x, y)
  }

  const handleEnd = () => {
    setIsDrawing(false)
    checkCompletion()
  }

  const checkCompletion = () => {
    if (isScratched) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const imageData = ctx.getImageData(0, 0, width, height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) transparentPixels++
    }

    const percentage = (transparentPixels / (pixels.length / 4)) * 100

    // Se raspar mais de 60%, revela tudo
    if (percentage > 60) {
      setIsScratched(true)
      ctx.clearRect(0, 0, width, height)
      setTimeout(onComplete, 500) // Delay
    }
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl border-4 border-dashed border-[#cd7478] bg-white p-4 shadow-xl"
      style={{ width, height }}
    >
      {/* Imagem do Prêmio embaixo */}
      <div className="absolute inset-4 flex flex-col items-center justify-center text-center">
        <div className="text-3xl font-semibold text-[#BF2727]">
          Pode terminar de raspar que não vai ter spolier antes kkk
        </div>
      </div>

      {/* Canvas por cima */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        className={`absolute inset-0 cursor-pointer touch-none rounded-2xl transition-opacity duration-700 ${isScratched ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      />
    </div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function ScratchGiftsLuxoOriginal() {
  const [selectedBox, setSelectedBox] = useState<number | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [wonPrize, setWonPrize] = useState<{
    title: string
    img: string
  } | null>(null)

  // Lista de presentes mais detalhada e luxuosa
  // Recomendo usar imagens reais de prêmios. Usei os mesmos placeholders.
  const prizes = useMemo(
    () => [
      {
        title: 'Um Jantar Romântico à Luz de Velas 🍷',
        img: '/jantar_romantico.jpg',
      }, // Adicione imagens reais
      {
        title: 'Um doce para ficar felizinha',
        img: '/massagem_luxo.jpg',
      },
      {
        title: 'Vale um Beijão com Carinho e Abraço 😘',
        img: '/beijo_amor.jpg',
      },
      {
        title: 'Sessão de Cinema em Casa com Popcorn Gourmet 🍿',
        img: '/cinema_casa.jpg',
      },
      {
        title: 'Piquenique no Parque com Vinho e Frutas 🧺',
        img: '/piquenique_parque.jpg',
      },
    ],
    [],
  )

  // Lista de imagens para as caixas de presente (antes da raspadinha)
  // Recomendo usar a mesma imagem para todas, pois é a original que o usuário forneceu.
  // Salve a imagem original como '/public/caixa_presente_original.png'
  const giftBoxImages = useMemo(
    () => [
      '/assets/presente.png', // USE A IMAGEM QUE VOCÊ FORNECEU
      '/assets/presente.png',
      '/assets/presente.png',
      '/assets/presente.png',
      '/assets/presente.png',
    ],
    [],
  )

  const handleCompleteScratch = (prize: { title: string; img: string }) => {
    setWonPrize(prize)
    setShowModal(true)
    triggerConfetti()
  }

  const triggerConfetti = () => {
    const duration = 4000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#c22727', '#cd7478', '#ffffff'],
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#c22727', '#cd7478', '#ffffff'],
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    }
    frame()
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#fcfcfc] p-6 font-sans">
      {/* Cabeçalho Reestilizado */}
      <div className="relative mb-16 text-center">
        <h2 className="mb-3 text-4xl font-light leading-tight text-[#333]">
          <span className="block">
            Para Você,{' '}
            <span className="font-semibold text-[#c22727]">Lindona</span>
          </span>
        </h2>
        <p className="mx-auto max-w-lg px-4 text-sm leading-relaxed text-gray-500">
          Escolha uma destas caixas de presente especiais e, com carinho, raspe
          a área vermelha para revelar o presente que você ganhou.
        </p>
        <Gift
          className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#cd7478] opacity-10"
          size={100}
        />
      </div>

      {/* Grid de Presentes Mais Visual e Cascata (Cascading Layout) */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {prizes.map((prize, index) => {
          const isSelected = selectedBox === index

          return (
            <motion.div
              key={index}
              layout
              onClick={() => !isSelected && setSelectedBox(index)}
              className={`flex flex-col items-center justify-center transition-all ${
                isSelected
                  ? 'relative h-[320px] lg:col-span-1 lg:h-[350px]'
                  : 'h-[250px] cursor-pointer'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={!isSelected ? { scale: 1.05 } : {}}
            >
              {!isSelected ? (
                // --- VISUAL ANTES DE ESCOLHER: SUA CAIXA ORIGINAL ---
                <div className="group relative h-full w-full overflow-hidden p-4">
                  <Image
                    src={giftBoxImages[index]} // USE A IMAGEM QUE VOCÊ FORNECEU (salve como public/caixa_presente_original.png)
                    alt={`Caixa {index + 1}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center rounded-3xl bg-black/5 pb-6">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#c22727] shadow-md">
                      Escolher Caixa {index + 1}
                    </span>
                  </div>
                </div>
              ) : (
                // --- VISUAL APÓS ESCOLHER: A RASPADINHA ---
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, z: 10 }}
                  animate={{ opacity: 1, scale: 1, z: 10 }}
                  className="z-10 flex h-full w-full items-center justify-center rounded-3xl bg-white/50 p-4 backdrop-blur-sm"
                >
                  <ScratchCardLuxo
                    width={280}
                    height={280}
                    onComplete={() => handleCompleteScratch(prize)}
                    bgImage={prize.img}
                  />
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Botão de Cancelar Seleção */}
      {selectedBox !== null && !showModal && (
        <button
          onClick={() => setSelectedBox(null)}
          className="mt-16 flex items-center gap-2 rounded-full border border-gray-100 px-6 py-2 text-sm text-gray-400 transition-colors hover:border-[#c22727]/30 hover:bg-white hover:text-[#c22727]"
        >
          <XCircle size={18} />
          Voltar e escolher outra caixa
        </button>
      )}

      {/* Modal de Vitória Reestilizado */}
      <AnimatePresence>
        {showModal && wonPrize && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 p-4 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative w-full max-w-lg rounded-3xl border border-[#cd7478]/30 bg-white p-10 text-center shadow-2xl"
            >
              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedBox(null)
                }}
                className="absolute right-4 top-4 text-gray-300 hover:text-[#c22727]"
              >
                <XCircle size={28} />
              </button>

              <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[#c22727]/10 bg-[#c22727]/5">
                <Gift size={48} className="text-[#c22727]" />
              </div>

              <h3 className="mb-2 text-3xl font-semibold text-gray-800">
                Você Ganhou!
              </h3>
              <Image
                src={wonPrize.img}
                alt="teste"
                width={150}
                height={150}
                className="mx-auto my-6 rounded-3xl"
              />

              <p className="mb-12 text-2xl font-medium leading-tight text-[#c22727]">
                {wonPrize.title}
              </p>

              <button
                onClick={() => {
                  setShowModal(false)
                  setSelectedBox(null)
                }}
                className="w-full rounded-full bg-[#c22727] py-4 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-[#a61c1c]"
              >
                Resgatar Prêmio
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
