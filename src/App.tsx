import { motion } from 'framer-motion'
import './App.css'
import epoch1Image from './assets/epoch_1_slide_1.jpg'
import epoch2Image from './assets/epoch_1_slide_2.jpg'
import epoch3Image from './assets/epoch_1_slide_3.jpg'
import epoch2Slide1Image from './assets/epoch_2_slide_1.jpg'
import epoch2Slide2Image from './assets/epoch_2_slide_2.jpg'
import epoch2Slide3Image from './assets/epoch_2_slide_3.jpg'
import epoch3Slide1Image from './assets/epoch_3_slide_1.jpg'
import epoch3Slide2Image from './assets/epoch_3_slide_2.jpg'
import epoch4Slide1Image from './assets/epoch_4_slide_1.jpg'
import epoch4Slide2Image from './assets/epoch_4_slide_2.jpg'

const firstEpoch = {
  number: 'I',
  period: 'XV – XVI века',
  title: 'Зарождение символа',
  subtitle: 'Византийское наследие',
  body: 'Появление двуглавого орла на Руси не было случайностью. Впервые он возникает на государственной печати в Судебнике Ивана III в 1497 году. Взяв византийского орла, молодое государство заявляло о своих имперских амбициях. Позже, при Иване Грозном, с официальным принятием царского титула, герб окончательно закрепился: всадник занял свое место на груди двуглавого орла.',
}

const secondEpoch = {
  number: 'II',
  period: 'XVII – XIX века',
  title: 'Имперский размах',
  subtitle: 'Тайный язык символов',
  body: 'С веками герб усложнялся, обрастая новыми деталями, каждая из которых имела глубокий смысл. В 1654 году при Алексее Михайловиче у орла появились скипетр и держава — знаки самодержавия, суверенитета и централизации власти. В 1667 году над головами орла появились три короны: Казанского, Астраханского и Сибирского царств.',
  body2: 'При Петре I, провозгласившем Россию империей, короны стали императорскими. Начиная с XVIII века, двуглавый орел широко применяется во всех слоях общества: на монетах, медалях, орденах, оружии, посуде, документах и фасадах зданий.',
}

const imperialSlides = [
  {
    eyebrow: 'Герб XVII века',
    title: 'Символ получает регалии',
    image: epoch2Slide1Image,
    imageLabel: 'изображение имперского герба',
    body: 'В 1654 году у орла появились скипетр и держава — знаки самодержавия, суверенитета и централизации власти. В 1667 году над головами орла закрепились три короны.',
  },
  {
    eyebrow: 'Контекст эпохи',
    title: 'Герб выходит за пределы печати',
    image: epoch2Slide2Image,
    imageLabel: 'предмет эпохи / фасад / монета',
    body: 'Начиная с XVIII века, орел появляется на монетах, медалях, оружии, посуде, документах и фасадах зданий. Он становится визуальным знаком присутствия государства.',
  },
  {
    eyebrow: 'Орденская культура',
    title: 'Орден Святого Андрея Первозванного',
    image: epoch2Slide3Image,
    imageLabel: 'орден святого андрея',
    body: 'Высший орден Российской империи использовал двуглавого орла как часть торжественного языка власти. Символ работал уже не только как герб, но и как знак чести, статуса и службы государству.',
  },
]

const thirdEpoch = {
  number: 'III',
  period: '1917 – 1991 годы',
  title: 'Разрыв с прошлым',
  subtitle: 'Старый герб исчезает из государственного языка',
  body: 'Эпоха великих потрясений 1917 года радикально изменила облик страны и её символы. После свержения монархии Временное правительство попыталось «демократизировать» герб: с орла были сняты короны, и он стал похож на самую раннюю версию времен Ивана III.',
  body2: 'После Октябрьского переворота старый герб был полностью упразднен. Двуглавый орел стал восприниматься как символ самодержавия и угнетения, а на десятилетия его заменили серп, молот, колосья и земной шар.',
}

const fourthEpoch = {
  number: 'IV',
  period: '1993 год – наши дни',
  title: 'Возрождение и современность',
  subtitle: 'Историческая форма в новой государственной системе',
  body: 'Исторический двуглавый орел вернулся в 1993 году, став символом новой Российской Федерации. Современный герб — это золотой орел на красном фоне, сохраняющий преемственность поколений.',
  body2: 'Три короны сегодня — не «три ветви власти», а дань многовековой истории. Всадник на груди орла по закону не называется Святым Георгием Победоносцем и изображается без нимба: это общий символ защиты Отечества, борьбы добра со злом и света с тьмой.',
}

const slideMotion = {
  initial: { opacity: 0, y: 36, filter: 'blur(8px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: false, amount: 0.38 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
} as const

function App() {
  return (
    <main className="site-shell text-stone-950">
      <section id="intro" className="snap-section archive-grid flex min-h-svh items-center justify-center overflow-hidden px-6 py-10 text-center sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div {...slideMotion} className="relative z-10 flex flex-col items-center">
          <h1 className="max-w-[980px] font-serif text-[clamp(5.2rem,14vw,13rem)] leading-[0.86] tracking-normal">
            Орел
            <br />
            сквозь века
          </h1>

          <div className="my-10 h-px w-96 max-w-full bg-stone-950/35" />

          <p className="max-w-[660px] text-xl leading-9 text-stone-700 sm:text-2xl">
            Эволюция главного символа государственности России: от рукописных
            печатей до современной визуальной системы.
          </p>
        </motion.div>
      </section>

      <section id="epoch-1" className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 md:grid-cols-[1fr_0.95fr] lg:min-h-[calc(100svh-7rem)] lg:gap-16"
        >
          <div className="relative z-10 flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Эпоха {firstEpoch.number} / {firstEpoch.period}
              </p>
              <h2 className="mt-6 max-w-[680px] font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[0.9]">
                {firstEpoch.title}
              </h2>
              <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
              <p className="max-w-[520px] text-xl leading-8 text-stone-700">
                {firstEpoch.subtitle}
              </p>
            </div>

            <div className="max-w-xl border-l border-stone-950/20 pl-6">
              <p className="text-lg leading-8 text-stone-700 sm:text-xl">
                {firstEpoch.body}
              </p>
            </div>
          </div>

          <div className="epoch-art relative z-10 min-h-[320px]">
            <div className="image-frame w-full max-w-[560px] p-5 sm:p-8">
              <img
                src={epoch1Image}
                alt="Зарождение символа"
                className="max-h-[66vh] w-full object-contain rounded-[10px]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section id="epoch-1-forms" className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-10 py-4 md:grid-cols-[0.7fr_1fr] lg:min-h-[calc(100svh-7rem)] lg:gap-14"
        >
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Первые формы
            </p>
            <h2 className="mt-4 font-serif text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.94]">
              Как выглядел ранний орел
            </h2>
            <div className="my-7 h-px w-64 max-w-full bg-stone-950/30" />
            <p className="max-w-md text-lg leading-8 text-stone-700">
              Ранние изображения лучше смотреть как музейные фрагменты: они небольшие,
              неровные, но именно в этих деталях видна смена языка власти.
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center gap-5 sm:-translate-y-8">
              <div className="image-frame inline-flex p-5 sm:p-6">
                <img
                  src={epoch2Image}
                  alt="Ранние оттиски печатей"
                  className="w-[min(70vw,360px)] object-contain"
                />
              </div>
              <p className="max-w-sm border-t border-stone-950/20 pt-4 text-base leading-7 text-stone-700">
                Орел с опущенными крыльями выглядит скорее охранительным знаком,
                чем воинственным символом.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 sm:translate-y-8">
              <div className="image-frame inline-flex p-5 sm:p-6">
                <img
                  src={epoch3Image}
                  alt="Рукописная графика"
                  className="w-[min(66vw,330px)] object-contain"
                />
              </div>
              <p className="max-w-sm border-t border-stone-950/20 pt-4 text-base leading-7 text-stone-700">
                Оперение, короны и силуэт постепенно подстраивались под московскую
                печать и идею единой власти.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="epoch-2" className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 lg:min-h-[calc(100svh-7rem)]"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Эпоха {secondEpoch.number}
              </p>
              <p className="mt-5 font-serif text-[clamp(4.5rem,12vw,12rem)] leading-none text-stone-950">
                XVII–XIX
              </p>
            </div>

            <div>
              <h2 className="max-w-5xl font-serif text-[clamp(3.6rem,8vw,8rem)] leading-[0.9]">
                {secondEpoch.title}
              </h2>
              <p className="mt-7 max-w-2xl text-2xl leading-9 text-stone-700">
                {secondEpoch.subtitle}
              </p>
            </div>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-10 border-t border-stone-950/20 pt-9 md:grid-cols-2">
            <p className="text-lg leading-8 text-stone-700 sm:text-xl">
              {secondEpoch.body}
            </p>
            <p className="text-lg leading-8 text-stone-700 sm:text-xl">
              {secondEpoch.body2}
            </p>
          </div>
        </motion.div>
      </section>

      {imperialSlides.map((slide, index) => (
        <section
          className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20"
          key={slide.title}
        >
          <motion.div
            {...slideMotion}
            className={`grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 lg:min-h-[calc(100svh-7rem)] lg:gap-16 ${
              index === 1
                ? 'md:grid-cols-[1fr_0.82fr]'
                : 'md:grid-cols-[0.82fr_1fr]'
            }`}
          >
            <div className={index === 1 ? 'md:order-2' : ''}>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                {slide.eyebrow}
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-[clamp(2.8rem,6vw,6rem)] leading-[0.92]">
                {slide.title}
              </h2>
              <div className="my-7 h-px w-72 max-w-full bg-stone-950/30" />
              <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
                {slide.body}
              </p>
            </div>

            <div className={index === 1 ? 'md:order-1' : ''}>
              <div className="image-frame mx-auto inline-flex w-fit max-w-full p-2 sm:p-3">
                <img
                  src={slide.image}
                  alt={slide.imageLabel}
                  className={
                    index === 0
                      ? 'max-h-[54vh] max-w-[min(72vw,430px)] object-contain'
                      : index === 1
                        ? 'max-h-[58vh] max-w-[min(74vw,520px)] object-contain'
                        : 'max-h-[56vh] max-w-[min(70vw,390px)] object-contain'
                  }
                />
              </div>
            </div>
          </motion.div>
        </section>
      ))}

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 lg:min-h-[calc(100svh-7rem)]"
        >
          <div className="max-w-6xl">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Эпоха {thirdEpoch.number} / {thirdEpoch.period}
            </p>
            <h2 className="mt-6 font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.86]">
              {thirdEpoch.title}
            </h2>
            <p className="mt-8 max-w-3xl text-2xl leading-9 text-stone-700">
              {thirdEpoch.subtitle}
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] md:items-start">
            <p className="text-lg leading-8 text-stone-700 sm:text-xl">
              {thirdEpoch.body}
            </p>
            <p className="hidden font-serif text-7xl leading-none text-stone-950/30 md:block">
              /
            </p>
            <p className="text-lg leading-8 text-stone-700 sm:text-xl">
              {thirdEpoch.body2}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 md:grid-cols-[0.82fr_1.18fr] lg:min-h-[calc(100svh-7rem)] lg:gap-16"
        >
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Февраль 1917
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.6rem)] leading-[0.9]">
              Короны исчезают
            </h2>
            <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
            <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              Временное правительство не отказалось от орла сразу, но сняло с него
              главные монархические признаки. Символ стал строже — почти как в
              ранней московской печати.
            </p>
          </div>

          <div className="grid content-center gap-8">
            <p className="text-center font-serif text-[clamp(6rem,14vw,12rem)] leading-none text-stone-950">
              1917
            </p>

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="image-frame inline-flex max-w-[72vw] p-3">
                  <img
                    src={epoch3Slide1Image}
                    alt="Герб Временного правительства"
                    className="w-[min(72vw,330px)] object-contain"
                  />
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                    исчезли
                  </p>
                  <p className="mt-4 max-w-md font-serif text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.05] text-stone-900">
                    короны, скипетр, держава
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 md:grid-cols-[0.95fr_1.05fr] lg:min-h-[calc(100svh-7rem)] lg:gap-16"
        >
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Новый визуальный язык
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.6rem)] leading-[0.92]">
              Знаки новой эпохи
            </h2>
            <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
            <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              Серп, молот, колосья и земной шар обозначали уже не династическую
              преемственность, а труд, революцию, союз республик и новый образ
              будущего.
            </p>
          </div>

          <div className="grid content-center gap-8">
            <div className="image-frame mx-auto inline-flex w-fit max-w-full p-3 sm:p-4">
              <img
                src={epoch3Slide2Image}
                alt="Советская эмблема"
                className="max-h-[50vh] max-w-[min(72vw,430px)] object-contain"
              />
            </div>

          </div>
        </motion.div>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 lg:min-h-[calc(100svh-7rem)]"
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
                Эпоха {fourthEpoch.number} / {fourthEpoch.period}
              </p>
              <h2 className="mt-6 max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9]">
                {fourthEpoch.title}
              </h2>
            </div>

            <p className="font-serif text-[clamp(6rem,15vw,14rem)] leading-none text-stone-950">
              1993
            </p>
          </div>

          <div className="grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <p className="border-l border-stone-950/20 pl-6 text-2xl leading-9 text-stone-700">
              {fourthEpoch.subtitle}
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <p className="text-lg leading-8 text-stone-700 sm:text-xl">
                {fourthEpoch.body}
              </p>
              <p className="text-lg leading-8 text-stone-700 sm:text-xl">
                {fourthEpoch.body2}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 md:grid-cols-[0.9fr_1.1fr] lg:min-h-[calc(100svh-7rem)] lg:gap-16"
        >
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Современный герб
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.6rem)] leading-[0.92]">
              Преемственность без монархии
            </h2>
            <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
            <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              Золотой орел на красном поле возвращает историческую композицию, но
              работает уже как символ современной федерации. Его смысл держится не
              на восстановлении империи, а на памяти формы.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="image-frame inline-flex w-fit max-w-full p-3 sm:p-4">
              <img
                src={epoch4Slide1Image}
                alt="Современный герб России"
                className="max-h-[56vh] max-w-[min(72vw,380px)] object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-10 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <motion.div
          {...slideMotion}
          className="grid min-h-[calc(100svh-5rem)] grid-cols-1 content-center gap-12 md:grid-cols-[1.05fr_0.95fr] lg:min-h-[calc(100svh-7rem)] lg:gap-16"
        >
          <div className="flex items-center justify-center md:order-1">
            <div className="image-frame inline-flex w-fit max-w-full p-3 sm:p-4">
              <img
                src={epoch4Slide2Image}
                alt="Монеты 90-х с современным гербом"
                className="max-h-[52vh] max-w-[min(76vw,560px)] object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center md:order-2">
            <p className="text-xs uppercase tracking-[0.24em] text-stone-500">
              Герб в повседневности
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-[clamp(3rem,7vw,6.6rem)] leading-[0.92]">
              Символ снова становится знаком государства
            </h2>
            <div className="my-8 h-px w-72 max-w-full bg-stone-950/30" />
            <p className="max-w-xl text-lg leading-8 text-stone-700 sm:text-xl">
              В 1990-е орел быстро возвращается на привычные носители: документы,
              официальные знаки и деньги. Монеты особенно хорошо показывают этот
              переход — исторический образ снова входит в ежедневный оборот.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default App
