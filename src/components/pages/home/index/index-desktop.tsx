import React from 'react'
import Hero from '../hero'
import PhotoGallery from '../photo-galery'
import LoveLetterSection from '../lover-letters'
import LoveBook from '../book'
import Apelidos from '../apelidos'
import MiniPlayer from '../player-music'

export default function IndexDesktop() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PhotoGallery />
      <Apelidos />
      <LoveLetterSection />
      <LoveBook />
      <MiniPlayer />
    </main>
  )
}
