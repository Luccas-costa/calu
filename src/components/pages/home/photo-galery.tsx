import ScrollReveal from './scroll-reveal'

const placeholderPhotos = [
  { id: 1, caption: 'Nosso primeiro passeio' },
  { id: 2, caption: 'Aquele pôr do sol' },
  { id: 3, caption: 'Risadas infinitas' },
  { id: 4, caption: 'Juntos, sempre' },
  { id: 5, caption: 'Momentos mágicos' },
  { id: 6, caption: 'Nosso mundinho' },
]

const directions: Array<'left' | 'up' | 'right'> = [
  'left',
  'up',
  'right',
  'left',
  'up',
  'right',
]

const PhotoGallery = () => {
  return (
    <section className="bg-paper-warm px-6 pb-[200px] pt-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <h2 className="font-display font-300 text-ink mb-4 text-center text-3xl md:text-4xl">
            Nossos <span className="text-red-sun">Momentos</span>
          </h2>
          <p className="text-ink-light mx-auto mb-16 max-w-md text-center">
            Cada foto guarda um pedacinho do nosso amor
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {placeholderPhotos.map((photo, i) => (
            <ScrollReveal
              key={photo.id}
              delay={i * 100}
              direction={directions[i % directions.length]}
            >
              <div className="group relative aspect-[4/5] cursor-pointer overflow-hidden bg-muted transition-shadow duration-300 hover:shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                  <div className="p-4 text-center">
                    <svg
                      className="mx-auto mb-3 h-10 w-10 text-muted-foreground opacity-40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs text-muted-foreground">
                      Adicione sua foto
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-display text-sm text-primary-foreground">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotoGallery
