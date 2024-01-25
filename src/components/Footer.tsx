import Image from 'next/image'
import UFS from '@/assets/ufs.png'
import ANANSE from '@/assets/ananse.png'
import DHI from '@/assets/dhi.png'
import FAPITEC from '@/assets/fapitec.png'

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 bg-[#e7c102] py-5 md:py-10">
      <div className="flex items-center gap-5">
        <h3 className="text-sm font-semibold uppercase">Realização</h3>
        <Image src={UFS} alt="" className="h-10 w-auto md:h-auto" />
        <Image src={ANANSE} alt="" className="h-10 w-auto md:h-auto" />
        <Image src={DHI} alt="" className="h-10 w-auto md:h-auto" />
      </div>
      <div className="flex items-center gap-5">
        <h3 className="text-sm font-semibold uppercase">Apoio</h3>
        <Image src={FAPITEC} alt="" className="h-10 w-auto md:h-auto" />
      </div>
    </footer>
  )
}
