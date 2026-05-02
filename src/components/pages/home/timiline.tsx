'use client'

import ScrollReveal from './scroll-reveal'
import Image from 'next/image'
import fonts from '@/styles/globals/fonts.module.css'
import codigodebarras from '../../../../public/assets/codigodebarras.png'

// Dados da linha do tempo
const timelineEvents = [
  {
    id: 1,
    date: '21 de Janeiro, 2026',
    title: 'Onde tudo começou',
    description:
      'A primeira vez que você saiu comgio. Quem diria que aquele dia mudaria tudo?',
    image: '/calu/primeirodia.jpeg',
  },
  {
    id: 2,
    date: '30 de janeiro, 2026',
    title: 'O Jeca',
    description:
      '6hrs de conversa e a certeza de que eu queria te ver de novo o mais rápido possível (mesmo se me enrolando bobona).',
    image: '/calu/segundodia.jpeg',
  },
  {
    id: 3,
    date: '22 de Fevereiro, 2026',
    title: 'A primeira foto',
    description:
      'Dando um salto, não lembro qual o numero desse role mas foi a primeira vez q você tirou uma foto nossa, olhei ela por baixo 500 vezes.',
    image: '/calu/terceirodia.jpeg',
  },
  {
    id: 4,
    date: '1 de Março, 2026',
    title: 'O dia da vergonha',
    description:
      'Foi o dia da minha vergonha meu deus do ceu, mas tambem foi o dia que eu entendi que éra você.',
    image: '/calu/quartodia.jpeg',
  },
  {
    id: 5,
    date: '8 de Março, 2026',
    title: 'Muita coisa nesse dia',
    description:
      'Alem de ter sido o dia da nossa despedida pra mim ir pra Itajuba, foi o dia mais especial pra mim pq se me deu um PRESENTE GENTE, fiquei tao feliz. Vi essa foto mais vezes q da pra contar e foi um dos nossos dias mais fofos',
    image: '/calu/quintodia.jpeg',
  },
  {
    id: 6,
    date: '20 de Março, 2026',
    title: 'A minha volta',
    description:
      'O primeiro dia que nos se vimos dps que voltei de itajuba, sem duvida o dia mais fofo ainda mais pela ideia genial do guarda chuva kkkkkk, o melhor dia até agora pra mim "obs: vou te ver hoje to mt ansioso :)".',
    image: '/calu/sextodia.jpeg',
  },
  {
    id: 8,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/drake.jpeg',
  },
  {
    id: 9,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/21-03.jpeg',
  },
  {
    id: 10,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/03-04.jpeg',
  },
  {
    id: 11,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/06-04.jpeg',
  },
  {
    id: 12,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/18-04.jpeg',
  },
  {
    id: 13,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/19-04.jpeg',
  },
  {
    id: 14,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/20-04.jpeg',
  },
  {
    id: 15,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/24-04.jpeg',
  },
  {
    id: 16,
    date: 'Futuro',
    title: 'Para todos os proximos dias',
    description:
      'Falto eu falar de inumeros outros momentos nossos, tentei colocar os que foram mais importantes, mas e agora quem sabe do futuro, quais seram nossos proximos momentos e historias, não sei, mas vou amalos muito por ser com você lindona',
    image: '/calu/novas/26-04.jpeg',
  },
]

export default function Timeline() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative">
          {/* A Linha Central */}
          <div className="bg-red-sun/20 absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 md:block" />

          <div className="flex flex-col gap-12 md:gap-24">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center gap-8`}
                >
                  {/* Ponto/Coração na linha central */}

                  {/* Metade da Tela: A Imagem
                  <div className="w-full md:w-1/2">
                    <ScrollReveal direction={isEven ? 'right' : 'left'}>
                      <div
                        className={`flex h-[700px] w-[500px] items-center justify-center bg-white px-[10px] shadow-lg ${isEven ? 'md:ml-auto md:mr-12' : 'md:ml-12 md:mr-auto'}`}
                      >
                        <div
                          className={`relative aspect-[1/1] w-full overflow-hidden rounded-xl`}
                        >
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div> */}
                  <ScrollReveal direction={isEven ? 'right' : 'left'}>
                    <div className="mb-[100px] flex h-[400px] w-[350px] flex-col rounded-xl bg-white shadow-lg screen440:h-[450px] screen440:w-[400px] screen500:h-[480px] screen500:w-[430px] screen550:h-[550px] screen550:w-[500px]">
                      <div className="mb-[-10px] pt-[2px] text-center text-sm font-light text-zinc-950">
                        2026
                      </div>
                      <div className="m-[10px] flex-1 overflow-hidden rounded-lg bg-black">
                        <Image
                          src={event.image}
                          alt="my"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="mb-2 flex h-[50px] items-center justify-between rounded-b-md bg-white px-[20px]">
                        <div
                          style={{ fontWeight: 300 }}
                          className={`text-xl text-zinc-950 screen440:text-2xl ${fonts.monserrat}`}
                        >
                          Cá e Lu
                        </div>
                        <div className="w-[140px] screen440:w-[160px]">
                          <Image
                            src={codigodebarras}
                            alt="codigodebarras"
                            className="opacity-[0.8]"
                          />
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                  {/* Metade da Tela: O Texto */}
                  <div
                    className={`${isEven ? '' : 'md:translate-x-[50px]'} w-full text-center md:w-1/2 md:text-left`}
                  >
                    <ScrollReveal
                      direction={isEven ? 'left' : 'right'}
                      delay={150}
                    >
                      <div
                        className={`flex flex-col ${isEven ? 'md:ml-12 md:mr-auto md:items-end md:text-right' : 'md:ml-auto md:mr-12 md:items-start md:text-left'}`}
                      >
                        <span className="text-red-sun font-display mb-2 text-sm uppercase tracking-widest">
                          {event.date}
                        </span>
                        <h3 className="font-display text-ink mb-4 text-2xl font-light">
                          {event.title}
                        </h3>
                        <p className="text-ink-light max-w-sm text-base leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
