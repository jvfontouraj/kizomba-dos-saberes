import Image from 'next/image'
import { HeroGallery } from '../HeroGallery'
import BandeirasHero from '@/assets/bandeirashero.png'
import HeroArow from '@/assets/hero-arow.png'
import Parafuso from '@/assets/parafuso.png'
import Cacumbi from '@/assets/cacumbi.png'
import Rendeira from '@/assets/rendeira.png'

export function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <Image src={BandeirasHero} alt="" className="absolute top-10 z-10" />
      <HeroGallery />
      <div className="relative flex flex-col">
        <div className="relative mb-20 cursor-default text-center font-paletteMosaic text-[#ef7b00ff] [text-shadow:_0_0_15px_rgba(0,_0,_0,_0.5)]">
          <h1 className="text-[13rem] leading-tight">KIZOMBA</h1>
          <h2 className="text-[9rem] leading-none [word-spacing:-100px]">
            DOS SABERES
          </h2>
        </div>
        <Image
          src={Cacumbi}
          alt=""
          className="absolute left-[160px] top-12 w-[90px] duration-300 hover:scale-105"
        />
        <Image
          src={Parafuso}
          alt=""
          className="absolute left-96 top-24 w-60 duration-300 hover:scale-105"
        />
        <Image
          src={Rendeira}
          alt=""
          className="absolute bottom-20 left-[300px] w-32 duration-300 hover:scale-105"
        />
      </div>
      <Image src={BandeirasHero} alt="" className="absolute bottom-10 z-10" />
      <a
        href="#sobre"
        className="absolute bottom-3 z-10 duration-300 hover:translate-y-1"
      >
        <Image src={HeroArow} alt="" className="w-[70px]" />
      </a>
    </section>
  )
}
