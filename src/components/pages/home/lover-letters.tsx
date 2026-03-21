import Image from 'next/image'
import ScrollReveal from './scroll-reveal'
import redTulip from '../../../../public/assets/red-tulip.png'
import teste2 from '../../../../public/assets/teste2.png'

const LoveLetterSection = () => {
  return (
    <section className="bg-paper-warm relative overflow-hidden px-6 py-24">
      <Image
        src={teste2}
        alt=""
        layout="fill" // Ocupa todo o espaço do elemento pai
        objectFit="cover" // Ajusta a imagem para cobrir a área mantendo a proporção
        className="pointer-events-none opacity-10" // Opacidade baixa e ignora cliques
      />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <ScrollReveal direction="scale">
          <Image
            src={redTulip}
            alt=""
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
