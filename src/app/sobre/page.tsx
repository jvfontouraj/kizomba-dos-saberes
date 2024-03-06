/* eslint-disable react/no-unescaped-entities */
'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ContactForm } from '@/app/components/ContactForm'
import BandeirasHero from '@/assets/bandeirashero.png'
import FundoSobre from '@/assets/fundo-sobre.png'
import Logo from '@/assets/logo-sobre.png'
import Piramides from '@/assets/piramides.png'
import MenuBar from '@/assets/menubar.svg'
import Parafuso from '@/assets/parafuso.png'
import Guerreiro from '@/assets/ilustracoes/sem-fundo/guerreiro.png'
import Reisado from '@/assets/ilustracoes/sem-fundo/reisado.png'
import SambaDeAboio from '@/assets/ilustracoes/sem-fundo/samba-de-aboio.png'
import Bandeiras1 from '@/assets/bandeiras1.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import BandeirasRealizacoes from '@/assets/bandeiras-realizacoes.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@/styles/sobre-splide.css'
import { content } from '@/content/sobre/sobre'

export default function Sobre() {
  const [blueHeight, setBlueHeight] = useState(0)

  useEffect(() => {
    setBlueHeight(document.getElementById('blue-section')?.offsetHeight || 0)
  }, [])

  return (
    <main>
      <div
        id="blue-section"
        className="relative h-fit flex flex-col items-center gap-16 md:gap-0 overflow-hidden"
      >
        <Image
          src={FundoSobre}
          alt={'imagem de fundo'}
          className="absolute w-screen top-0 -z-10"
          style={{ height: blueHeight }}
        />
        <Image
          src={BandeirasHero}
          alt=""
          className="absolute scale-[3] md:scale-100 top-16 md:top-10 z-10"
        />

        <div className="relative h-auto gap-5 md:gap-0 z-10 max-w-7xl w-full px-5 md:px-20 flex flex-col md:flex-row pb-20 pt-24 md:pt-48 2xl:pt-60">
          <div className="md:w-1/2 mt-10">
            <Image
              src={Logo}
              alt="Logo do Kizomba dos Saberes"
              className="w-1/2 md:w-2/3 aspect-square mx-auto"
            />
          </div>
          <div className="md:w-1/2 text-neutral-50 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <Image
                  src={Piramides}
                  alt="ilustração de piramides"
                  className="h-min w-28 mb-2"
                />
                <h1 className="font-londrinaSolid text-4xl 2xl:text-6xl uppercase leading-none text-[#e7c102]">
                  Quem Somos
                </h1>
              </div>
              <article className="flex flex-col gap-3 text-sm 2xl:text-base">
                <p>
                  O projeto{' '}
                  <span className="font-semibold">Kizomba dos Saberes</span> é
                  desenvolvido pelo Grupo de Estudos e Pesquisa de História da
                  África e Diáspora Africana{' '}
                  <span className="font-semibold">ANANSE.GEPHADA</span> , ligado
                  ao departamento de História da Universidade Federal de
                  Sergipe.
                </p>
                <p>
                  O projeto foi ﬁnanciado pela Fapitec, através do edital
                  n.09/2021, para o desenvolvimento de tecnologias digitais para
                  o ensino, em parceria com a Secretaria de Educação do estado
                  de Sergipe.
                </p>
                <p>
                  Ao longo de dois anos, realizamos atividades de ensino,
                  pesquisa e extensão para a elaboração do conteúdo do site.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-10 mb-20">
          <div className="flex justify-center md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-10 w-screen">
            <Image
              src={BandeirasRealizacoes}
              alt="bandeiras2"
              className="w-full h-min hidden md:block"
            />
            <h2 className="font-londrinaSolid text-4xl 2xl:text-6xl uppercase leading-none text-[#e7c102]">
              Nossas Realizações
            </h2>
            <Image
              src={BandeirasRealizacoes}
              alt="bandeiras2"
              className="w-full h-min hidden md:block"
            />
          </div>
          <div className="bg-[#9E816D] py-10 flex items-center justify-center">
            <Splide
              options={{
                perPage: 1,
                rewind: true,
                gap: '1rem',
              }}
              aria-labelledby="basic-example-heading"
            >
              {content.map((content, index) => (
                <SplideSlide key={index}>
                  <h3 className="font-londrinaSolid text-2xl md:text-3xl 2xl:text-5xl uppercase leading-none text-[#e7c102] text-center">
                    {content.title}
                  </h3>
                  <p className="text-white text-sm md:text-base">
                    {content.text}
                  </p>
                  {content.mediaType === 'image' && (
                    <img
                      src={content.media[0].src}
                      alt={content.media[0].alt}
                      className="w-[300px] h-auto"
                    />
                  )}
                  {content.mediaType === 'video' && (
                    <div className="px-5 md:px-0 w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${content.media[0].src}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        className="w-full h-[200px] md:w-[500px] md:h-[300px]"
                      />
                    </div>
                  )}
                  {content.mediaType === 'gallery' && (
                    <div className="grid grid-cols-2 gap-5">
                      {content.media.map((media, index) => (
                        <img key={index} src={media.src} alt={media.alt} />
                      ))}
                    </div>
                  )}
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        <div className="relative h-fit mt-20 pb-5 md:pb-40 z-20 max-w-7xl w-full px-0 md:px-20 flex bg-[#0073a8ff] md:bg-transparent">
          <div className="relative w-full h-fit flex flex-col md:flex-row gap-3 md:gap-0 justify-between bg-[#28a346] text-neutral-50 px-10 md:px-20 py-10">
            <Image
              src={Guerreiro}
              alt="ilustração guerreiro"
              className="absolute w-72 bottom-20 md:bottom-auto md:w-[35rem] h-auto -right-16 md:right-0 md:top-1/2 md:translate-x-1/2 "
            />
            <Image
              src={Reisado}
              alt="ilustração reisado"
              className="absolute w-40 bottom-1/2 translate-y-16 md:translate-y-0 right-0 md:right-auto md:w-80 h-auto md:bottom-0 md:left-1/2 md:-translate-x-1/2"
            />
            <Image
              src={SambaDeAboio}
              alt="ilustração samba de aboio"
              className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 -translate-y-2/3 w-60 md:w-80 h-auto"
            />
            <Image
              src={Bandeiras1}
              alt="bandeiras1"
              className="absolute top-11 left-10 md:top-0 md:left-0 md:-translate-x-1/2 h-10 md:h-auto w-auto"
            />
            <Image
              src={Bandeiras2}
              alt="bandeiras2"
              className="absolute bottom-0 left-0 scale-[2.5] md:scale-105 translate-y-2 h-auto"
            />
            <div className="md:w-1/2 flex flex-col gap-3 text-sm md:text-base">
              <h2 className="font-londrinaSolid text-3xl md:text-4xl uppercase leading-none text-[#e7c102] mb-4 md:mb-2 ml-8 md:ml-0">
                Equipe
              </h2>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Coordenadora
                </h3>
                <span>Prof. Dra. Mariana Bracks Fonseca</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  VICE-COORDENADOR
                </h3>
                <span>Prof. Ms. Carlos Franco Liberato</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Pesquisadoras (Pós Doutorado)
                </h3>
                <span>Profa. Dra. Díjna Andrade Torres</span>
                <span>Profa. Dra. Yérsia Souza de Assis </span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Pesquisadores (Mestrado)
                </h3>
                <span>Edwyn Gomes</span>
                <span>Daniela Macedo Lima</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Pesquisadores (Graduação/Iniciação Científica)
                </h3>
                <span>Allef Wanderson Rocha Silva</span>
                <span>Beatriz Agnes Costa Bosco</span>
                <span>Kardja Vieira Bittencourt</span>
                <span>João Pedro Santos Vieira</span>
                <span>Maria Isabel de Barros Santos</span>
                <span>Mirosmar Bezerra</span>
                <span>Maiara Quaranta Lobão Linhares</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Pesquisadores (Colaboração Voluntária)
                </h3>
                <span>Prof. Hiago Feitosa da Silva</span>
                <span>
                  Profa.Ms. Maria da Conceição Bezerra dos Santos Sobrinha
                </span>
                <span>Profa. Ms. Mariana Galvão Nascimento</span>
                <span>Profa. Ms. Luciana Oliveira</span>
                <span>Laura Giovana Menezes Nascimento</span>
                <span>Dacia Rita Ferreira Bispo</span>
                <span>Vanessa Andrade</span>
                <span>Vanessa Anunciação</span>
                <span>Nathally Daianne dos Santos Silva</span>
                <span>Nicolle Oliveira Barbosa</span>
                <span>João Aysllan Dionizio Santos</span>
                <span>Thayemille Nathaly Santos</span>
                <span>Lucas Gabriel Gama</span>
                <span>Maria Eduarda Loeser</span>
                <span>Alessandra Santos da Graça</span>
                <span>Andréia Teixeira dos Santos</span>
                <span>Adalcy Costa dos Santos</span>
                <span>Eliane Dantas</span>
                <span>Jonatha Vasconcelos Santos</span>
                <span>Morgana Catherine Leite Santos</span>
                <span>Wirna Maria</span>
                <span>Messalas Santos</span>
                <span>João Muzzart</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Projeto Gráfico Site
                </h3>
                <span>Folha Verde Design</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Desenvolvimento Site
                </h3>
                <span>João Vitor Fontoura Jardim</span>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-3 text-sm md:text-base">
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Fotógrafos
                </h3>
                <span className="text-sm font-semibold mb-2">
                  Agradecemos a generosidade dos fotógrafos que colaboraram
                  gratuitamente
                </span>
                <span>César de Oliveira</span>
                <span>Díjna Torres </span>
                <span>Edwyn Gomes</span>
                <span>Heitor Xavier </span>
                <span>Igor Matias </span>
                <span>Lúcio Telles </span>
                <span>Marco Vieira</span>
                <span>Moema Costa</span>
                <span>Priscila Viana </span>
                <span>Pritty Reis </span>
                <span>Yérsia Assis</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold uppercase">
                  Identidade Visual e Artes Visuais
                </h3>
                <div className="flex flex-col">
                  <span>Edwyn Gomes</span>
                  <p>
                    "Edwyn Gomes é um jovem artista negro sergipano, pesquisador
                    do Grupo de Estudos em História da África e Diáspora
                    Africana (ANANSE.GEPHADA), com enfoque no campo da história
                    da escravidão e pós-abolição. Mestre em História pelo
                    Programa de Pós-Graduação da Universidade Federal de Sergipe
                    (PROHIS/UFS), tem desenvolvido pesquisas notáveis sobre sua
                    própria família, remontando quase 200 anos de histórias e
                    trajetórias negras em Sergipe. Sua produção artística pode
                    ser vista como reflexo das pesquisas que vem desenvolvendo.
                    Edwyn tem focado no protagonismo negro e buscado inspiração
                    na estética afro-sergipana, com o objetivo de ressaltar que
                    as tradições culturais de Sergipe foram construídas e tem
                    sido mantidas majoritariamente por pessoas negras, ainda
                    desvalorizadas, desconhecidas e invisibilizadas. Premiado em
                    2020 no edital "Quarentena da Gente" do Instituto Banese.
                    Foi 3º lugar no ranking nordestino do edital "Arte do
                    Quilombo" da Fundação Cultural Palmares (2020); recebendo
                    moção de aplauso pelo Conselho Estadual de Cultura do Estado
                    de Sergipe pela sua primeira exposição (Preto Sergipe,
                    2021), apoiada pela lei Aldir Blanc e Prêmio Artistas 2021,
                    pela Olho Mágico Produções."
                  </p>
                  <p>edwynartes@gmail.com</p>
                  <p>Instagram: @edwyn.gomes</p>
                </div>
              </div>

              <div className="flex flex-col font-bold mt-5 text-xs md:text-sm">
                <span>Todos os direitos reservados a Kizomba dos Saberes.</span>
                <span>
                  Nenhuma imagem pode ser reproduzida sem autorização prévia.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit relative bg-[#0073a8ff] md:bg-[#a79280]">
        <MenuBar className="fill-[#a79280] w-screen absolute -top-1 hidden md:block" />
        <div className="flex md:gap-20 mx-auto py-10 md:py-40 max-w-7xl w-full px-5 md:px-20">
          <ContactForm />
          <div className="hidden w-1/2 md:flex items-center justify-center">
            <Image
              src={Parafuso}
              alt="Ilustração Parafusos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
