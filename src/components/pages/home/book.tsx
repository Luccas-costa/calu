'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ArrowLeft, Smartphone, RotateCcw } from 'lucide-react'
import Image from 'next/image'

// --- TIPOS E DADOS ---
interface Topic {
  id: string
  title: string
  desc: string
  content: string
  imageUrl?: string // Link da foto (opcional)
  rightText?: string // Texto de continuação para a página da direita (opcional)
}

const topicsData: Topic[] = [
  {
    id: '01',
    title: 'Quando precisar de um elogio',
    desc: 'Como tudo começou...',
    content:
      'Se em algum momento você esquecer o quão incrível é, volta aqui e lê isso com calma. Você é, sem exagero nenhum, uma das pessoas mais bonitas que eu já vi mas não só por fora. O seu jeito, o seu sorriso, a forma como você fala, tudo em você tem algo que prende e encanta. Tem dias que talvez você não se veja assim, eu sei… mas eu vejo. Vejo em cada detalhe, até nos que você acha imperfeitos. E são justamente esses detalhes que fazem você ser única. Seus olhos têm um brilho que eu não sei explicar, mas sei que poderia passar horas olhando sem enjoar. Seu sorriso tem um poder absurdo de melhorar qualquer momento, inclusive os meus piores dias. Então, quando a insegurança bater, lembra disso: você é linda, de um jeito raro, verdadeiro e impossível de ignorar. E, pra mim, sempre vai ser bobona.',
    // Exemplo COM foto:
    imageUrl: '/calu/ela.jpeg',
  },
  {
    id: '02',
    title: 'Quando estiver com saudades',
    desc: 'Aventuras pelo mundo.',
    content:
      'Quero que você leia isso como se fosse um abraço meu chegando até você, porque mesmo eu estando aqui, uma parte de mim nunca saiu do seu lado. Eu sei que não é fácil ficar longe, mas pensa que não falta tanto assim… logo eu tô de volta aí com você, como sempre, e cada vez que a gente se reencontra, parece que tudo faz ainda mais sentido. E enquanto esse momento não chega, me liga, sério, eu amo ouvir sua voz, amo conversar com você, e isso sempre dá um jeitinho de diminuir a saudade."',
    // Exemplo SEM foto, funcionando como continuação do texto:
    imageUrl: '/calu/saudades.jpeg',
  },
  {
    id: '03',
    title: 'Quando não conseguir mimir',
    desc: 'Nossas piadas internas.',
    content:
      'Se você não conseguir dormir, lê isso com calma e imagina que eu tô aí do seu lado, deitadinho com você, te abraçando e fazendo carinho até você relaxar. Mesmo de longe, eu tô com você. Agora uma historinha… Era uma vez um menino chamado Luquinha que adorava olhar pras estrelas. Toda noite ele ficava em silêncio observando o céu, imaginando histórias e fazendo pedidos. Um dia, ele percebeu uma estrela diferente, mais brilhante, que sempre chamava sua atenção, e isso fazia ele sorrir sem perceber. Com o tempo, ele começou a sentir que não estava sozinho, como se aquela estrela estivesse ali por ele. E aí ele começou a contar seus pensamentos pra ela, baixinho, como se fosse um segredo só dos dois. Falava sobre o dia dele, sobre o que sentia e até sobre alguém especial que fazia o coração dele ficar mais leve. ',
    rightText:
      'E mesmo sem resposta, ele sentia como se estivesse sendo ouvido. Até que, numa noite tranquila, ele fechou os olhos com um sorriso calmo e adormeceu, sentindo uma paz diferente. Igual você pode fazer agora, sabendo que eu tô com você, te cuidando, até você dormir.',
  },
  {
    id: '04',
    title: 'Quando ficar preocupada',
    desc: 'O que ainda vamos viver.',
    content:
      'Se você estiver preocupada, para um pouquinho e lê isso com calma, como se eu estivesse falando baixinho com você. Eu sei que às vezes a cabeça não para e os pensamentos ficam voltando toda hora, deixando tudo mais pesado do que realmente é. Mas você não precisa carregar tudo sozinha, tá? Você é mais forte do que imagina e já passou por coisas que provam isso. Respira fundo devagar e tenta acalmar o coração As coisas vão se ajeitando aos poucos, no tempo certo, mesmo quando parece que nada está dando certo. Nem tudo precisa ser resolvido agora, e tá tudo bem ir com calma, um passo de cada vez. Eu tô aqui com você em todos esses momentos, até nos mais difíceis. Se quiser, me chama, me conta o que tá passando na sua cabeça, eu vou te ouvir e ficar do seu lado. Você não precisa enfrentar nada sozinha, eu sempre vou estar aqui pra te apoiar e te lembrar que tudo vai ficar bem, mesmo que demore um pouquinho.',
    imageUrl: '/calu/luccaschapolin.jpeg',
  },
  {
    id: '05',
    title: 'Precisando de motivação',
    desc: 'O que ainda vamos viver.',
    content:
      'Tem dias que tudo parece mais difícil, né? Como se a energia sumisse e até as coisas simples pesassem mais do que deveriam. Mas não esquece: você não chegou até aqui por acaso. Cada passo seu teve esforço, teve coragem, teve você insistindo mesmo quando não era fácil. E isso diz muito sobre quem você é. Você não precisa provar nada pra ninguém, só continuar no seu ritmo Não se cobra tanto, de verdade. Você já tá fazendo muito mais do que imagina. Às vezes, continuar já é uma vitória enorme. E mesmo nos dias mais lentos, você ainda tá indo pra frente. Eu admiro isso em você. E se faltar motivação, lembra que eu tô aqui pra te dar um empurrãozinho, pra te lembrar do quanto você é capaz e do quanto ainda tem pra conquistar. Você não tá sozinha, eu tô com você em cada passo. A e ai ta uma foto pra lembrar q vc se fomrou e pra te deixar bravona kakakakakka',
    imageUrl: '/calu/zuada.jpeg',
  },
  {
    id: '06',
    title: 'Opniões de filmes e series',
    desc: 'O que ainda vamos viver.',
    content:
      'Sabe eu ate ia fazer essa pagina, mas nois ja tem uma lista e vamos assistir juntos, entao acho que nao tem necessidade de escrever nada aqui ne kkkkkk mas fica a foto pra te lembrar que a gente tem mt coisa boa pra assistir ainda e mt pipoca pra comer juntos',
    imageUrl: '/calu/colo.jpeg',
  },
  {
    id: '07',
    title: 'Vontade de me ver',
    desc: 'O que ainda vamos viver.',
    content:
      'Deu vontade de me ver do nada? Porque eu sei bem como é isso… comigo acontece direto também. Tem horas que tudo que eu queria era estar aí com você, nem que fosse só pra ficar perto, sem fazer nada, só aproveitando o momento. A distância atrapalha um pouco, mas não muda o quanto eu gosto de estar com você. E pensa pelo lado bom… daqui a pouco a gente se vê de novo, e vai ser ainda melhor. Enquanto isso, pode ir olhando pra página do lado',
    imageUrl: '/calu/saudades.jpeg',
  },
  {
    id: '08',
    title: 'Quando estiver dodoi',
    desc: 'O que ainda vamos viver.',
    content:
      'Ei… se você tá lendo isso é porque não tá se sentindo muito bem, né? Queria muito poder estar aí agora, cuidando de você de perto, fazendo carinho e não deixando você levantar pra nada. Mas mesmo não estando aí, eu quero que você sinta como se eu estivesse. Vai com calma, descansa, não tenta ser forte o tempo todo. Seu corpo só tá pedindo um tempinho, e você merece esse cuidado Se hidrata direitinho, tenta relaxar e não esquece DE COMER e que tem alguém aqui que se importa muito com você e queria poder cuidar de cada detalhe. Se pudesse, eu já tava aí te enchendo de beijinhos até você melhorar. E mesmo de longe, eu tô com você, viu? Se precisar, me chama, me conta como você tá. Eu vou ficar aqui torcendo pra você melhorar logo e mandando todo carinho do mundo pra você ficar bem de novo.',
    imageUrl: '/calu/teste.jpeg',
  },
  {
    id: '09',
    title: 'Quando tiver um dia ruim',
    desc: 'O que ainda vamos viver.',
    content:
      'Tem dias que simplesmente não dão certo, né? Parece que tudo acontece ao mesmo tempo e nada sai como a gente queria. Se hoje foi assim, tenta não se culpar tanto. Nem todo dia precisa ser bom pra você continuar sendo incrível. Às vezes, só aguentar já é mais do que suficiente. Você pode descansar, respirar e deixar esse dia ir embora sem levar tudo pro coração Amanhã é uma nova chance, com um pouco mais de calma e leveza. E mesmo hoje tendo sido difícil, isso não define você e nem tudo que ainda pode acontecer. Se quiser, me chama e desabafa, ou só fica ali comigo em silêncio. Eu tô aqui pra você, nos dias bons e principalmente nos ruins. E independente de como foi o seu dia, você continua sendo alguém muito especial pra mim.',
    rightText: '',
  },
  {
    id: '10',
    title: 'Quando tivermos uma discusão',
    desc: 'O que ainda vamos viver.',
    content:
      'Se a gente discutiu e você veio parar aqui, respira um pouquinho antes de tudo. Eu sei que nesses momentos a gente pode falar coisas no impulso ou se magoar sem querer, mas nada disso muda o que eu sinto por você. A gente não é perfeito, e é normal ter desencontros às vezes. O que importa de verdade é que, mesmo assim, eu continuo escolhendo você Nenhuma discussão é maior do que a gente. Eu não quero ficar longe, não quero guardar mágoa e muito menos te perder por causa de um momento ruim. Quando as coisas acalmarem, a gente conversa, se entende e melhora juntos. Porque no fim, é sempre você. E vai continuar sendo.',
    imageUrl: '/calu/beijinho.jpeg',
  },
  {
    id: '11',
    title: 'Quando estiver te deixando doidona',
    desc: 'O que ainda vamos viver.',
    content:
      'Se você chegou até aqui, é porque provavelmente eu tô te irritando de propósito… e sim, pode ter certeza que é 100% intencional kkkkk. Eu sei exatamente como te deixar assim e mesmo assim não consigo parar, é mais forte que eu. Mas convenhamos… você também não facilita né, qualquer coisinha já fica doidona Mas relaxa, respira fundo e aceita: você me ama até eu te enchendo o saco kkkkk. Pode ficar bravinha, pode reclamar, pode falar que eu tô chatokkkkk não tem jeito. E eu vou continuar te perturbando sim, porque faz parte do pacote. Eu acho muito mais legal quando se ta doidonha kkkkkkk chatona.',
    imageUrl: '/calu/linda.jpeg',
  },
  {
    id: '12',
    title: 'Estiver se sentindo sozinha',
    desc: 'O que ainda vamos viver.',
    content:
      'Se em algum momento você se sentir sozinha, para um pouquinho e lembra de uma coisa importante: você nunca tá de verdade sozinha. Mesmo quando o silêncio aparece ou quando parece que ninguém tá por perto, tem alguém aqui pensando em você, se importando com você e querendo te ver bem. A distância pode até existir às vezes, mas ela não muda isso Eu tô com você de um jeito que vai além de estar perto fisicamente. Tô nas suas lembranças, nas nossas conversas, nas coisas que fazem você sorrir do nada. E sempre que esse sentimento aparecer, me chama, me conta, ou só fica ali comigo. Porque eu faço questão de ser companhia pra você, mesmo nos momentos mais silenciosos.',
    imageUrl: '/calu/jenas.jpeg',
  },
  {
    id: '13',
    title: 'Quando sentir medo',
    desc: 'O que ainda vamos viver.',
    content:
      'Nem preciso escrever nada aqui, so lembra eu luto jiu jitsu e olha a foto ai do lado kkkkkkk',
    imageUrl: '/calu/medo.jpeg',
  },
  {
    id: '14',
    title: 'Quando quiser conselho sobre amor',
    desc: 'O que ainda vamos viver.',
    content:
      'Amor não é uma coisa que simplesmente acontece e pronto, ele também é escolha. Escolha de ficar, de cuidar, de entender e de continuar mesmo quando nem tudo tá perfeito. Nem sempre vai ser fácil, vão existir dúvidas, inseguranças e momentos confusos, mas isso faz parte de qualquer coisa que é de verdade. O importante é não desistir tão fácil do que faz bem pro seu coração No fim, amar alguém é decidir todos os dias continuar ali, mesmo com defeitos, mesmo com desafios. E quando é verdadeiro, sempre vale a pena tentar mais uma vez, conversar, entender e seguir em frente juntos. Então, independente de qualquer coisa, nunca desiste do amor… porque ele, quando é de verdade, sempre encontra um jeito de dar certo.',
    imageUrl: '/calu/carta.jpeg',
  },
  {
    id: '15',
    title: 'Seu aniversario',
    desc: 'O que ainda vamos viver.',
    content:
      'Acho que ia ler antes ne bobona kkkkkkkk no dia eu ponho o texto aqui.',
    imageUrl: '/calu/drake.jpeg',
  },
]

// --- COMPONENTES VISUAIS DAS PÁGINAS ---

const Paper = ({
  children,
  isLeft,
}: {
  children: React.ReactNode
  isLeft?: boolean
}) => (
  <div
    className={`relative flex h-full w-full flex-col bg-[#F9F6F0] p-6 text-[#4A2F1D] shadow-inner sm:p-10 ${
      isLeft ? 'rounded-l-md' : 'rounded-r-md'
    }`}
  >
    <div
      className={`pointer-events-none absolute bottom-0 top-0 w-8 ${
        isLeft ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'
      } from-black/10 to-transparent`}
    />
    {children}
  </div>
)

const CoverFront = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-r-xl bg-[#4A2F1D] p-3 shadow-[10px_10px_20px_rgba(0,0,0,0.5)]"
  >
    <div className="absolute bottom-0 left-0 top-0 z-10 w-6 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
    <div className="relative h-full w-full rounded-lg border-[3px] border-double border-[#C5A059] p-2">
      <div className="relative flex h-full w-full flex-col items-center justify-center rounded border border-[#C5A059] px-6 pt-8 transition-transform group-hover:scale-[1.01]">
        <div className="mb-6 text-3xl drop-shadow-md sm:text-4xl">🌷</div>
        <h1 className="text-center font-serif text-3xl leading-snug tracking-wide text-[#C5A059] sm:text-4xl">
          MINHA <br /> DOIDONA
        </h1>
        <div className="my-6 h-[1px] w-16 bg-[#C5A059] opacity-60" />
        <p className="text-[10px] font-light tracking-[0.3em] text-[#C5A059] sm:text-xs">
          PARA SEMPRE
        </p>
      </div>
    </div>
  </div>
)

const CoverBack = () => (
  <Paper isLeft>
    <div className="flex h-full flex-col items-center justify-center pb-2">
      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-md border-4 border-white bg-white shadow-sm">
        <Image
          src="/calu/capa.jpeg"
          alt="Foto de capa do livro"
          className="h-full w-full object-cover"
          fill
        />
      </div>
      <p className="mt-4 text-center font-serif text-sm text-[#4A2F1D]">
        Nois dois sempre
      </p>
    </div>
  </Paper>
)

const IntroFront = ({ onNext }: { onNext: () => void }) => (
  <Paper>
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h2 className="mb-6 font-serif text-3xl text-[#4A2F1D] sm:text-4xl">
        Leia-me quando precisar de mim
      </h2>
      <p className="mb-10 max-w-sm text-base leading-relaxed text-gray-700 sm:text-lg">
        Leia cada topico desse livro, conforme for sentindo necessidade, escrevi
        tudo do coração. Estou aqui por você
      </p>
      <button
        onClick={onNext}
        className="flex items-center gap-2 font-semibold text-[#C5A059] transition-colors hover:text-[#8a6635]"
      >
        Abrir Capítulos <ChevronRight size={20} />
      </button>
    </div>
  </Paper>
)

const TOCLeft = ({ onSelect }: { onSelect: (t: Topic) => void }) => (
  <Paper isLeft>
    <div className="px-2 pt-8">
      <h2 className="mb-8 inline-block border-b-2 border-[#C5A059]/30 pb-4 font-serif text-3xl text-[#4A2F1D]">
        Capítulos
      </h2>
      <div className="flex flex-col gap-4">
        {topicsData.slice(0, 10).map((t) => (
          <div
            key={t.id}
            onClick={() => onSelect(t)}
            className="group flex cursor-pointer items-start gap-3"
          >
            <span className="font-serif text-xl text-[#C5A059] opacity-50 transition-opacity group-hover:opacity-100">
              {t.id}.
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#4A2F1D] transition-colors group-hover:text-[#C5A059]">
                {t.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Paper>
)

const TOCRight = ({ onSelect }: { onSelect: (t: Topic) => void }) => (
  <Paper>
    <div className="px-2 pt-[1.5rem]">
      <div className="flex flex-col gap-4">
        {topicsData.slice(10, 20).map((t) => (
          <div
            key={t.id}
            onClick={() => onSelect(t)}
            className="group flex cursor-pointer items-start gap-3"
          >
            <span className="font-serif text-xl text-[#C5A059] opacity-50 transition-opacity group-hover:opacity-100">
              {t.id}.
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#4A2F1D] transition-colors group-hover:text-[#C5A059]">
                {t.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Paper>
)

const TopicLeft = ({ topic, onBack }: { topic: Topic; onBack: () => void }) => (
  <Paper isLeft>
    <div className="flex h-full flex-col">
      <button
        onClick={onBack}
        className="mb-6 flex w-fit items-center gap-2 text-sm text-[#C5A059] transition-colors hover:text-[#8a6635]"
      >
        <ArrowLeft size={16} /> Voltar aos Capítulos
      </button>
      <h2 className="mb-4 font-serif text-2xl text-[#4A2F1D] sm:text-3xl">
        {topic.title}
      </h2>
      <p className="flex-1 whitespace-pre-wrap text-sm leading-relaxed text-gray-700 sm:text-base">
        {topic.content}
      </p>
      <div className="mt-auto text-center font-serif text-sm text-[#C5A059]">
        ~ {topic.id} ~
      </div>
    </div>
  </Paper>
)

const BaseRight = ({ topic }: { topic: Topic }) => (
  <div
    className="absolute inset-0 h-full w-full"
    style={{ left: '50%', width: '50%' }}
  >
    <Paper>
      {topic.imageUrl ? (
        // Layout COM foto
        <div className="flex h-full flex-col items-center justify-center pb-2">
          <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden rounded-md border-4 border-white bg-white shadow-sm">
            <Image
              src={topic.imageUrl || ''}
              alt={topic.title || ''}
              className="h-full w-full object-cover"
              fill
            />
          </div>
          <p className="mt-4 text-center font-serif text-sm text-[#4A2F1D]">
            {topic.title}
          </p>
        </div>
      ) : (
        // Layout SEM foto: Apenas a continuação do texto (rightText) e o número da página
        <div className="flex h-full flex-col">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 sm:text-base">
            {topic.rightText}
          </p>
          <div className="mt-auto text-center font-serif text-sm text-[#C5A059]">
            ~ {topic.id} ~
          </div>
        </div>
      )}
    </Paper>
  </div>
)

const Sheet = ({
  index,
  step,
  front,
  back,
}: {
  index: number
  step: number
  front: React.ReactNode
  back: React.ReactNode
}) => {
  const isFlipped = step > index
  const zIndex = isFlipped ? 10 + index : 50 - index

  return (
    <motion.div
      className="absolute left-1/2 top-0 h-full w-1/2"
      style={{
        transformOrigin: 'left center',
        transformStyle: 'preserve-3d',
        zIndex,
      }}
      animate={{ rotateY: isFlipped ? -180 : 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {front}
      </div>
      <div
        className="absolute inset-0 h-full w-full"
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        {back}
      </div>
    </motion.div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function LoveBook() {
  const [step, setStep] = useState(0)
  const [activeTopic, setActiveTopic] = useState<Topic>(topicsData[0])
  const [isFlipping, setIsFlipping] = useState(false)

  const handleTopicSelect = (topic: Topic) => {
    setActiveTopic(topic)
    setIsFlipping(true)

    setTimeout(() => {
      setStep(3)
    }, 300)

    setTimeout(() => {
      setIsFlipping(false)
    }, 900)
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F4F1EB] p-4 font-sans sm:p-8">
      {/* TELA DE AVISO: Só aparece em telas pequenas e em pé (Portrait) */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#4A2F1D] px-6 text-center text-[#C5A059] md:hidden portrait:flex landscape:hidden">
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#C5A059]/30 bg-[#C5A059]/10">
          <Smartphone size={40} className="absolute animate-pulse" />
          <RotateCcw
            size={20}
            className="animate-spin-slow absolute -right-2 -top-2"
          />
        </div>
        <h2 className="mb-2 font-serif text-2xl">Vire o celular</h2>
        <p className="max-w-xs text-sm opacity-80">
          Para a melhor experiência, vire seu celular de lado (modo paisagem).
        </p>
      </div>

      <div
        // ÚNICA MUDANÇA NA SUA ESTRUTURA: Tirei o aspect-[1/1.2] e deixei fixo o aspect-[1.6/1].
        // Também aumentei o max-w para 1000px, assim ele aproveita bem o espaço e não fica anão.
        className="relative aspect-[1.6/1] w-[95vw] max-w-[1000px] sm:w-full"
        style={{ perspective: '2500px' }}
      >
        <motion.div
          animate={{ x: step === 0 ? '-25%' : '0%' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <BaseRight topic={activeTopic} />

          <Sheet
            index={2}
            step={step}
            front={<TOCRight onSelect={handleTopicSelect} />}
            back={<TopicLeft topic={activeTopic} onBack={() => setStep(2)} />}
          />

          <Sheet
            index={1}
            step={step}
            front={<IntroFront onNext={() => setStep(2)} />}
            back={<TOCLeft onSelect={handleTopicSelect} />}
          />

          <Sheet
            index={0}
            step={step}
            front={<CoverFront onClick={() => setStep(1)} />}
            back={<CoverBack />}
          />

          {isFlipping && (
            <div
              className="pointer-events-none absolute inset-0"
              style={{ transformStyle: 'preserve-3d', zIndex: 60 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`dummy-${i}`}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}
                  className="absolute left-1/2 h-full w-1/2 border-l border-black/5 bg-[#F9F6F0] shadow-[2px_0_10px_rgba(0,0,0,0.1)]"
                  style={{ transformOrigin: 'left center' }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {step > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={() => setStep(0)}
            className="z-50 mt-10 font-light tracking-wide text-[#C5A059] underline decoration-1 underline-offset-4 transition-colors hover:text-[#e0b769]"
          >
            Fechar livro
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
