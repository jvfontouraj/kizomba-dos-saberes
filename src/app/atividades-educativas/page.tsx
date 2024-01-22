/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChegancaPng from '@/assets/cheganca.png'
import PaiJuaTransp from '@/assets/pai-jua.png'
import { atividadesEducativas } from '@/content/atividades-educativas/atividadesEducativas'
import { DownloadBtn } from '../components/DownloadBtn'
import Link from 'next/link'
import { tagsCatalog } from '@/content/atividades-educativas/tags'
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export default function AtividadesEducativas() {
  const [inputValue, setInputValue] = useState('')

  const tags = ['Ensino Médio', 'Musicalidade']

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

  useEffect(() => {
    atividadesEducativas.map((item) => {
      item.activities.map((activity) => {
        activity.tags?.map((tag) => {
          if (tags.includes(tag)) {
            console.log(item.name)
          }
          return null
        })
        return null
      })
      return null
    })
  }, [inputValue])

  return (
    <main className="relative flex flex-col items-center bg-[#ac9378]">
      <div
        className="absolute w-screen h-full opacity-20 brightness-50"
        style={{
          backgroundImage: "url('/images/wood-background.png')",
        }}
      />
      <Image
        src={Bandeiras2}
        alt="Bandeiras"
        className="absolute top-28 z-10"
      />
      <Image
        src={Bandeiras2}
        alt="Bandeiras"
        className="absolute bottom-5 z-10"
      />

      <div className="z-10 flex flex-col items-center gap-20 pb-40 pt-24 w-full max-w-3xl min-h-screen">
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
          placeholder="Digite o nome da categoria buscada"
          className="w-[500px] rounded-md px-4 py-2 text-neutral-600 shadow"
          onInput={updateSearch}
        />
        <div className="relative flex flex-col gap-10 w-full">
          {atividadesEducativas.map((item) => {
            if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return (
                <div className="flex flex-col" key={item.name}>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-20 relative overflow-hidden">
                      <img
                        src={item.imgUrl}
                        alt={`ilustração ${item.name}`}
                        className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-auto"
                      />
                    </div>
                    <h2 className="font-londrinaSolid text-2xl uppercase text-neutral-50  w-full border-b-2 border-[#e7c102]">
                      {item.name}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2 ml-20">
                    {item.activities.map((activity) => (
                      <div
                        className="flex gap-3 items-center w-full"
                        key={activity.name}
                      >
                        <div className="flex items-center gap-1">
                          <DownloadBtn href={activity.src} />
                          <Link
                            href={activity.src}
                            target="_blank"
                            className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl w-[235px]"
                          >
                            {activity.name}
                          </Link>
                        </div>
                        {activity.tags && (
                          <span className="text-neutral-50 text-sm w-full">
                            Palavras-chave:{' '}
                            {activity.tags.map(
                              (tag, index) =>
                                tag +
                                (activity.tags &&
                                activity.tags.length - 1 !== index
                                  ? ', '
                                  : ''),
                            )}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          })}
          <div className="flex flex-col gap-5 px-7 py-5 absolute -left-48 -translate-x-1/2 w-[290px] h-fit bg-neutral-50 rounded-md">
            <h3 className="font-londrinaSolid text-2xl uppercase text-center text-[#0073a8ff]">
              Categorias
            </h3>
            {tagsCatalog.map((item, index) => (
              <Accordion.Root
                key={index}
                type="single"
                defaultValue={tagsCatalog[0].title}
                collapsible
              >
                <Accordion.Item
                  value={item.title}
                  className="flex flex-col gap-2"
                >
                  <Accordion.Trigger className="font-londrinaSolid text-lg text-left uppercase text-[#0073a8ff] border-b-2 border-b-[#0073a8ff]/70 flex justify-between items-center">
                    {item.title}
                    <ChevronDownIcon
                      className="text-[#0073a8ff] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                  <ul>
                    {item.tags.map((tag, index) => (
                      <Accordion.Content key={index} className="flex gap-2">
                        <input type="checkbox" name={tag} id={tag} />
                        <label htmlFor={tag} className="text-neutral-700">
                          {tag}
                        </label>
                      </Accordion.Content>
                    ))}
                  </ul>
                </Accordion.Item>
              </Accordion.Root>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
