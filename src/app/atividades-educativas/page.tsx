'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChegancaPng from '@/assets/cheganca.png'
import PaiJuaTransp from '@/assets/pai-jua.png'
import { DownloadIcon, ExternalLinkIcon } from '@radix-ui/react-icons'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'

// Ilustrações com fundo
import Bacamarteiros from '@/assets/ilustracoes/sem-fundo/bacamarteiro.png'
import Batucada from '@/assets/ilustracoes/sem-fundo/batucada.png'
import Caceteira from '@/assets/ilustracoes/sem-fundo/caceteira.png'
import Cacumbi from '@/assets/ilustracoes/sem-fundo/cacumbi.png'
import Guerreiro from '@/assets/ilustracoes/sem-fundo/guerreiro.png'
import Nago from '@/assets/ilustracoes/sem-fundo/nagô.webp'
import PaiJua from '@/assets/ilustracoes/sem-fundo/pai-jua.png'
import Parafuso from '@/assets/ilustracoes/sem-fundo/parafuso.png'
import Reisado from '@/assets/ilustracoes/sem-fundo/reisado.png'
import Pifano from '@/assets/ilustracoes/sem-fundo/pifano.png'
import BarcoDeFogo from '@/assets/ilustracoes/sem-fundo/barco-de-fogo.png'
import Maracatu from '@/assets/ilustracoes/sem-fundo/maracatu.png'
import SambaDeAboio from '@/assets/ilustracoes/sem-fundo/samba-de-aboio.png'
import Sambadeira from '@/assets/ilustracoes/sem-fundo/sambadeira.png'
import Taieiras from '@/assets/ilustracoes/sem-fundo/taieiras.png'
import Capoeira from '@/assets/ilustracoes/sem-fundo/capoeira.png'
import Cheganca from '@/assets/ilustracoes/sem-fundo/cheganca.png'
import Rendeira from '@/assets/ilustracoes/sem-fundo/rendeira.png'
import Pareia from '@/assets/ilustracoes/sem-fundo/pareia.png'
import SaoGoncalo from '@/assets/ilustracoes/sem-fundo/sao-goncalo.png'

export default function AtividadesEducativas() {
  const [inputValue, setInputValue] = useState('')

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

  return (
    <main className="relative flex flex-col items-center bg-[#ac9378] ">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute w-screen h-full object-cover opacity-20 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />

      <div className="z-10 flex flex-col items-center gap-20 pb-40 pt-24 w-full max-w-3xl">
        <div className="relative">
          <h1 className="mt-20 font-londrinaSolid text-6xl uppercase leading-normal text-[#e7c102] [word-spacing:10px]">
            Atividades Educativas
          </h1>
          <Image
            src={PaiJuaTransp}
            alt=""
            className="absolute -left-14 top-20 z-20 w-24"
          />
          <Image
            src={ChegancaPng}
            alt=""
            className="absolute -right-11 top-20 z-20 w-24"
          />
        </div>
        <input
          type="text"
          placeholder="Pesquise por nome ou busque abaixo por ordem alfabética."
          className="w-[500px] rounded-md px-4 py-2 text-neutral-600 shadow"
          onInput={updateSearch}
        />
        <div className="flex flex-col gap-10 w-full">
          {'barco de fogo'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={BarcoDeFogo}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Barco de Fogo
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'batalhão'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Bacamarteiros}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Batalhão de Bacamarteiros
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'batucada'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Batucada}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Batucada
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'caceteira'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Caceteira}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Caceteira
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'cacumbi'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Cacumbi}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Cacumbi
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'capoeira'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Capoeira}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Capoeira
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'chegança'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Cheganca}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Chegança
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'guerreiro'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Guerreiro}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Guerreiro
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'lambe sujo'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={PaiJua}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Lambe Sujo
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'maracatu'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Maracatu}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Maracatu
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'nago'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Nago}
                    alt="ilustração Barco de Fogo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Nagô
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'parafusos'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Parafuso}
                    alt="ilustração Parafusos"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Parafusos
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'pífano'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Pifano}
                    alt="ilustração Pífanos"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Pífanos
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'reisado'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Reisado}
                    alt="ilustração Reisado"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Reisado
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'renda irlandesa'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Rendeira}
                    alt="ilustração Renda Irlandesa"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Renda Irlandesa
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'samba de aboio'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={SambaDeAboio}
                    alt="ilustração Samba de Aboio"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Samba de Aboio
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'samba de coco'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Sambadeira}
                    alt="ilustração Samba de Coco"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Samba de Coco
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'samba de pareia'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Pareia}
                    alt="ilustração Samba de Pareia"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Samba de Pareia
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'são gonçalo'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={SaoGoncalo}
                    alt="ilustração São Gonçalo"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  São Gonçalo
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {'taieiras'.includes(inputValue.toLowerCase()) && (
            <div className="flex flex-col">
              <div className="flex items-center">
                <div className="w-20 h-20 relative overflow-hidden">
                  <Image
                    src={Taieiras}
                    alt="ilustração Taieiras"
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                  />
                </div>
                <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                  Taieiras
                </h2>
              </div>
              <div className="flex flex-col gap-5 ml-20">
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <DownloadIcon className="text-neutral-50" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Baixar conteúdo</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>{' '}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Atividade 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <DownloadIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Baixar conteúdo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Plano de Aula 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 1
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="flex items-center gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <ExternalLinkIcon className="text-neutral-50" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Ir para página do jogo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>{' '}
                      <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                        Jogo 2
                      </h3>
                    </div>
                    <span className="text-neutral-50 text-sm">
                      Ensino Médio, Laranjeira, Musicalidade, Lagarto
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
