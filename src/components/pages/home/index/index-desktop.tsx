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
import Image from 'next/image'
import redTulip from '../../../../../public/assets/red-tulip.png'

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
      <footer className="bg-ink px-6 py-16 text-center">
        <Image
          src={redTulip}
          alt=""
          className="mx-auto mb-4 h-auto w-8 opacity-50"
        />
        <p className="font-display text-sm tracking-wider text-primary-foreground/60">
          Feito com amor, pra você minha princesa
        </p>
      </footer>
    </main>
  )
}
