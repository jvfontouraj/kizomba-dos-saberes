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
    <main className="relative flex min-h-screen h-fit pb-24 flex-col items-center">
      <Image
        src={FundoCalendafro}
        alt=""
        className="absolute w-screen h-full object-cover"
        quality={100}
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />
      <div className="relative mt-44">
        <h1 className="relative z-10 font-londrinaSolid text-7xl uppercase leading-normal text-[#e7c102] [word-spacing:10px]">
          Calendafro
        </h1>
        <Image
          src={Maracatu}
          alt=""
          className="absolute -left-[10.5rem] top-1/2 -translate-y-1/2 z-20 w-52"
        />
        <Image
          src={Batucada}
          alt=""
          className="absolute -right-20 top-1/2 -translate-y-1/2 z-20 w-28"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-2 mt-10 text-[#efa300] font-londrinaSolid text-2xl">
        <div className="flex justify-center gap-8 [&>button]:uppercase ">
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
        <div className="flex justify-center gap-8 [&>button]:uppercase ">
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
              <div className="flex items-center gap-8">
                <h3 className="text-[#e7c102] font-londrinaSolid text-5xl uppercase">
                  {month}
                </h3>
                <Image src={Bandeiras3} className="h-full w-full" alt={''} />
              </div>
              <div className="flex flex-col gap-8 ">
                {calendafroContent[month].map((content, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    {content.title.map((titles) => (
                      <h3
                        key={titles}
                        className="text-[#e7c102] font-londrinaSolid text-2xl uppercase flex flex-col"
                      >
                        {titles}
                      </h3>
                    ))}
                    <span>Período: {content.date}</span>
                    <span>Município: {content.local}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
