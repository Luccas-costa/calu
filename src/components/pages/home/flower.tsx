import ScrollReveal from './scroll-reveal'
import teste2 from '../../../../public/assets/campo-tulipas.jpg'

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
        <ScrollReveal delay={150}>
          <h2 className="font-display font-300 text-ink mb-8 text-2xl md:text-3xl">
            Uma flor para outra flor
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300} direction="scale">
          <a
            href="https://flor-six.vercel.app"
            className="rounded-lg bg-[#CA4546] px-4 py-3 text-white"
          >
            Clicar pra ver sua flor
          </a>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <p className="text-red-sun font-display mt-8 text-sm uppercase tracking-widest">
            Flores esboção mais que palavras ❤️
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default LoveLetterSection
