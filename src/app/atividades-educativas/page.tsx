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
  const [tagsList, setTagsList] = useState<string[]>([])
  const [showFIlterMenu, setShowFilterMenu] = useState(false)
  // const [showCategory, setShowCategory] = useState<string[]>([])

  function updateSearch(event: any) {
    setInputValue(event.target.value)
    console.log(event)
  }

  // useEffect(() => {
  //   atividadesEducativas.map((item) => {
  //     item.activities.map((activity) => {
  //       activity.tags?.map((tag) => {
  //         if (tagsList.includes(tag)) {
  //           if (showCategory.includes(item.name)) {
  //             setShowCategory(
  //               showCategory.filter((state) => state !== item.name),
  //             )
  //           } else {
  //             setShowCategory([...showCategory, item.name])
  //           }
  //         }
  //         return null
  //       })
  //       return null
  //     })
  //     return null
  //   })
  // }, [inputValue, tagsList])

  // useEffect(() => {
  //   console.log(tagsList)
  // }, [tagsList])

  // useEffect(() => {
  //   console.log(showCategory)
  // }, [showCategory])

  function toggleCheckbox(tag: string) {
    if (tagsList.includes(tag)) {
      setTagsList(tagsList.filter((item) => item !== tag))
    } else {
      setTagsList([...tagsList, tag])
    }
  }

  function handleOpenFilterMenu() {
    setShowFilterMenu(!showFIlterMenu)
  }

  return (
    <main className="relative flex flex-col items-center bg-[#ac9378] overflow-hidden">
      <div
        className="absolute w-screen h-full opacity-20 brightness-50"
        style={{
          backgroundImage: "url('/images/wood-background.png')",
        }}
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

      <div className="z-10 flex flex-col items-center gap-10 md:gap-20 pb-40 pt-8 md:pt-24 px-5 md:px-0 w-full max-w-3xl min-h-[calc(100vh+200px)]">
        <div className="relative">
          <h1 className="mt-20 font-londrinaSolid max-w-xs md:max-w-none text-center text-4xl md:text-6xl uppercase leading-none md:leading-normal text-[#e7c102] [word-spacing:10px]">
            Atividades Educativas
          </h1>
          <Image
            src={PaiJuaTransp}
            alt=""
            className="absolute left-7 top-16 md:-left-14 md:top-20 z-20 w-16 md:w-24"
          />
          <Image
            src={ChegancaPng}
            alt=""
            className="absolute right-5 top-16 md:-right-11 md:top-20 z-20 w-16 md:w-24"
          />
        </div>
        <input
          type="text"
          placeholder="Digite o nome da categoria buscada"
          className="w-full md:w-[500px] rounded-md px-4 py-2 text-neutral-600 shadow text-sm md:text-base"
          onInput={updateSearch}
        />
        <button
          onClick={handleOpenFilterMenu}
          className="md:hidden flex items-center text-neutral-50 "
        >
          <span className="border-b border-b-neutral-50 font-londrinaSolid uppercase">
            Selecionar filtros
          </span>
          <svg
            width="25"
            height="25"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 ${
              showFIlterMenu && 'rotate-180'
            }`}
          >
            <path
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="relative flex flex-col gap-10 w-full">
          {atividadesEducativas.map((item, index) => {
            if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
              return (
                <div className="flex flex-col" key={index}>
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
                  <div className="flex flex-col gap-2 md:ml-20">
                    {item.activities.map((activity, index) =>
                      tagsList.length === 0 ? (
                        <div
                          className="flex gap-3 items-center w-full"
                          key={index}
                        >
                          <div className="flex items-center gap-1">
                            <DownloadBtn href={activity.src} />
                            <Link
                              href={activity.src}
                              target="_blank"
                              className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-base md:text-xl w-[110px] md:w-[235px]"
                            >
                              {activity.name}
                            </Link>
                          </div>
                          {activity.tags && (
                            <span className="text-neutral-50 text-xs md:text-sm w-full">
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
                      ) : (
                        activity.tags &&
                        activity.tags.some((tag) => tagsList.includes(tag)) && (
                          <div
                            className="flex gap-3 items-center w-full"
                            key={index}
                          >
                            <div className="flex items-center gap-1">
                              <DownloadBtn href={activity.src} />
                              <Link
                                href={activity.src}
                                target="_blank"
                                className="font-londrinaSolid uppercase text-[#e7c102] font-semibold text-base md:text-xl w-[110px] md:w-[235px]"
                              >
                                {activity.name}
                              </Link>
                            </div>
                            {activity.tags && (
                              <span className="text-neutral-50 text-xs md:text-sm w-full">
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
                        )
                      ),
                    )}
                  </div>
                </div>
              )
            }
            return null
          })}
          <div
            className={`md:flex flex-col gap-5 px-7 py-5 absolute -left-5 md:-left-36 2xl:-left-48 md:-translate-x-1/2 w-screen md:w-[240px] 2xl:w-[290px] h-fit max-h-[calc(100vh-100px)] md:max-h-[600px] overflow-y-scroll bg-neutral-50 md:rounded-md transition-transform duration-100 ${
              showFIlterMenu
                ? 'scale-y-0 -translate-y-1/2'
                : 'scale-y-100 translate-y-0'
            }`}
          >
            <h3 className="font-londrinaSolid text-2xl md:text-xl 2xl:text-2xl uppercase text-center text-[#0073a8ff]">
              Filtros
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
                  <Accordion.Trigger className="font-londrinaSolid text-lg md:text-base 2xl:text-lg text-left uppercase text-[#0073a8ff] border-b-2 border-b-[#0073a8ff]/70 flex justify-between items-center">
                    {item.title}
                    <ChevronDownIcon
                      className="text-[#0073a8ff] ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                  <ul>
                    {item.tags.map((tag, index) => (
                      <Accordion.Content
                        key={index}
                        className="flex gap-2 md:text-sm 2xl:text-base"
                      >
                        <input
                          type="checkbox"
                          name={tag}
                          id={tag}
                          onChange={() => toggleCheckbox(tag)}
                        />
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
