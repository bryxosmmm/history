import './App.css'

const epochs = [
  {
    id: 'byzantium',
    number: '01',
    period: 'X-XV века',
    title: 'Византийский след',
    subtitle: 'Первые христианские знаки власти',
    body: 'Двуглавый орел появляется как образ преемственности, духовной защиты и связи с восточно-христианской традицией. В ранней русской культуре он еще не становится государственным гербом, но задает язык будущей символики.',
    facts: ['терракотовые печати', 'церковные ткани', 'княжеские знаки'],
  },
  {
    id: 'moscow',
    number: '02',
    period: 'XV-XVII века',
    title: 'Московское государство',
    subtitle: 'Печать как знак единой власти',
    body: 'Орел закрепляется в государственной практике и связывается с фигурой государя, территорией и идеей централизованного управления.',
    facts: ['печать Ивана III', 'всадник на щите', 'царский титул'],
  },
  {
    id: 'empire',
    number: '03',
    period: 'XVIII-XX века',
    title: 'Российская империя',
    subtitle: 'Большой герб и строгая система',
    body: 'Символ становится сложной геральдической конструкцией: короны, скипетр, держава, щиты земель и регламентированная графика.',
    facts: ['имперские регалии', 'земельные гербы', 'реформа 1857 года'],
  },
  {
    id: 'modern',
    number: '04',
    period: '1993-настоящее время',
    title: 'Российская Федерация',
    subtitle: 'Возвращение исторической формы',
    body: 'Современный герб сохраняет историческую композицию, но работает уже в цифровой среде: на документах, экранах, знаках и интерфейсах.',
    facts: ['закон о гербе', 'цифровые версии', 'государственные носители'],
  },
]

function App() {
  const firstEpoch = epochs[0]

  return (
    <main className="site-shell bg-[#f8f4eb] text-stone-950">
      <section className="snap-section archive-grid grid min-h-svh content-center gap-10 overflow-hidden px-6 py-8 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <section className="relative z-10">
          <div>
            <h1 className="max-w-[680px] font-serif text-[clamp(4rem,10vw,9.2rem)] leading-[0.88] tracking-normal">
              Орел
              <br />
              сквозь века
            </h1>

            <div className="my-8 h-px w-80 max-w-full bg-stone-950/35" />

            <p className="max-w-[430px] text-lg leading-8 text-stone-700">
              Эволюция главного символа государственности России: от
              рукописных печатей до современной визуальной системы.
            </p>
          </div>
        </section>

        <section className="relative z-0 flex min-h-[320px] items-center justify-start">
          <div className="photo-placeholder">
            <span>Плейсхолдер</span>
          </div>
        </section>
      </section>

      <section className="snap-section epoch-section min-h-svh overflow-hidden px-6 py-8 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <div className="epoch-layout grid min-h-[calc(100svh-4rem)] content-center gap-10 lg:min-h-[calc(100svh-7rem)]">
          <div className="flex flex-col justify-between gap-10">
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
              <p className="text-base leading-8 text-stone-700">{firstEpoch.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {firstEpoch.facts.map((fact) => (
                  <span
                    className="border border-stone-950/15 bg-[#fbf8f0]/70 px-3 py-2 text-xs uppercase tracking-[0.14em] text-stone-600"
                    key={fact}
                  >
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="epoch-art min-h-[320px]">
            <div className="photo-placeholder">
              <span>Плейсхолдер</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
