import Image from 'next/image'
import { HeroGallery } from '../HeroGallery'
import BandeirasHero from '@/assets/bandeirashero.png'
import HeroArow from '@/assets/hero-arow.png'
import Parafuso from '@/assets/parafuso.png'
import Cacumbi from '@/assets/cacumbi.png'
import Rendeira from '@/assets/rendeira.png'

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden ">
      <Image
        src={BandeirasHero}
        alt=""
        className="absolute scale-[3] md:scale-100 top-16 md:top-10 z-10"
      />
      <HeroGallery />
      <div className="relative flex flex-col">
        <div className="relative mb-20 cursor-default text-center font-paletteMosaic text-[#F47015] [text-shadow:_0_0_15px_rgba(0,_0,_0,_0.5)]">
          <h1 className="text-6xl md:text-[13rem] leading-tight">KIZOMBA</h1>
          <h2 className="text-[2.5rem] md:text-[9rem] leading-none [word-spacing:-20px] md:[word-spacing:-100px]">
            DOS SABERES
          </h2>
        </div>
        <Image
          src={Cacumbi}
          alt=""
          className="absolute left-[46px] top-4 md:left-[160px] md:top-12 w-[26px] md:w-[90px] duration-300 hover:scale-105"
        />
        <Image
          src={Parafuso}
          alt=""
          className="absolute left-28 top-7 md:left-96 md:top-24 w-[75px] md:w-60 duration-300 hover:scale-105"
        />
        <Image
          src={Rendeira}
          alt=""
          className="absolute left-[85px] top-[85px] w-10 md:top-auto md:bottom-20 md:left-[300px] md:w-32 duration-300 hover:scale-105"
        />
      </div>
      <Image
        src={BandeirasHero}
        alt=""
        className="absolute scale-[3] md:scale-100 bottom-16 md:bottom-10 z-10"
      />
      <a
        href="#sobre"
        className="absolute bottom-2 md:bottom-3 z-10 duration-300 hover:translate-y-1"
      >
        <Image src={HeroArow} alt="" className="w-10 md:w-[70px]" />
      </a>
    </section>
  )
}
