import Image from 'next/image'
import ScrollReveal from './scroll-reveal'
import redTulip from '../../../../public/assets/red-tulip.png'
import teste2 from '../../../../public/assets/teste2.png'

const LoveLetterSection = () => {
  return (
    <section className="bg-paper-warm relative overflow-hidden px-6 py-24">
      {/* Fundo com efeito Parallax: 
        Usamos uma div com bg-fixed em vez do next/image.
        O teste2.src pega o caminho gerado pelo Next.js.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-fixed bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${teste2.src})` }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <ScrollReveal direction="scale">
          <Image
            src={redTulip}
            alt="Tulipa Vermelha"
            className="mx-auto mb-8 h-auto w-10 opacity-60"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="font-display font-300 text-ink mb-8 text-2xl md:text-3xl">
            Uma mensagem pra você
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="scale">
          <blockquote
            className="text-ink-light text-lg font-light italic leading-relaxed md:text-xl"
            style={{ textWrap: 'pretty' }}
          >
            {"'"}Eu não sei o que fiz pra merecer você, mas sei que faço de tudo
            pra te ver feliz. Você é o motivo do meu sorriso, a razão de eu
            acreditar que o amor de verdade existe. Obrigado por ser minha
            pessoa.{"'"}
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="text-red-sun font-display mt-8 text-sm uppercase tracking-widest">
            Com todo meu amor ❤️
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default LoveLetterSection
