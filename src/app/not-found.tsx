import Image from 'next/image'
import HeroBg from '@/assets/herobg.png'
import BandeirasHero from '@/assets/bandeirashero.png'

export default function NotFound() {
  return (
    <>
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image src={BandeirasHero} alt="" className="absolute top-10 z-10" />
        <Image
          src={HeroBg}
          alt=""
          className="absolute -z-50 h-screen object-cover brightness-50"
        />
        <div className="flex h-[calc(100vh-170px)] flex-col items-center justify-center gap-10 text-[#ef7b00ff] [text-shadow:_0_0_15px_rgba(0,_0,_0,_0.5)]">
          <h1 className="font-paletteMosaic text-9xl ">404</h1>
          <p className="text-4xl font-semibold">Página não encontrada</p>
        </div>
        <Image src={BandeirasHero} alt="" className="absolute bottom-10 z-10" />
      </section>
    </>
  )
}
