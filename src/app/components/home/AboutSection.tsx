import Image from 'next/image'
import Capoeira from '@/assets/capoeira.png'
import LogoKizomba from '@/assets/logo-home.png'
import Piramides from '@/assets/piramides.png'
import WoodBackground from '@/assets/wood-background.png'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative flex h-fit md:min-h-[calc(100vh-5.2rem)] md:py-20 2xl:py-5 w-full items-center justify-center bg-[#ac9378] scroll-mt-[0px] md:scroll-mt-[90px]"
    >
      <Image
        src={WoodBackground}
        alt=""
        className="absolute w-screen h-full object-cover opacity-40 brightness-50"
      />
      <div className="z-10 p-10 md:p-0 grid gap-10 md:gap-0 grid-cols-1 grid-rows-[auto_auto] md:grid-cols-2">
        <div className="md:mr-32 flex md:flex-col items-center justify-center md:justify-self-end">
          <Image
            src={LogoKizomba}
            alt=""
            className="h-32 md:h-[22rem] w-auto translate-x-2"
          />
          <Image
            src={Capoeira}
            alt=""
            className="md:-mt-12 h-28 md:h-[22rem] w-auto -translate-x-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Image src={Piramides} alt="" className="h-auto w-36" />
          <div className="flex max-w-[60ch] flex-col gap-3 text-justify text-white text-sm md:text-base">
            <p>
              O portal <span className="font-bold">Kizomba dos Saberes</span> é
              uma ferramenta de educação sobre as culturas afro, contribuindo
              para a efetivação da lei 10.639/03, permitindo às professoras e
              professores dos sistemas de ensino da educação básica conhecer as
              especiﬁcidades e riqueza do repertório cultural negro de Sergipe.
              Assim, professores, educadores e gestores escolares encontrarão
              aqui uma série de conteúdos que permitirão que a cultura
              afro-sergipana seja ensinada nas escolas de forma qualiﬁcada e
              lúdica, a partir das manifestações simbólicas e dos sentimentos
              produzidos pelos africanos e seus descendentes ao longo da
              história sergipana.
            </p>
            <p>
              Esta é uma plataforma inédita no cenário das tecnologias
              educacionais disponíveis para o público de docentes e discentes em
              Sergipe e no mundo. A inserção de conteúdos sobre a história e
              cultura negra e africana em Sergipe como recurso de tecnologia
              educacional colabora para a difusão dos conhecimentos sobre a
              história e identidade afro-sergipana, sendo um caminho eﬁcaz para
              a superação do racismo e intolerâncias nos sistemas educacionais
              sergipanos.
            </p>
            <p>
              Desta forma, o portal também contribui para que a população
              sergipana, em geral, e as comunidades negras, em particular,
              conheçam sua própria história e, ao mesmo tempo, dará visibilidade
              mundial à riqueza da cultura sergipana, já que ao estar disponível
              na internet assume não só contornos locais e regionais, como
              também nacionais e internacionais.
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
  )
}
