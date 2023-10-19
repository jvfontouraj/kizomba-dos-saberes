'use client'
import { useState } from 'react'
import Image1 from '@/assets/hero-carousel/image-01.webp'
import Image2 from '@/assets/hero-carousel/image-02.webp'
import Image3 from '@/assets/hero-carousel/image-03.webp'
import Image4 from '@/assets/hero-carousel/image-04.webp'
import Image5 from '@/assets/hero-carousel/image-05.webp'
import Image from 'next/image'
import cs from 'classnames'

export function HeroGallery() {
  const [showImg, setShowImg] = useState(0)

  setTimeout(() => {
    if (showImg < 4) {
      setShowImg(showImg + 1)
    } else {
      setShowImg(0)
    }
  }, 5000)

  return (
    <div className="absolute">
      <div className="absolute h-screen w-screen  -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Image1}
          alt="Imagem de fundo"
          className={
            (cs('h-full w-full'),
            showImg === 0 ? ' animate-fade-in' : ' animate-fade-out opacity-0')
          }
        />
      </div>
      <div className="absolute h-screen w-screen -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Image2}
          alt="Imagem de fundo"
          className={
            (cs('h-full w-full'),
            showImg === 1 ? ' animate-fade-in' : ' animate-fade-out opacity-0')
          }
        />
      </div>
      <div className="absolute h-screen w-screen -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Image3}
          alt="Imagem de fundo"
          className={
            (cs('h-full w-full'),
            showImg === 2 ? ' animate-fade-in' : ' animate-fade-out opacity-0')
          }
        />
      </div>
      <div className="absolute h-screen w-screen -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Image4}
          alt="Imagem de fundo"
          className={
            (cs('h-full w-full'),
            showImg === 3 ? ' animate-fade-in' : ' animate-fade-out opacity-0')
          }
        />
      </div>
      <div className="absolute h-screen w-screen -translate-x-1/2 -translate-y-1/2">
        <Image
          src={Image5}
          alt="Imagem de fundo"
          className={
            (cs('h-full w-full'),
            showImg === 4 ? ' animate-fade-in' : ' animate-fade-out opacity-0')
          }
        />
      </div>
    </div>
  )
}
