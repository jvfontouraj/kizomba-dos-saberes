'use client'
import Image from 'next/image'
import FundoCalendafro from '@/assets/fundo-calendafro.jpg'
import Bandeiras2 from '@/assets/bandeiras2.png'
import Maracatu from '@/assets/ilustracoes/sem-fundo/maracatu.png'
import Batucada from '@/assets/ilustracoes/sem-fundo/batucada.png'
import { useState } from 'react'
import { calendafroContent } from '@/content/calendafro/calendafro'
import Bandeiras3 from '@/assets/bandeiras3.png'

export default function Calendafro() {
  const [month, setMonth] = useState('janeiro')

  function handleSelectMonth(month: string) {
    setMonth(month)
  }

  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]
  const monthsFirstRow = months.slice(0, 6)
  const monthsSecondRow = months.slice(6, 12)

  return (
    <main className="relative flex min-h-screen h-fit pb-24 flex-col items-center overflow-hidden">
      <Image
        src={FundoCalendafro}
        alt="imagem de fundo"
        className="absolute w-screen h-full object-cover"
        quality={100}
      />
      <Image
        src={Bandeiras2}
        alt="ilustração de bandeirinhas"
        className="absolute scale-[2] md:scale-100 top-16 md:top-28 z-10"
      />
      <Image
        src={Bandeiras2}
        alt="ilustração de bandeirinhas"
        className="absolute scale-[2] md:scale-100 bottom-5 z-10"
      />
      <div className="relative mt-24 md:mt-44">
        <h1 className="relative z-10 font-londrinaSolid text-5xl md:text-7xl uppercase leading-normal text-[#e7c102] [word-spacing:10px]">
          Calendafro
        </h1>
        <Image
          src={Maracatu}
          alt=""
          className="absolute w-20 -left-16 top-2 md:-left-[10.5rem] md:top-1/2 md:-translate-y-1/2 z-20 md:w-52"
        />
        <Image
          src={Batucada}
          alt=""
          className="absolute w-14 -right-10 -top-0 md:-right-20 md:top-1/2 md:-translate-y-1/2 z-20 md:w-28"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-2 mt-10 text-[#efa300] font-londrinaSolid text-sm md:text-2xl">
        <div className="flex justify-center gap-3 md:gap-8 [&>button]:uppercase">
          {monthsFirstRow.map((monthName) => (
            <button
              key={monthName}
              onClick={() => handleSelectMonth(monthName)}
              className={monthName === month ? 'text-white' : 'text-[#efa300]'}
            >
              {monthName}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-3 md:gap-8 [&>button]:uppercase">
          {monthsSecondRow.map((monthName) => (
            <button
              key={monthName}
              onClick={() => handleSelectMonth(monthName)}
              className={monthName === month ? 'text-white' : 'text-[#efa300]'}
            >
              {monthName}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 text-white">
        <div className="w-screen bg-[#0073a8] relative z-10">
          <div className="w-full max-w-7xl mx-auto px-5 py-10 flex flex-col gap-10">
            <div className="flex flex-col items-start max-w-xl w-full mx-auto gap-10">
              <div className="flex items-center gap-4 md:gap-8">
                <h3 className="text-[#e7c102] font-londrinaSolid text-3xl md:text-5xl uppercase">
                  {month}
                </h3>
                <Image
                  src={Bandeiras3}
                  className="h-full w-full"
                  alt="ilustração de bandeirinhas"
                />
              </div>
              <div className="flex flex-col gap-8 ">
                {calendafroContent[month].map((content, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    {content.title.map((titles) => (
                      <h3
                        key={titles}
                        className="text-[#e7c102] font-londrinaSolid text-base md:text-2xl uppercase flex flex-col"
                      >
                        {titles}
                      </h3>
                    ))}
                    <p className="font-semibold text-sm md:text-base">
                      Período:
                      <span className="font-normal ml-1">{content.date}</span>
                    </p>
                    <p className="font-semibold text-sm md:text-base">
                      Município:{' '}
                      <span className="font-normal ml-1">{content.local}</span>
                    </p>
                  </div>
                ))}
              </div>
              <span className="text-sm">
                Obs.: As datas aqui apresentadas são previsões de acordo com as
                tradições e podem sofrer alterações. O projeto Kizomba do
                Saberes não se responsabiliza por mudanças ou imprevistos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
