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
  const images = [Image1, Image2, Image3, Image4, Image5]

  setTimeout(() => {
    if (showImg < 4) {
      setShowImg(showImg + 1)
    } else {
      setShowImg(0)
    }
  }, 5000)

  return (
    <div className="absolute w-screen h-screen overflow-hidden flex items-center justify-center">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="Imagem de fundo"
          className={cs(
            'absolute md:w-screen md:min-h-screen h-screen object-cover md:h-full md:object-fill',
            showImg === index
              ? ' animate-fade-in'
              : ' animate-fade-out opacity-0',
          )}
        />
      ))}
    </div>
  )
}
