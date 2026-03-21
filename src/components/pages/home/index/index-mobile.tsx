import React from 'react'
import Apelidos from '../apelidos'
import LoveBook from '../book'
import Hero from '../hero'
import LoveLetterSection from '../lover-letters'
import PhotoGallery from '../photo-galery'
import MiniPlayer from '../player-music'

export default function IndexMobile() {
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
