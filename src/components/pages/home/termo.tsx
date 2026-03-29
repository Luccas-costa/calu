'use client'

import React, { useState, useEffect, useCallback } from 'react'
import ScrollReveal from './scroll-reveal' // Mantendo o seu import original

type LetterStatus = 'correct' | 'present' | 'absent' | 'empty'

const TARGET_WORD = 'OLHOS'
const WORD_LENGTH = 5
const MAX_GUESSES = 6

const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
]

export default function Termo() {
  const [board, setBoard] = useState<string[][]>(
    Array(MAX_GUESSES).fill(Array(WORD_LENGTH).fill('')),
  )
  const [currentRow, setCurrentRow] = useState(0)
  const [currentCol, setCurrentCol] = useState(0)
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>(
    'playing',
  )
  const [rowStatuses, setRowStatuses] = useState<LetterStatus[][]>(
    Array(MAX_GUESSES).fill(Array(WORD_LENGTH).fill('empty')),
  )
  const [keyStatuses, setKeyStatuses] = useState<Record<string, LetterStatus>>(
    {},
  )
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [animateLetterIdx, setAnimateLetterIdx] = useState<number | null>(null)
  const [showWinAnimation, setShowWinAnimation] = useState(false)

  const showToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2500)
  }

  const onKeyPress = useCallback(
    (key: string) => {
      if (gameStatus !== 'playing') return

      if (key === 'BACKSPACE') {
        if (currentCol > 0) {
          const newBoard = board.map((row, rIdx) =>
            rIdx === currentRow
              ? row.map((letter, cIdx) =>
                  cIdx === currentCol - 1 ? '' : letter,
                )
              : row,
          )
          setBoard(newBoard)
          setCurrentCol((prev) => prev - 1)
        }
      } else if (key === 'ENTER') {
        if (currentCol < WORD_LENGTH) {
          showToast('Letras insuficientes')
          return
        }

        const guess = board[currentRow].join('')
        evaluateGuess(guess)
      } else {
        if (
          currentCol < WORD_LENGTH &&
          key.length === 1 &&
          /[A-ZÇ]/.test(key)
        ) {
          const newBoard = board.map((row, rIdx) =>
            rIdx === currentRow
              ? row.map((letter, cIdx) => (cIdx === currentCol ? key : letter))
              : row,
          )
          setBoard(newBoard)
          // Adiciona animação de entrada da letra
          setAnimateLetterIdx(currentCol)
          setTimeout(() => setAnimateLetterIdx(null), 200)
          setCurrentCol((prev) => prev + 1)
        }
      }
    },
    [board, currentCol, currentRow, gameStatus],
  )

  const evaluateGuess = (guess: string) => {
    const targetLetters = TARGET_WORD.split('')
    const guessLetters = guess.split('')
    const newRowStatus: LetterStatus[] = Array(WORD_LENGTH).fill('absent')
    const newKeyStatuses = { ...keyStatuses }

    // Primeira passagem: Letras na posição correta (Verde)
    guessLetters.forEach((letter, i) => {
      if (letter === targetLetters[i]) {
        newRowStatus[i] = 'correct'
        targetLetters[i] = '' // Consome a letra para não marcar amarelo duplicado
        newKeyStatuses[letter] = 'correct'
      }
    })

    // Segunda passagem: Letras presentes na palavra, mas posição errada (Amarelo)
    guessLetters.forEach((letter, i) => {
      if (newRowStatus[i] !== 'correct' && targetLetters.includes(letter)) {
        newRowStatus[i] = 'present'
        targetLetters[targetLetters.indexOf(letter)] = '' // Consome a letra
        if (newKeyStatuses[letter] !== 'correct') {
          newKeyStatuses[letter] = 'present'
        }
      } else if (newRowStatus[i] === 'absent') {
        if (
          newKeyStatuses[letter] !== 'correct' &&
          newKeyStatuses[letter] !== 'present'
        ) {
          newKeyStatuses[letter] = 'absent'
        }
      }
    })

    // Atualiza o estado
    const newStatuses = [...rowStatuses]
    newStatuses[currentRow] = newRowStatus
    setRowStatuses(newStatuses)
    setKeyStatuses(newKeyStatuses)

    if (guess === TARGET_WORD) {
      setGameStatus('won')
      setShowWinAnimation(true)
      setTimeout(() => showToast('Parabéns! Você acertou! ❤️'), 500)
    } else if (currentRow + 1 === MAX_GUESSES) {
      setGameStatus('lost')
      setTimeout(() => showToast(`A palavra era ${TARGET_WORD}`), 500)
    } else {
      setCurrentRow((prev) => prev + 1)
      setCurrentCol(0)
    }
  }

  // Captura eventos do teclado físico
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onKeyPress('ENTER')
      } else if (e.key === 'Backspace') {
        onKeyPress('BACKSPACE')
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && /[A-ZÇ]/.test(key)) {
          onKeyPress(key)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onKeyPress])

  const getCellColor = (status: LetterStatus) => {
    switch (status) {
      case 'correct':
        return 'bg-emerald-400 text-white border-emerald-400'
      case 'present':
        return 'bg-yellow-400 text-white border-yellow-400'
      case 'absent':
        return 'bg-zinc-400 text-white border-zinc-400'
      default:
        return 'bg-transparent text-gray-800 border-gray-300'
    }
  }

  const getKeyColor = (status: LetterStatus) => {
    switch (status) {
      case 'correct':
        return 'bg-emerald-400 text-white'
      case 'present':
        return 'bg-yellow-400 text-white'
      case 'absent':
        return 'bg-gray-400 text-white'
      default:
        return 'bg-gray-200 text-gray-800 hover:bg-gray-300'
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#FCFCFC] px-4 py-10 pb-[150px]">
      {/* Animação de Vitória (Confetes e Corações) */}
      {showWinAnimation && (
        <div className="pointer-events-none absolute inset-0 z-50">
          <div className="animate-confetti" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 transform text-9xl text-emerald-400 opacity-20">
            ❤️
          </div>
          <div className="text-red-sun absolute right-1/4 top-1/4 -rotate-12 text-8xl opacity-10">
            ❤️
          </div>
        </div>
      )}

      <ScrollReveal>
        <h2 className="font-display text-ink mb-4 text-center text-3xl font-light md:text-4xl">
          O que mais <span className="text-red-sun">gosto em você?</span>
        </h2>
        <p className="text-ink-light mx-auto mb-16 max-w-md text-center">
          Termo do lulu, descubra a palavra secreta (7letras)
        </p>
      </ScrollReveal>

      {/* Alerta / Toast */}
      <div className="mb-4 flex h-12 items-center justify-center">
        {toastMessage && (
          <div className="animate-pulse rounded-md bg-gray-800 px-4 py-2 font-semibold text-white">
            {toastMessage}
          </div>
        )}
      </div>

      {/* Tabuleiro (Grid) - Tamanho aumentado para PC */}
      <div className="mb-10 flex w-full max-w-[400px] flex-col gap-2 lg:max-w-[600px]">
        {board.map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-2">
            {row.map((letter, cIdx) => (
              <div
                key={cIdx}
                className={`flex h-14 w-14 items-center justify-center rounded border-2 text-2xl font-bold uppercase transition-all duration-500 lg:h-24 lg:w-24 lg:text-5xl ${getCellColor(
                  rowStatuses[rIdx][cIdx],
                )} ${animateLetterIdx === cIdx && currentRow === rIdx ? 'animate-letter-pop' : ''} ${showWinAnimation && gameStatus === 'won' && rIdx === currentRow - 1 ? 'animate-win-glow' : ''}`}
              >
                {letter}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Teclado Virtual - Tamanho aumentado para PC */}
      <div className="flex w-full max-w-[500px] flex-col gap-2 lg:max-w-[900px]">
        {KEYBOARD_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1 sm:gap-2">
            {row.map((key) => {
              const isEnter = key === 'ENTER'
              const isBackspace = key === 'BACKSPACE'
              return (
                <button
                  key={key}
                  onClick={() => onKeyPress(key)}
                  className={`flex cursor-pointer select-none items-center justify-center rounded text-xs font-bold transition-colors duration-200 sm:text-sm lg:p-6 lg:text-2xl ${getKeyColor(keyStatuses[key] || 'empty')} ${isEnter || isBackspace ? 'w-auto px-3 py-4 sm:px-4 lg:px-10' : 'w-8 max-w-[40px] flex-1 py-4 sm:w-10 lg:max-w-[80px]'} ${isEnter ? 'animate-pulse-enter' : ''} `}
                >
                  {isBackspace ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lg:h-10 lg:w-10"
                    >
                      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
                      <line x1="18" y1="9" x2="12" y2="15"></line>
                      <line x1="12" y1="9" x2="18" y2="15"></line>
                    </svg>
                  ) : (
                    key
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
