'use client'
import Image from 'next/image'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import Cheganca from '@/assets/cheganca.png'
import PaiJua from '@/assets/pai-jua.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ManifestacoesCulturais() {
  const [inputValue, setInputValue] = useState('')

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  return (
    <main className="relative flex h-[1816px] flex-col items-center bg-[#ac9378]">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute  h-full object-cover opacity-20 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />

      <div className="z-10 flex flex-col items-center gap-20 pb-40 pt-24">
        <div className="relative">
          <h1 className="mt-20 font-paletteMosaic text-5xl uppercase leading-normal text-[#e7c102] [word-spacing:-20px]">
            Manifestacoes Culturais
          </h1>
          <Image
            src={PaiJua}
            alt=""
            className="absolute -left-14 top-20 z-20 w-24"
          />
          <Image
            src={Cheganca}
            alt=""
            className="absolute -right-11 top-20 z-20 w-24"
          />
        </div>
        <input
          type="text"
          placeholder="Pesquise por nome ou busque por ordem alfabética, abaixo."
          className="w-[500px] rounded-md px-4 py-2 text-neutral-600 shadow"
          onInput={updateSearch}
        />
        <div className="grid grid-cols-4 gap-10">
          {'bacamarteiros'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/bacamarteiros">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">Bacamarteiros</h2>
              </div>
            </Link>
          )}
          {'barco de fogo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/barco-de-fogo">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">BARCO DE FOGO</h2>
              </div>
            </Link>
          )}
          {'batalhão'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/batalhao">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">BATALHÃO</h2>
              </div>
            </Link>
          )}
          {'batucada'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/batucada">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">BATUCADA</h2>
              </div>
            </Link>
          )}
          {'caceteira'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/caceteira">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">CACETEIRA</h2>
              </div>
            </Link>
          )}
          {'cacumbi'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/cacumbi">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">CACUMBI</h2>
              </div>
            </Link>
          )}
          {'capoeira'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/capoeira">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">CAPOEIRA</h2>
              </div>
            </Link>
          )}
          {'chegança'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/cheganca">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">CHEGANÇA</h2>
              </div>
            </Link>
          )}
          {'guerreiro'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/guerreiro">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">GUERREIRO</h2>
              </div>
            </Link>
          )}
          {'lambe sujo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/lambe-sujo">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">LAMBE-SUJO</h2>
              </div>
            </Link>
          )}
          {'literatura'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/literatura">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">LITERATURA</h2>
              </div>
            </Link>
          )}
          {'maracatu'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/maracatu">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">MARACATU</h2>
              </div>
            </Link>
          )}
          {'nago'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/nago">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">NAGÔ</h2>
              </div>
            </Link>
          )}
          {'parafusos'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/parafusos">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">PARAFUSOS</h2>
              </div>
            </Link>
          )}
          {'pastoreio'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/pastoreio">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">PASTOREIO</h2>
              </div>
            </Link>
          )}
          {'pífano'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/pifano">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">PÍFANO</h2>
              </div>
            </Link>
          )}
          {'reisado'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/reisado">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">REISADO</h2>
              </div>
            </Link>
          )}
          {'renda irlandesa'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/renda-irlandesa">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">RENDA IRLANDESA</h2>
              </div>
            </Link>
          )}
          {'samba de aboio'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-aboio">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">SAMBA DE ABOIO</h2>
              </div>
            </Link>
          )}
          {'samba de coco'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-coco">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">SAMBA DE COCO</h2>
              </div>
            </Link>
          )}
          {'samba de pareia'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/samba-de-pareia">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">SAMBA DE PAREIA</h2>
              </div>
            </Link>
          )}
          {'são gonçalo'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/sao-goncalo">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">SÃO GONÇALO</h2>
              </div>
            </Link>
          )}
          {'taieiras'.includes(inputValue.toLowerCase()) && (
            <Link href="/manifestacoes-culturais/taieiras">
              <div className="flex flex-col">
                <div className="aspect-square w-36 bg-[#e7c102] " />
                <h2 className="uppercase text-white">TAIEIRAS</h2>
              </div>
            </Link>
          )}
        </div>
      </div>
    </main>
  )
}