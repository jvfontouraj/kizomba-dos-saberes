import Image from 'next/image'
import Link from 'next/link'

// Hero
import HeroBg from '@/assets/herobg.png'
import BandeirasHero from '@/assets/bandeirashero.png'
import HeroArow from '@/assets/hero-arow.png'
import Parafuso from '@/assets/parafuso.png'
import Cacumbi from '@/assets/cacumbi.png'
import Rendeira from '@/assets/rendeira.png'

// Kizomba
import Capoeira from '@/assets/capoeira.png'
import LogoKizomba from '@/assets/logo-home.png'
import Piramides from '@/assets/piramides.png'
import WoodBackground from '@/assets/wood-background.png'

// Aonde tem cultura
import Bandeiras1 from '@/assets/bandeiras1.png'
import Cheganca from '@/assets/cheganca.png'
import LambeSujo from '@/assets/lambe-sujo.png'
import Bacamarteiro from '@/assets/bacamarteiro.png'
import RealezaNago from '@/assets/realeza-nago.png'
import PaiJua from '@/assets/pai-jua.png'
import Mapa from '@/assets/mapa.png'

// Livro
import Bandeiras2 from '@/assets/bandeiras2.png'
import Livro from '@/assets/livro.png'

export default function Home() {
  return (
    <main className="w-screen">
      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image src={BandeirasHero} alt="" className="absolute top-10 z-10" />
        <Image
          src={HeroBg}
          alt=""
          className="absolute -z-50 h-screen object-cover brightness-50"
        />
        <div className="relative flex flex-col text-center font-paletteMosaic text-[#ef7b00ff]">
          <h1 className="text-[13rem] leading-none">KIZOMBA</h1>
          <h2 className="text-[9rem] leading-none">DOS SABERES</h2>
          <Image
            src={Cacumbi}
            alt=""
            className="absolute left-28 top-10 w-20"
          />
          <Image
            src={Parafuso}
            alt=""
            className="absolute left-64 top-10 w-60"
          />
          <Image
            src={Rendeira}
            alt=""
            className="absolute bottom-0 left-64 w-28"
          />
        </div>
        <Image src={BandeirasHero} alt="" className="absolute bottom-10 z-10" />
        <Image
          src={HeroArow}
          alt=""
          className="absolute bottom-3 z-10 w-[70px]"
        />
      </section>
      <section className="relative flex h-[calc(100vh-5.2rem)] w-full items-center justify-center bg-[#ac9378]">
        <Image
          src={WoodBackground}
          alt=""
          className="absolute  h-full object-cover opacity-40 brightness-50"
        />
        <div className="z-10 grid grid-cols-2">
          <div className="mr-32 flex flex-col items-center justify-self-end">
            <Image src={LogoKizomba} alt="" className="h-[22rem] w-auto" />
            <Image src={Capoeira} alt="" className="-mt-12 h-[22rem] w-auto" />
          </div>

          <div className="flex flex-col gap-2">
            <Image src={Piramides} alt="" className="h-auto w-36" />
            <div className="flex max-w-[60ch] flex-col gap-3 text-white">
              <p>
                O portal <span className="font-bold">Kizomba dos Saberes</span>{' '}
                é uma ferramenta de educação sobre as culturas afro,
                contribuindo para a efetivação da lei 10.639/03, permitindo às
                professoras e professores dos sistemas de ensino da educação
                básica conhecer as especiﬁcidades e riqueza do repertório
                cultural negro de Sergipe. Assim, professores, educadores e
                gestores escolares encontrarão aqui uma série de conteúdos que
                permitirão que a cultura afro-sergipana seja ensinada nas
                escolas de forma qualiﬁcada e lúdica, a partir das manifestações
                simbólicas e dos sentimentos produzidos pelos africanos e seus
                descendentes ao longo da história sergipana.
              </p>
              <p>
                Esta é uma plataforma inédita no cenário das tecnologias
                educacionais disponíveis para o público de docentes e discentes
                em Sergipe e no mundo. A inserção de conteúdos sobre a história
                e cultura negra e africana em Sergipe como recurso de tecnologia
                educacional colabora para a difusão dos conhecimentos sobre a
                história e identidade afro-sergipana, sendo um caminho eﬁcaz
                para a superação do racismo e intolerâncias nos sistemas
                educacionais sergipanos.
              </p>
              <p>
                Desta forma, o portal também contribui para que a população
                sergipana, em geral, e as comunidades negras, em particular,
                conheçam sua própria história e, ao mesmo tempo, dará
                visibilidade mundial à riqueza da cultura sergipana, já que ao
                estar disponível na internet assume não só contornos locais e
                regionais, como também nacionais e internacionais.
              </p>
              <p>
                Assim, este projeto visa contribuir não apenas para a difusão de
                repertórios educativos sobre a história e a cultura de matriz
                africana em Sergipe, mas também para a do conhecimento das
                contribuições de Sergipe para a formação do patrimônio cultural
                afrobrasileiro.
              </p>
              <p className="mt-5 font-bold">Vamos navegar?</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-[calc(100vh-5.5rem)] w-screen flex-col items-center justify-center gap-5 bg-[#2185BA]">
        <div className="relative flex flex-col gap-3">
          <h2 className="font-paletteMosaic text-7xl  uppercase text-[#e7c102]">
            Onde tem cultura?
          </h2>
          <div className="text-sm leading-none text-white ">
            <p>Passe o mouse por cima dos municípios de Sergipe</p>
            <p>
              e descubra as manifestações culturais exisitentes em cada região.
            </p>
          </div>
          <Image
            src={Bandeiras1}
            alt=""
            className="absolute -left-14 top-5 w-10"
          />
          <Image
            src={Cheganca}
            alt=""
            className="absolute -right-40 -top-20 w-40"
          />
        </div>
        <div className="relative">
          <Image src={Mapa} alt="" className="relative z-10 w-[500px]" />
          <Image
            src={Bacamarteiro}
            alt=""
            className="absolute -right-10 top-0 z-20 w-72"
          />
          <Image
            src={RealezaNago}
            alt=""
            className="absolute -left-10 top-28 w-48"
          />
          <Image
            src={LambeSujo}
            alt=""
            className="absolute -bottom-16 -left-20 z-20 w-44"
          />
          <Image
            src={PaiJua}
            alt=""
            className="absolute -bottom-20 right-36 z-20 w-36"
          />
          <div className="absolute left-[600px] top-32 flex w-max flex-col gap-3 border border-[#e7c102] px-3 py-5">
            <div className="flex items-start gap-2">
              <Image src={Bandeiras1} alt="" className="w-5" />
              <h3 className="font-paletteMosaic text-2xl uppercase text-[#e7c102]">
                ARACAJU
              </h3>
            </div>
            <ul className="ml-2 border-l border-[#e7c102] pl-2 text-sm text-white">
              <li>· Reisado Estrelinha do Nordeste</li>
              <li>· Samba de Côco de Seu Diô</li>
              <li>· Guerreiro da Mocidade</li>
              <li>· Guerreiro Vitória da Mocidade</li>
              <li>· Abassá São Jorge</li>
              <li>· Abassá Oxóssi Kacilecy</li>
              <li>· Abassá Axé Ilê Pilão de Oxaguian</li>
              <li>· Ilê Axé Dematá Ni Sahara</li>
              <li>· Abassá Ogum Megê</li>
              <li>· Ilê Axé Nisahara Ojú Ifá</li>
              <li>· Ilê Yátassitaô Ifá Enibalé</li>
              <li>· Ilê Axé Omin Dandá Onirê</li>
              <li>· Nzo Mavongiro e Delezô Pai Joaquim de Angola</li>
              <li>· Nzo Águas da Penha</li>
              <li>· Ilê Axé Rundê Elegbédé Já Alakorôdejê</li>
              <li>· Ilê Axé Iyá Oxum</li>
              <li>· Maloca</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative flex h-[calc(100vh-5.2rem)] w-full items-center justify-center bg-green-600">
        <Image
          src={WoodBackground}
          alt=""
          className="absolute  h-full object-cover opacity-40 brightness-50"
        />
        <Image src={Bandeiras2} alt="" className="absolute top-5 z-10" />
        <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />
        <div className="z-10 mx-auto flex h-full w-screen items-center justify-center">
          <div className="flex w-1/2 justify-end">
            <div className="flex w-fit  flex-col justify-end gap-10">
              <div className="flex flex-col gap-5 font-paletteMosaic text-7xl uppercase text-[#e7c102]">
                <h2>Baixe Aqui</h2>
                <h2>Nosso Livro</h2>
              </div>
              <div className="flex max-w-[60ch] flex-col gap-3 text-white">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper sus- cipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignis- sim qui blandit praesent
                  luptatum zzril delenit augue duis dolore te feugait nulla
                  facilisi.
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
                className="w-fit rounded-lg bg-[#2185BA] p-3 text-xl font-bold uppercase tracking-wide text-[#e7c102]"
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
    </main>
  )
}
