/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import Link from 'next/link'
import WoodBackground from 'public/images/wood-background.webp'
import Bandeiras1 from '@/assets/bandeiras1.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChevronDown from '@/assets/chevron-down.svg'
import Piramides from '@/assets/piramides.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@/styles/manifestacoes-splide.css'

import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogTrigger,
} from '@/app/components/ui/dialog'

interface TemplateProps {
  title: string
  text: string[]
  details: {
    locais: string
    festas: string
    sedes: string
  }
  refs: string[]
  imagesUrl: string[]
}

export function Template({ content }: { content: TemplateProps }) {
  return (
    <main className="relative flex flex-col items-center bg-[#ac9378] text-white overflow-hidden">
      <Image
        src={WoodBackground}
        alt="imagem de fundo"
        className="absolute  h-full object-cover opacity-20 brightness-50"
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

      <div className="z-10 mt-24 md:mt-32 flex w-full max-w-6xl flex-col items-center gap-10 md:gap-20 pb-40 md:pt-24">
        <Link
          href="/manifestacoes-culturais"
          className="flex items-center self-start font-bold uppercase text-neutral-200 text-xs md:text-base ml-5"
        >
          <ChevronDown className="mr-1 md:mr-5 w-3 md:w-5 rotate-90 fill-[#e7c102]" />
          Voltar para manifestações culturais
        </Link>
        <div className="relative grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-20 px-5 md:px-0 [grid-template-areas:_'title'_'images'_'text'_'details'_'refs'] md:[grid-template-areas:_'title_title'_'text_images'_'details_images'_'refs_images']">
          <Image
            src={Bandeiras1}
            alt="Bandeiras"
            className="absolute h-6 md:h-auto w-auto left-8 top-1 md:-left-20 md:top-4 z-0"
          />
          <h1 className="font-londrinaSolid ml-7 md:ml-0 text-3xl md:text-6xl uppercase leading-none text-[#e7c102] [grid-area:title]">
            {content.title}
          </h1>
          <div className="flex w-full flex-col gap-5 text-justify text-sm md:text-base [grid-area:text]">
            {content.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <Image
              src={Piramides}
              alt=""
              className="mt-5 h-6 w-fit self-center"
            />
          </div>
          <div className="flex h-full w-full [grid-area:images]">
            <Splide
              options={{
                perPage: 1,
                rewind: true,
                gap: '1rem',
              }}
              aria-labelledby="basic-example-heading"
            >
              {content.imagesUrl.map((image, index) => (
                <SplideSlide key={index}>
                  <Dialog>
                    <DialogTrigger>
                      <img src={image} alt="imagem da manifestação" />
                    </DialogTrigger>
                    <DialogContent className="h-fit w-fit flex items-center justify-center overflow-hidden">
                      <img
                        src={image}
                        alt="imagem da manifestação"
                        className="h-full w-auto max-h-[90vh] max-w-[90vw]"
                      />
                      {/* <DialogDescription>Descrição da imagem</DialogDescription> */}
                    </DialogContent>
                  </Dialog>
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="flex h-fit flex-col text-sm md:text-base gap-5 border-l-2 border-[#efa300] pl-3 [grid-area:details]">
            {content.details.locais && (
              <div>
                <h3 className="font-bold">Localizam-se em:</h3>
                <span>{content.details.locais}</span>
              </div>
            )}
            {content.details.festas && (
              <div>
                <h3 className="font-bold">Festas Principais:</h3>
                <span>{content.details.festas}</span>
              </div>
            )}
            {content.details.sedes && (
              <div>
                <h3 className="font-bold">Sedes:</h3>
                <span>{content.details.sedes}</span>
              </div>
            )}
          </div>
          {content.refs.length > 0 && (
            <div className="flex flex-col gap-2 text-xs md:text-sm [grid-area:refs]">
              <h4 className="font-bold">Referências:</h4>
              {content.refs.map((ref, index) => (
                <p key={index}>{ref}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
