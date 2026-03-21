'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
} from 'lucide-react'
import Image from 'next/image'

// Playlist
const PLAYLIST = [
  {
    title: 'Andei Só',
    artist: 'Natiruts',
    src: '/music/andei-so.mp3',
    cover: '/music/capas/andei-so-capa.jpg',
  },
  {
    title: 'Better Together',
    artist: 'Jack Johnson',
    src: '/music/better-together.mp3',
    cover: '/music/capas/better-together-capa.jpg',
  },
  {
    title: 'Seja para mim',
    artist: 'Maneva',
    src: '/music/maneva.mp3',
    cover: '/music/capas/maneva-capa.jpg',
  },
]

export default function MiniPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const currentSong = PLAYLIST[currentSongIndex]

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }

    setIsPlaying(!isPlaying)
  }

  // Próxima música (com loop)
  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length)
    setProgress(0)
    setIsPlaying(true)
  }

  // Música anterior
  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? PLAYLIST.length - 1 : prev - 1))
    setProgress(0)
    setIsPlaying(true)
  }

  // Atualiza progresso
  const handleTimeUpdate = () => {
    if (!audioRef.current) return

    const currentTime = audioRef.current.currentTime
    const duration = audioRef.current.duration

    if (duration) {
      setProgress((currentTime / duration) * 100)
    }
  }

  // Clique na barra
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current) return

    const bar = e.currentTarget
    const clickPosition = e.clientX - bar.getBoundingClientRect().left
    const percentage = clickPosition / bar.offsetWidth

    audioRef.current.currentTime = percentage * audioRef.current.duration
  }

  // 🔥 TROCA DE MÚSICA + AUTOPLAY CONFIÁVEL
  useEffect(() => {
    if (!audioRef.current) return

    audioRef.current.load()

    if (isPlaying) {
      audioRef.current.play().catch(() => {})
    }
  }, [currentSongIndex, isPlaying])

  // Volume
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = isMuted ? 0 : volume
  }, [volume, isMuted])

  return (
    <div className="fixed bottom-4 left-4 z-50 flex w-72 flex-col overflow-hidden rounded-xl bg-[#CB4747]/80 text-white shadow-2xl transition-all hover:scale-[1.02]">
      {/* Audio */}
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => handleNext()}
      />

      <div className="flex items-center gap-3 p-3">
        {/* Capa */}
        <div className="relative h-12 w-12 flex-shrink-0">
          <Image
            src={currentSong.cover}
            alt={currentSong.title}
            fill
            className="rounded-md object-cover shadow-sm"
          />
        </div>

        {/* Info */}
        <div className="min-w-0 flex-1">
          <h4 className="truncate text-sm font-bold">{currentSong.title}</h4>
          <p className="truncate text-xs text-white/80">{currentSong.artist}</p>
        </div>

        {/* Controles */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="transition-colors hover:text-white/70"
          >
            <SkipBack size={18} fill="currentColor" />
          </button>

          <button
            onClick={togglePlay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#CB4747] transition-colors hover:bg-gray-100"
          >
            {isPlaying ? (
              <Pause size={16} fill="currentColor" />
            ) : (
              <Play size={16} fill="currentColor" className="ml-0.5" />
            )}
          </button>

          <button
            onClick={handleNext}
            className="transition-colors hover:text-white/70"
          >
            <SkipForward size={18} fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Volume + Progress */}
      <div className="flex flex-col gap-2 px-3 pb-3">
        <div className="group flex items-center gap-2">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="hover:text-white/70"
          >
            {isMuted || volume === 0 ? (
              <VolumeX size={14} />
            ) : (
              <Volume2 size={14} />
            )}
          </button>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="h-1 w-16 cursor-pointer appearance-none rounded-lg bg-white/30 accent-white opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>

        {/* Progress */}
        <div
          className="h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-black/20"
          onClick={handleProgressClick}
        >
          <div
            className="relative h-full rounded-full bg-white"
            style={{
              width: `${progress}%`,
              transition: 'width 0.1s linear',
            }}
          >
            <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
          </div>
        </div>
      </div>
    </div>
  )
}
