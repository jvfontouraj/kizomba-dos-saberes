import Image from 'next/image'
import Link from 'next/link'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import Livro from '@/assets/livro.png'

export function BookSection() {
  return (
    <section className="relative flex h-[calc(100vh-5.2rem)] w-full items-center justify-center bg-[#008045] ">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute w-screen  h-full object-cover opacity-40 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-5 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />
      <div className="z-10 mx-auto flex h-full w-screen items-center justify-center">
        <div className="flex w-1/2 justify-end">
          <div className="flex w-fit  flex-col justify-end gap-10">
            <div className="flex flex-col gap-5 font-londrinaSolid text-7xl uppercase text-[#e7c102]">
              <h2>Baixe Aqui</h2>
              <h2>Nosso Livro</h2>
            </div>
            <div className="flex max-w-[60ch] flex-col gap-3 text-justify text-white">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper sus- cipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignis- sim qui blandit praesent luptatum zzril
                delenit augue duis dolore te feugait nulla facilisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper sus- cipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper su
              </p>
            </div>
            <Link
              href=""
              download={' '}
              className="w-fit rounded-lg bg-[#2185BA] px-5 py-3 font-londrinaSolid text-2xl uppercase text-[#e7c102]"
            >
              Baixar
            </Link>
          </div>
        </div>
        <div className="relative flex h-full w-1/2 items-center">
          {/* <Image src={Livro} alt="" className="z-10 w-[50rem]" /> */}
          <Image src={Livro} alt="" className="absolute -z-10 w-[50rem]" />
        </div>
      </div>
    </section>
  )
}
