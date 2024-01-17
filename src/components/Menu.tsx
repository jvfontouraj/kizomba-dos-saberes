import Logo from '@/assets/logo.png'
import MenuBar from '@/assets/menubar.png'
import Image from 'next/image'
import Link from 'next/link'

export function Menu() {
  return (
    <header className="fixed -top-1 z-50 w-screen">
      <Image
        alt=""
        src={MenuBar}
        className="absolute -z-10 h-24 w-screen opacity-95 drop-shadow-[0_25px_25px_rgb(0_0_0_/_0.4)]"
      />
      <div className="relative mx-auto flex h-24 w-screen items-center justify-center max-w-7xl gap-[75px]">
        <div className="absolute left-0">
          <Link href={'/'}>
            <Image
              src={Logo}
              className="w-20"
              alt={'Logo do Kizomba dos Saberes'}
            />
          </Link>
        </div>
        <nav className="flex gap-9 text-sm font-bold uppercase text-[#0073a8ff]">
          <Link href={'/'}>Página Inicial</Link>
          <Link href={'/manifestacoes-culturais'}>Manifestações Culturais</Link>
          <Link href={'/atividades-educativas'}>Atividades Educativas</Link>
          <Link href={'/afropedia-sergipana'}>Afropedia Sergipana</Link>
          <Link href={'/calendafro'}>Calendafro</Link>
          <Link href={'/sobre'}>Kizomba dos Saberes</Link>
        </nav>
      </div>
    </header>
  )
}
