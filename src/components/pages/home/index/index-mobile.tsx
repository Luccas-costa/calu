import React from 'react'
import Hero from '../hero'
import PhotoGallery from '../photo-galery'
import LoveLetterSection from '../lover-letters'
import LoveBook from '../book'
import Apelidos from '../apelidos'
import MiniPlayer from '../player-music'
import RaspadinhaPresentes from '../gifts'
import Termo from '../termo'
import Flower from '../flower'
import StartMap from '../start-map'

export default function IndexDesktop() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PhotoGallery />
      <Apelidos />
      <LoveLetterSection />
      <LoveBook />
      <MiniPlayer />
      <RaspadinhaPresentes />
      <Termo />
      <Apelidos />
      <Flower />
      <StartMap />
      <div className="flex h-[300px] items-center justify-center bg-neutral-700 text-4xl font-semibold text-white">
        em obras jaja adiciono o presente secreto
      </div>
    </main>
  )
}
