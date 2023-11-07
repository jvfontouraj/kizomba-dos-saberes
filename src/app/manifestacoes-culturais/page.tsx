'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChegancaPng from '@/assets/cheganca.png'
import PaiJuaTransp from '@/assets/pai-jua.png'

// Ilustrações com fundo
import Bacamarteiros from 'public/images/ilustracoes/bacamarteiro.webp'
import Batucada from 'public/images/ilustracoes/batucada.webp'
import Caceteira from 'public/images/ilustracoes/caceteira.webp'
import Cacumbi from 'public/images/ilustracoes/cacumbi.webp'
import Guerreiro from 'public/images/ilustracoes/guerreiro.webp'
import Nago from 'public/images/ilustracoes/nagô.webp'
import PaiJua from 'public/images/ilustracoes/pai-jua.webp'
import Parafuso from 'public/images/ilustracoes/parafuso.webp'
import Reisado from 'public/images/ilustracoes/reisado.webp'
import Zabumba from 'public/images/ilustracoes/zabumba.webp'
import BarcoDeFogo from 'public/images/ilustracoes/barco-de-fogo.webp'
import Maracatu from 'public/images/ilustracoes/maracatu.webp'
import SambaDeAboio from 'public/images/ilustracoes/samba-de-aboio.webp'
import Sambadeira from 'public/images/ilustracoes/sambadeira.webp'
import Taieiras from 'public/images/ilustracoes/taieiras.webp'
import Capoeira from 'public/images/ilustracoes/capoeira.webp'
import Cheganca from 'public/images/ilustracoes/cheganca.webp'
import Rendeira from 'public/images/ilustracoes/rendeira.webp'
import Pareia from 'public/images/ilustracoes/pareia.webp'
import SaoGoncalo from 'public/images/ilustracoes/sao-goncalo.webp'

export default function ManifestacoesCulturais() {
  const [inputValue, setInputValue] = useState('')

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

  return (
    <main className="relative flex h-[1816px] flex-col items-center bg-[#ac9378]">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute w-screen h-full object-cover opacity-20 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />

      <div className="z-10 flex flex-col items-center gap-20 pb-40 pt-24">
        <div className="relative">
          <h1 className="mt-20 font-londrinaSolid text-6xl uppercase leading-normal text-[#e7c102] [word-spacing:10px]">
            Manifestações Culturais
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
        <div className="grid grid-cols-4 gap-16 font-semibold text-lg">
          {'barco de fogo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/barco-de-fogo">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#0d0c38] shadow-md">
                  <Image
                    src={BarcoDeFogo}
                    alt="ilustração barco de fogo"
                    className="h-full object-cover scale-110 -translate-x-5"
                  />
                </div>
                <h2 className="uppercase text-white">BARCO DE FOGO</h2>
              </div>
            </Link>
          )}
          {'batalhão'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/batalhao">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Bacamarteiros}
                    alt="ilustração de bacamarteiros"
                    className="h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">BATALHÃO</h2>
              </div>
            </Link>
          )}
          {'batucada'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/batucada">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Batucada}
                    alt="ilustração de batucada"
                    className="-translate-y-5"
                  />
                </div>
                <h2 className="uppercase text-white">BATUCADA</h2>
              </div>
            </Link>
          )}
          {'caceteira'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/caceteira">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#b37843] shadow-md">
                  <Image
                    src={Caceteira}
                    quality={1}
                    alt="ilustração de caceteira"
                    className="h-full -translate-x-1 object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">CACETEIRA</h2>
              </div>
            </Link>
          )}
          {'cacumbi'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/cacumbi">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#9a8465] shadow-md">
                  <Image
                    src={Cacumbi}
                    alt="ilustração de cacumbi"
                    className="-translate-y-2 scale-[0.85]"
                  />
                </div>
                <h2 className="uppercase text-white">CACUMBI</h2>
              </div>
            </Link>
          )}
          {'capoeira'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/capoeira">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden flex items-center rounded-full bg-[#ce7644] shadow-md">
                  <Image
                    src={Capoeira}
                    alt="ilustração de Capoeira"
                    className="scale-75"
                  />
                </div>
                <h2 className="uppercase text-white">CAPOEIRA</h2>
              </div>
            </Link>
          )}
          {'chegança'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/cheganca">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden flex items-center rounded-full bg-[#b7d6d7] shadow-md">
                  <Image
                    src={Cheganca}
                    alt="ilustração de guerreiro"
                    className="scale-75"
                  />
                </div>
                <h2 className="uppercase text-white">CHEGANÇA</h2>
              </div>
            </Link>
          )}
          {'guerreiro'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/guerreiro">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Guerreiro}
                    alt="ilustração de guerreiro"
                    className="h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">GUERREIRO</h2>
              </div>
            </Link>
          )}
          {'lambe sujo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/lambe-sujo">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={PaiJua}
                    alt="ilustração de guerreiro"
                    className="h-full object-cover"
                  />
                </div>{' '}
                <h2 className="uppercase text-white">LAMBE-SUJO</h2>
              </div>
            </Link>
          )}
          {'maracatu'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/maracatu">
              <div className="flex flex-col items-center gap-2">
                <div className="flex aspect-square w-36 items-center overflow-hidden rounded-full bg-[#BA9446] shadow-md">
                  <Image
                    src={Maracatu}
                    alt="ilustração de guerreiro"
                    className="w-full object-cover"
                  />
                </div>{' '}
                <h2 className="uppercase text-white">MARACATU</h2>
              </div>
            </Link>
          )}
          {'nago'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/nago">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square relative w-36 flex items-center overflow-hidden rounded-full bg-[#8e6337] shadow-md">
                  <Image
                    src={Nago}
                    alt="ilustração de nago"
                    className="object-cover w-36 absolute"
                  />
                </div>
                <h2 className="uppercase text-white">NAGÔ</h2>
              </div>
            </Link>
          )}
          {'parafusos'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/parafusos">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Parafuso}
                    alt="ilustração de parafuso"
                    className="h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">PARAFUSOS</h2>
              </div>
            </Link>
          )}
          {'pífano'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/pifano">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Zabumba}
                    alt="ilustração de parafuso"
                    className="h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">PÍFANO</h2>
              </div>
            </Link>
          )}
          {'reisado'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/reisado">
              <div className="flex flex-col items-center gap-2">
                <div className="flex aspect-square w-36 overflow-hidden rounded-full bg-[#e1a35f] shadow-md">
                  <Image
                    src={Reisado}
                    quality={1}
                    alt="ilustração de reisado"
                    className="my-auto w-full -translate-x-1 object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">REISADO</h2>
              </div>
            </Link>
          )}
          {'renda irlandesa'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/renda-irlandesa">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden flex items-center rounded-full bg-[#BE3C45] shadow-md">
                  <Image
                    src={Rendeira}
                    alt="ilustração samba de aboio"
                    className=""
                  />
                </div>
                <h2 className="uppercase text-white">RENDA IRLANDESA</h2>
              </div>
            </Link>
          )}
          {'samba de aboio'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-aboio">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#BE3C45] shadow-md">
                  <Image
                    src={SambaDeAboio}
                    alt="ilustração samba de aboio"
                    className="-mt-1 h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">SAMBA DE ABOIO</h2>
              </div>
            </Link>
          )}
          {'samba de coco'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-coco">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Sambadeira}
                    alt="ilustração samba de coco"
                    className="h-full object-cover"
                  />
                </div>
                <h2 className="uppercase text-white">SAMBA DE COCO</h2>
              </div>
            </Link>
          )}
          {'samba de pareia'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-pareia">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden flex items-center rounded-full bg-[#f7e88d] shadow-md">
                  <Image
                    src={Pareia}
                    alt="ilustração samba de coco"
                    className="scale-90 translate-y-3"
                  />
                </div>
                <h2 className="uppercase text-white">SAMBA DE PAREIA</h2>
              </div>
            </Link>
          )}
          {'são gonçalo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/sao-goncalo">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 relative overflow-hidden rounded-full bg-[#d8655f] shadow-md">
                  <Image
                    src={SaoGoncalo}
                    alt="ilustração samba de coco"
                    className="scale-95 absolute z-10"
                  />
                  <div className="w-1/2 absolute bg-[#d9695f] left-0 h-full" />
                  <div className="w-1/2 absolute bg-[#d06056] left-1/2 h-full" />
                </div>
                <h2 className="uppercase text-white">SÃO GONÇALO</h2>
              </div>
            </Link>
          )}
          {'taieiras'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/taieiras">
              <div className="flex flex-col items-center gap-2">
                <div className="aspect-square w-36 overflow-hidden rounded-full bg-[#e7c102] shadow-md">
                  <Image
                    src={Taieiras}
                    alt="ilustração de parafuso"
                    className="h-full object-cover"
                  />
                </div>{' '}
                <h2 className="uppercase text-white">TAIEIRAS</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}
