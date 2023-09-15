'use client'
import Image from 'next/image'
import Link from 'next/link'
import WoodBackground from '@/assets/wood-background.png'
import Bandeiras1 from '@/assets/bandeiras1.png'
import Bandeiras2 from '@/assets/bandeiras2.png'
import Arrow from '@/assets/hero-arow.png'
import Piramides from '@/assets/piramides.png'

export default function Nago() {
  return (
    <main className="relative flex flex-col items-center bg-[#ac9378] text-white">
      <Image
        src={WoodBackground}
        alt=""
        className="absolute  h-full object-cover opacity-20 brightness-50"
      />
      <Image src={Bandeiras2} alt="" className="absolute top-28 z-10" />
      <Image src={Bandeiras2} alt="" className="absolute bottom-5 z-10" />

      <div className="z-10 mt-32 flex w-full max-w-6xl flex-col items-center gap-20 pb-40 pt-24">
        <Link
          href="/manifestacoes-culturais"
          className="flex items-center self-start font-bold uppercase text-neutral-200"
        >
          <Image src={Arrow} alt="" className=" mr-5 w-5 rotate-90" />
          Voltar para manifestações culturais
        </Link>
        <div className="relative grid w-full max-w-6xl grid-cols-2 gap-x-10 gap-y-20 [grid-template-areas:_'title_title'_'text_images'_'details_.'_'refs_.']">
          <Image
            src={Bandeiras1}
            alt="Bandeiras"
            className="absolute -left-20 top-4 z-0"
          />
          <h1 className="font-paletteMosaic text-6xl uppercase leading-none text-[#e7c102] [grid-area:title] [word-spacing:-20px]">
            Nago
          </h1>
          <div className="flex w-full flex-col gap-5 text-justify [grid-area:text]">
            <p>
              A prática ritual ‘Nagô’, em Sergipe, é travestida de
              particularidades e se distancia da perspectiva do Candomblé Ketu.
              Por aqui, os Nagôs são comunidades que preservam práticas
              afro-brasileiras que se revelam através de rituais festivos,
              celebrações públicas, manifestações culturais e, principalmente,
              um repertório sobre a experiência negra antes e pós Abolição. Os
              Nagôs também reivindicam que suas práticas, ritos e costumes sejam
              mantidos originalmente, ou seja, práticas que se aproximam das
              práticas africanas ou das práticas trazidas pelos africanos,
              embora não se tenha precisão de qual origem no continente africano
              seriam os descendentes dos nagôs sergipanos. Atualmente, as
              principais comunidades Nagôs em Sergipe se encontram na região
              historicamente chamada de Vale do Cotinguiba, nos municípios de
              Laranjeiras, Carmópolis e Nossa Senhora do Socorro.
            </p>
            <p>
              Em Laranjeiras e Nossa Senhora do Socorro, se organizam em
              terreiros que preservam um calendário litúrgico que acontece
              durante todo o ano. Já em Carmópolis, os Nagôs concentram suas
              atividades no festejo do Samba de Aboio, que é também a festa de
              Santa Bárbara, uma referência que tem bastante importância para os
              Nagôs, inclusive, nomeando seus espaços, seus terreiros, a exemplo
              dos terreiros de Santa Bárbara, nome, que, por exemplo, em
              Laranjeiras e Carmópolis as comunidades chamam seus espaços de
              ritos.
            </p>
            <p>
              Os Nagôs de Sergipe também se distinguem nas formas litúrgicas: as
              indumentárias, os processos iniciáticos, os instrumentos — e as
              formas como são tocados —, os adereços, as rezas e os cantos são
              especíﬁcos de cada casa, inclusive, sendo diferentes entre si: os
              ritos dos Nagôs de Laranjeiras não são idênticos aos dos Nagôs de
              Nossa Senhora do Socorro nem dos Nagôs de Carmópolis. Apesar de
              todas essas comunidades se identiﬁcarem como Nagôs, eles
              preservam, se identiﬁcam e elaboram sobre suas práticas a partir
              das experiências particulares de suas comunidades.
            </p>
            <Image
              src={Piramides}
              alt=""
              className="mt-5 h-6 w-fit self-center"
            />
          </div>
          <div className="flex w-full">
            <div className="h-[600px] w-full rounded-lg bg-neutral-400 [grid-area:images]" />
          </div>
          <div className="flex h-fit flex-col gap-5 border-l-2 border-[#efa300] pl-3 [grid-area:details]">
            <div>
              <h3 className="font-bold">Localizam-se em:</h3>
              <span>Laranjeiras, Carmópolis e Nossa Senhora do Socorro</span>
            </div>
            <div>
              <h3 className="font-bold">Festas Principais:</h3>
              <span>Festa do Inhame; Samba de Aboio; Festa de Iansã</span>
            </div>
            <div>
              <h3 className="font-bold">Sedes:</h3>
              <span>
                Terreiro de Santa Barbara Virgem/Laranjeiras; Centro Santo
                Antonio/ Nossa Senhora do Socorro; Terreiro de Santa Barbara/
                Carmópolis.
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm [grid-area:refs]">
            <h4 className="font-bold">Referências:</h4>
            <p>
              ASSIS, Yérsia Souza de. Vale do Cotinguiba: Um território que se
              tornou uma ideia. (no prelo)
            </p>
            <p>
              DANTAS, Beatriz Góis. Vovó Nagô e Papai Branco: usos e abusos da
              África no Brasil. Graal: Rio de Janeiro, 1988.
            </p>
            <p>
              TORRES, Díjna Andrade. Mulher nagô: liderança feminina e as
              relações de gênero e parentesco no Terreiro Santa Bárbara Virgem,
              em Laranjeiras. Dissertação de Mestrado em Sociologia. São
              Cristóvão: Núcleo de Pós-Graduação e Pesquisa em Ciências Sociais,
              2012.
            </p>
            <p>
              TORRES, Díjna Andrade. Mulher Nagô: liderança feminina e suas
              relações de poder e parentesco no Terreiro Santa Bárbara Virgem,
              em Laranjeiras. II Seminário de Estudos Culturais, Identidades e
              Relações Interétnicas. São Cristóvão: UFS, 2011. Disponível em:
              http://www.gerts.com.br/se-
              ciri/anais_II_SECIRI/gt_04/gt04_02.pdf.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
