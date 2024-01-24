'use client'
import Logo from '@/assets/logo.png'
import MenuBar from '@/assets/menubar.png'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed -top-1 z-50 w-screen">
      <Image
        alt=""
        src={MenuBar}
        className="absolute -z-10 h-14 md:h-24 w-screen md:opacity-95 drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.4)]"
      />
      <div className="relative mx-auto flex h-14 md:h-24 w-screen items-center justify-center max-w-7xl gap-[75px]">
        <div className="absolute left-5 md:left-0">
          <Link href={'/'} className="flex items-center justify-center">
            <Image
              src={Logo}
              className="w-12 md:w-20"
              alt={'Logo do Kizomba dos Saberes'}
            />
          </Link>
        </div>
        <nav className="hidden gap-9 text-sm font-bold uppercase text-[#0073a8ff] md:flex">
          <Link href={'/'}>Página Inicial</Link>
          <Link href={'/manifestacoes-culturais'}>Manifestações Culturais</Link>
          <Link href={'/atividades-educativas'}>Atividades Educativas</Link>
          <Link href={'/afropedia-sergipana'}>Afropedia Sergipana</Link>
          <Link href={'/calendafro'}>Calendafro</Link>
          <Link href={'/sobre'}>Kizomba dos Saberes</Link>
        </nav>

        <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className="absolute right-5 md:hidden"
              onClick={handleToggleMenu}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0073a8ff]"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-blackA8 data-[state=open]:animate-overlayShow z-30 fixed h-[calc(100vh-56px)] w-screen top-12 left-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed z-50 top-12 left-0 h-[calc(100vh-48px)] w-screen bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div className="flex flex-col justify-center w-full text-center h-full gap-9 text-base font-bold uppercase text-[#0073a8ff]">
                <Link href={'/'} onClick={handleToggleMenu}>
                  Página Inicial
                </Link>
                <Link
                  href={'/manifestacoes-culturais'}
                  onClick={handleToggleMenu}
                >
                  Manifestações Culturais
                </Link>
                <Link
                  href={'/atividades-educativas'}
                  onClick={handleToggleMenu}
                >
                  Atividades Educativas
                </Link>
                <Link href={'/afropedia-sergipana'} onClick={handleToggleMenu}>
                  Afropedia Sergipana
                </Link>
                <Link href={'/calendafro'} onClick={handleToggleMenu}>
                  Calendafro
                </Link>
                <Link href={'/sobre'} onClick={handleToggleMenu}>
                  Kizomba dos Saberes
                </Link>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
