/* eslint-disable @next/next/no-img-element */
'use client'
import Image from 'next/image'
import { useState } from 'react'
import Bandeiras2 from '@/assets/bandeiras2.png'
import ChegancaPng from '@/assets/cheganca.png'
import PaiJuaTransp from '@/assets/pai-jua.png'
import { atividadesEducativas } from '@/content/atividades-educativas/atividadesEducativas'
import { DownloadBtn } from '../components/DownloadBtn'
import { ExternalLinkBtn } from '../components/ExternalLinkBtn'

export default function AtividadesEducativas() {
  const [inputValue, setInputValue] = useState('')

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

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
          {atividadesEducativas.map((item) => {
            if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return (
                <div className="flex flex-col" key={item.name}>
                  <div className="flex items-center">
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
                  <div className="flex flex-col gap-5 ml-20">
                    <div className="flex flex-col">
                      {item.activities.map((activity) => (
                        <div
                          className="flex gap-3 items-center"
                          key={activity.name}
                        >
                          <div className="flex items-center gap-1">
                            <DownloadBtn href={activity.src} />
                            <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                              {activity.name}
                            </h3>
                          </div>
                          <span className="text-neutral-50 text-sm">
                            {activity.tags.map(
                              (tag, index) =>
                                tag +
                                (activity.tags.length - 1 !== index
                                  ? ', '
                                  : ''),
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      {item.lessonPlans.map((lessonPlan) => (
                        <div
                          className="flex gap-3 items-center"
                          key={lessonPlan.name}
                        >
                          <div className="flex items-center gap-1">
                            <DownloadBtn href={lessonPlan.src} />
                            <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                              {lessonPlan.name}
                            </h3>
                          </div>
                          <span className="text-neutral-50 text-sm">
                            {lessonPlan.tags.map(
                              (tag, index) =>
                                tag +
                                (lessonPlan.tags.length - 1 !== index
                                  ? ', '
                                  : ''),
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      {item.games.map((game) => (
                        <div
                          className="flex gap-3 items-center"
                          key={game.name}
                        >
                          <div className="flex items-center gap-1">
                            <ExternalLinkBtn href={game.src} />
                            <h3 className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-xl">
                              {game.name}
                            </h3>
                          </div>
                          <span className="text-neutral-50 text-sm">
                            {game.tags.map(
                              (tag, index) =>
                                tag +
                                (game.tags.length - 1 !== index ? ', ' : ''),
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </main>
  )
}
