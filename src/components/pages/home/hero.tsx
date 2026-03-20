import Image from 'next/image'
import heroImage from '../../../../public/assets/background-calu.jpeg'
import redTulip from '../../../../public/assets/red-tulip.png'
import ScrollReveal from './scroll-reveal'

export default function Hero() {
  return (
    <section className="bg-paper relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
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

        <ScrollReveal delay={600}>
          <a
            href="#nosso-livro"
            className="bg-red-sun font-display inline-block px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-lg active:scale-[0.97]"
          >
            Explorar
          </a>
        </ScrollReveal>
      </div>

      {/* Sol decorativo */}
      <div className="bg-red-sun absolute right-12 top-12 h-16 w-16 rounded-full opacity-80 md:h-24 md:w-24" />
    </section>
  )
}
