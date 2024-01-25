'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select'
import { cidades, manifestacoes } from '@/content/map/select'
import { citysCard } from '@/content/map/citysCard'
import { manifestationsCard } from '@/content/map/manifestationsCard'

import Bandeiras1 from '@/assets/bandeiras1.png'
import Cheganca from '@/assets/cheganca.png'
import LambeSujo from '@/assets/lambe-sujo.png'
import Bacamarteiro from '@/assets/bacamarteiro.png'
import RealezaNago from '@/assets/realeza-nago.png'
import PaiJua from '@/assets/pai-jua.png'
import FundoMapa from '@/assets/fundo-mapa.png'
import { map } from '@/assets/mapa/mapas'
import Mapa from '@/assets/mapa/Geral.png'

export function MapSection() {
  const [city, setCity] = useState('Aracaju')
  const [showCity, setShowCity] = useState<string[]>(['Aracaju'])
  const [manifestation, setManifestation] = useState('')
  const [selector, setSelector] = useState('município')

  function handleSelectCity(city: string) {
    setCity(city)
    setShowCity([city])
    setSelector('município')
  }

  function handleSelectManifestation(manifestation: string) {
    setManifestation(manifestation)

    manifestationsCard.map(
      (item) => item.nome === manifestation && setShowCity(item.cidades),
    )
    setSelector('manifestação')
  }
  return (
    <section className="relative flex h-fit md:min-h-[calc(100vh-5.5rem)] w-screen flex-col items-center justify-center gap-5 overflow-hidden bg-[#2185BA] pt-10 pb-40 md:py-0">
      <Image
        src={FundoMapa}
        alt={'fundo'}
        className="absolute h-full md:h-screen w-screen top-0 opacity-30"
      />
      <div className="relative flex flex-col items-center gap-3">
        <h2 className="z-10 font-londrinaSolid text-4xl max-w-xs md:max-w-none text-center md:text-7xl uppercase text-[#e7c102]">
          MAPA DA CULTURA AFRO-SERGIPANA
        </h2>
        <div className="flex flex-col justify-center md:flex-row gap-3 text-[#2185BA]">
          <Select onValueChange={handleSelectCity}>
            <SelectTrigger className="w-60 md:w-80 text-xs md:text-sm h-fit md:h-auto">
              <SelectValue placeholder="Pesquise por município" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="h-full max-h-80 overflow-x-scroll text-[#2185BA]">
                {cidades.map((cidade) => (
                  <SelectItem
                    value={cidade}
                    key={cidade}
                    onClick={() => handleSelectCity(cidade)}
                    className="text-xs md:text-sm"
                  >
                    {cidade}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={handleSelectManifestation}>
            <SelectTrigger className="w-60 md:w-80 text-xs md:text-sm h-fit md:h-auto">
              <SelectValue placeholder="Pesquise por manifestação cultural" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="h-full max-h-80 overflow-x-scroll text-[#2185BA]">
                {manifestacoes.map((manifestacao) => (
                  <SelectItem
                    value={manifestacao}
                    key={manifestacao}
                    className="text-xs md:text-sm"
                  >
                    {manifestacao}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Image
          src={Bandeiras1}
          alt=""
          className="absolute left-3 -top-1 scale-[.65] md:scale-100 md:-left-14 md:top-5 w-10"
        />
        <Image
          src={Cheganca}
          alt=""
          className="absolute right-4 md:-right-40 md:-top-20 w-14 md:w-40"
        />
      </div>
      <div className="relative">
        <Image src={Mapa} alt="" className="relative z-10 w-[500px]" />
        <div className="absolute top-0 left-0 z-20 w-[500px]">
          {map.map((mapa) =>
            showCity.map(
              (item) =>
                item === mapa.name && (
                  <Image
                    src={mapa.image}
                    alt="município"
                    key={mapa.name}
                    className="absolute w-full h-auto"
                  />
                ),
            ),
          )}
        </div>
        <Image
          src={Bacamarteiro}
          alt=""
          className="absolute -right-10 top-0 z-20 w-72"
        />
        <Image
          src={RealezaNago}
          alt=""
          className="absolute -left-10 top-28 w-48"
        />
        <Image
          src={LambeSujo}
          alt=""
          className="absolute -bottom-16 -left-20 z-20 w-44"
        />
        <Image
          src={PaiJua}
          alt=""
          className="absolute -bottom-20 right-36 z-20 w-36"
        />
        <div className="absolute top-[61%] left-[400px] ">
          <div className="relative flex w-auto h-fit max-h-52 flex-col gap-3 border border-[#e7c102] bg-[#2185BA] px-3 py-5">
            <div className="flex items-start gap-2">
              <Image src={Bandeiras1} alt="" className="w-5" />
              <h3 className="font-londrinaSolid text-2xl uppercase text-[#e7c102]">
                {selector === 'município' ? city : manifestation}
              </h3>
            </div>
            <ul className="ml-4 w-80 text-sm text-white overflow-y-scroll overflow-x-hidden relative">
              {selector === 'município'
                ? citysCard.map(
                    (item) =>
                      city === item.nome &&
                      item.manifestacoes.map((manifestacao) => (
                        <li key={manifestacao}>• {manifestacao}</li>
                      )),
                  )
                : manifestationsCard.map(
                    (item) =>
                      manifestation === item.nome &&
                      item.cidades.map((cidade) => (
                        <li key={cidade}>• {cidade}</li>
                      )),
                  )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
