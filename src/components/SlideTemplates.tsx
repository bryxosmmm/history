type ImageItem = {
  src: string
  alt: string
  text?: string
}

type SlideTemplateProps = {
  eyebrow?: string
  title: string
  body?: string
  image?: ImageItem
  images?: ImageItem[]
}

export function SplitImageSlide({ eyebrow, title, body, image }: SlideTemplateProps) {
  return (
    <div className="grid min-h-[calc(100svh-7rem)] grid-cols-1 content-center gap-14 md:grid-cols-[0.9fr_1fr]">
      <div className="flex flex-col justify-center">
        {eyebrow && <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>}
        <h2 className="mt-6 max-w-2xl font-serif text-[clamp(3.4rem,8vw,7.8rem)] leading-[0.9]">{title}</h2>
        <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
        {body && <p className="max-w-xl text-xl leading-8 text-stone-700">{body}</p>}
      </div>

      {image && (
        <div className="image-frame min-h-[420px] p-5 sm:p-8">
          <img src={image.src} alt={image.alt} className="max-h-[66vh] max-w-full object-contain" />
        </div>
      )}
    </div>
  )
}

export function TwoColumnImageSlide({ images = [] }: SlideTemplateProps) {
  return (
    <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-center">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
        {images.slice(0, 2).map((image, index) => (
          <div className={`flex flex-col gap-6 ${index === 1 ? 'md:pt-12' : ''}`} key={image.alt}>
            <div className="image-frame h-[420px] p-4 sm:h-[500px]">
              <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
            </div>
            {image.text && <p className="max-w-xl text-xl leading-8 text-stone-700">{image.text}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ArrowTimelineSlide({ eyebrow, title, body, images = [] }: SlideTemplateProps) {
  return (
    <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-center gap-12">
      <div className="max-w-3xl">
        {eyebrow && <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>}
        <h2 className="mt-5 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92]">{title}</h2>
        {body && <p className="mt-8 max-w-2xl text-xl leading-8 text-stone-700">{body}</p>}
      </div>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
        {images.slice(0, 3).map((image) => (
          <div className="image-frame h-[280px] p-4" key={image.alt}>
            <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function FocusImageSlide({ eyebrow, title, body, image }: SlideTemplateProps) {
  return (
    <div className="grid min-h-[calc(100svh-7rem)] place-items-center text-center">
      <div className="w-full max-w-5xl">
        {eyebrow && <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>}
        <h2 className="mx-auto mt-5 max-w-4xl font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.9]">{title}</h2>
        {image && (
          <div className="image-frame mx-auto my-10 h-[48vh] max-w-3xl p-5">
            <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
          </div>
        )}
        {body && <p className="mx-auto max-w-2xl text-xl leading-8 text-stone-700">{body}</p>}
      </div>
    </div>
  )
}

export function TextImageTextSlide({ eyebrow, title, body, image }: SlideTemplateProps) {
  return (
    <div className="grid min-h-[calc(100svh-7rem)] grid-cols-1 items-center gap-10 md:grid-cols-[0.7fr_1fr_0.7fr]">
      <div>
        {eyebrow && <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{eyebrow}</p>}
        <h2 className="mt-5 font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.94]">{title}</h2>
      </div>

      {image && (
        <div className="image-frame h-[58vh] p-5">
          <img src={image.src} alt={image.alt} className="max-h-full max-w-full object-contain" />
        </div>
      )}

      {body && <p className="border-l border-stone-950/20 pl-6 text-xl leading-8 text-stone-700">{body}</p>}
    </div>
  )
}
