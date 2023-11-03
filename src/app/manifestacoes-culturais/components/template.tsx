'use client'
import Image from 'next/image'
import Link from 'next/link'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras1 from '@/assets/bandeiras1.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChevronDown from '@/assets/chevron-down.svg'
import Piramides from '@/assets/piramides.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

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
    <main className="relative flex flex-col items-center bg-[#ac9378] text-white">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute  h-full object-cover opacity-20 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />

      <div className="z-10 mt-32 flex w-full max-w-6xl flex-col items-center gap-20 pb-40 pt-24">
        <Link
          href="/manifestacoes-culturais"
          className="flex items-center self-start font-bold uppercase text-neutral-200"
        >
          <ChevronDown className=" mr-5 w-5 rotate-90 fill-[#e7c102]" />
          Voltar para manifestações culturais
        </Link>
        <div className="relative grid w-full max-w-6xl grid-cols-2 gap-x-10 gap-y-20 [grid-template-areas:_'title_title'_'text_images'_'details_images'_'refs_images']">
          <Image
            src={Bandeiras1}
            alt="Bandeiras"
            className="absolute -left-20 top-4 z-0"
          />
          <h1 className="font-londrinaSolid text-6xl uppercase leading-none text-[#e7c102] [grid-area:title]">
            {content.title}
          </h1>
          <div className="flex w-full flex-col gap-5 text-justify [grid-area:text]">
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
                height: '10rem',
                rewind: true,
                gap: '1rem',
              }}
              aria-labelledby="basic-example-heading"
            >
              {content.imagesUrl.map((image, index) => (
                <SplideSlide key={index}>
                  <img src={image} alt="imagem da manifestação" />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="flex h-fit flex-col gap-5 border-l-2 border-[#efa300] pl-3 [grid-area:details]">
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
            <div className="flex flex-col gap-2 text-sm [grid-area:refs]">
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
