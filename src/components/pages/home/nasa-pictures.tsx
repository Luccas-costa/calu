import Image from 'next/image'
import React from 'react'
import nasafoto1 from '../../../../public/ceu/01.png'
import nasafoto2 from '../../../../public/ceu/02.png'
import nasafoto3 from '../../../../public/ceu/03.png'
import ScrollReveal from './scroll-reveal'

export default function NasaPictures() {
  return (
    <div className="bg-ink flex h-[750px] w-full flex-col items-center pt-[150px]">
      <ScrollReveal>
        <h2 className="font-display mb-4 text-center text-2xl tracking-wider text-primary-foreground md:text-4xl">
          Foto que a nasa tirou
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="font-body mx-auto mb-12 max-w-lg text-center text-sm text-primary-foreground/60 md:text-base">
          Essas sao as fotos que a nasa tirou do ceu nos nossos dias especiais,
          olha que lindo! ✨
        </p>
      </ScrollReveal>
      <div className="flex h-[400px] w-full">
        <div className="w-1/3 text-center">
          <div className="text-center text-2xl text-primary-foreground">
            Dia 05 fevereiro
          </div>
        </div>
        <div className="w-1/3 text-center">
          <div className="text-center text-2xl text-primary-foreground">
            Dia 21 fevereiro
          </div>
        </div>
        <div className="w-1/3 text-center">
          <div className="text-center text-2xl text-primary-foreground">
            Dia 08 março
          </div>
        </div>
      </div>
      <div className="flex h-[400px] w-full justify-around gap-4 px-12">
        <Image
          src={nasafoto1}
          alt=""
          className="h-full w-1/3 overflow-hidden rounded-lg"
        />
        <Image
          src={nasafoto2}
          alt=""
          className="h-full w-1/3 overflow-hidden rounded-lg"
        />
        <Image
          src={nasafoto3}
          alt=""
          className="h-full w-1/3 overflow-hidden rounded-lg"
        />
      </div>
    </div>
  )
}
