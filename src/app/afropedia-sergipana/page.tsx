'use client'
import Image from 'next/image'
import FundoAfropedia from '@/assets/fundo-afropedia.jpg'
import Bandeiras2 from '@/assets/bandeiras2.png'
import Reisado from '@/assets/ilustracoes/sem-fundo/reisado.png'
import { afropediaSergipana } from '@/content/afropedia/afropediaSergipana'
import Link from 'next/link'

export default function AfropediaSergipana() {
  return (
    <main className="relative flex min-h-screen h-fit pb-20 md:pb-40 flex-col items-center gap-10 md:gap-14 overflow-hidden">
      <Image
        src={FundoAfropedia}
        alt=""
        className="absolute w-screen h-full object-cover -z-10"
      />
      <Image
        src={Bandeiras2}
        alt=""
        className="absolute scale-[2] md:scale-100 top-16 md:top-28 z-10"
      />
      <Image
        src={Bandeiras2}
        alt=""
        className="absolute scale-[2] md:scale-100 bottom-5 z-10"
      />
      <div className="relative mt-24 md:mt-44">
        <h1 className="font-londrinaSolid text-4xl md:text-6xl text-center max-w-[200px] md:max-w-none uppercase leading-none md:leading-normal text-[#e7c102] [word-spacing:10px]">
          AFROPÉDIA SERGIPANA
        </h1>
        <Image
          src={Reisado}
          alt="ilustração de um grupo de reisado"
          className="absolute -left-16 top-11 md:-left-48 md:top-1/2 -translate-y-1/2 z-20 w-24 md:w-48"
        />
      </div>

      <div className="flex flex-col gap-8 max-w-4xl mx-auto text-neutral-100 text-sm px-5 md:px-0">
        <div className="flex flex-col gap-4">
          {afropediaSergipana.texto.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-londrinaSolid text-xl uppercase leading-normal text-[#e7c102]">
            {afropediaSergipana.objetivos.titulo}
          </h3>
          <div className="flex flex-col gap-2 border-l-2 border-l-[#e7c102] pl-3">
            {afropediaSergipana.objetivos.conteudo.map((item, index) => (
              <p key={index}>• {item}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {afropediaSergipana.info.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>

      <Link
        href={afropediaSergipana.formulário.url}
        target="_blank"
        className="bg-[#e7c102] font-londrinaSolid text-xl font-bold uppercase text-[#0073a8ff] py-2 px-3 rounded-lg"
      >
        {afropediaSergipana.formulário.titulo}
      </Link>
    </main>
  )
}
