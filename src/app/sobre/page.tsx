'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ContactForm } from '@/app/components/ContactForm'
import BandeirasHero from '@/assets/bandeirashero.png'
import FundoSobre from '@/assets/fundo-sobre.png'
import Logo from '@/assets/logo-sobre.png'
import Piramides from '@/assets/piramides.png'
import MenuBar from '@/assets/menubar.svg'
import Parafuso from '@/assets/parafuso.png'
import Guerreiro from '@/assets/ilustracoes/sem-fundo/guerreiro.png'
import Reisado from '@/assets/ilustracoes/sem-fundo/reisado.png'
import SambaDeAboio from '@/assets/ilustracoes/sem-fundo/samba-de-aboio.png'
import Bandeiras1 from '@/assets/bandeiras1.png'
import Bandeiras2 from '@/assets/bandeiras2.png'

export default function Sobre() {
  const [blueHeight, setBlueHeight] = useState(0)

  useEffect(() => {
    setBlueHeight(document.getElementById('blue-section')?.offsetHeight || 0)
  }, [])

  return (
    <main>
      <div id="blue-section" className="h-fit flex flex-col items-center">
        <Image
          src={FundoSobre}
          alt={'imagem de fundo'}
          className="absolute w-screen top-0 -z-10"
          style={{ height: blueHeight }}
        />
        <Image src={BandeirasHero} alt="" className="absolute top-10 z-10" />

        <div className="relative h-screen z-10 max-w-7xl w-full px-20 flex pt-60">
          <div className="w-1/2 mt-10">
            <Image
              src={Logo}
              alt="Logo do Kizomba dos Saberes"
              className="w-2/3 aspect-square mx-auto"
            />
          </div>
          <div className="w-1/2 text-neutral-50 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex items-end gap-5">
                <Image src={Piramides} alt="" className="h-min w-28 mb-2" />
                <h1 className="font-londrinaSolid text-6xl uppercase leading-none text-[#e7c102]">
                  Quem Somos
                </h1>
              </div>
              <article className="flex flex-col gap-3">
                <p>
                  O projeto{' '}
                  <span className="font-semibold">Kizomba dos Saberes</span> é
                  desenvolvido pelo Grupo de Estudos e Pesquisa de História da
                  África e Diáspora Africana{' '}
                  <span className="font-semibold">ANANSE.GEPHADA</span> , ligado
                  ao departamento de História da Universidade Federal de
                  Sergipe.
                </p>
                <p>
                  O projeto foi ﬁnanciado pela Fapitec, através do edital
                  n.09/2021, para o desenvolvimento de tecnologias digitais para
                  o ensino, em parceria com a Secretaria de Educação do estado
                  de Sergipe.
                </p>
                <p>
                  Ao longo de dois anos, realizamos atividades de ensino,
                  pesquisa e extensão para a elaboração do conteúdo do site.
                </p>
              </article>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-londrinaSolid text-3xl uppercase leading-none text-[#e7c102]">
                Foram Realizados
              </h2>
              <ul className="flex flex-col gap-3 font-semibold">
                <li>
                  · Cinco eventos formativos com a presença de mestres e mestras
                  da cultura negra
                </li>
                <li>· Mini-curso de Kikongo</li>
                <li>· Exibição de ﬁlmes com debates com os realizadores</li>
                <li>· Palestra com o doutor honoris causa Severo D’Acelino</li>
                <li>· Curso de desenvolvimento de materiais didáticos</li>
              </ul>
            </div>
          </div>
          <Image
            src={Piramides}
            alt=""
            className="h-min w-28 absolute bottom-20 left-1/2 -translate-x-1/2"
          />
        </div>
        <div className="relative h-fit mt-20 pb-40 z-10 max-w-7xl w-full px-20 flex">
          <div className="relative w-full h-fit flex justify-between bg-[#28a346] text-neutral-50 px-20 py-10">
            <Image
              src={Guerreiro}
              alt="ilustração guerreiro"
              className="absolute w-[35rem] h-auto right-0 top-1/2 translate-x-1/2 "
            />
            <Image
              src={Reisado}
              alt="ilustração reisado"
              className="absolute w-80 h-auto bottom-0 left-1/2 -translate-x-1/2"
            />
            <Image
              src={SambaDeAboio}
              alt="ilustração samba de aboio"
              className="absolute top-0 left-0 -translate-y-2/3 w-80 h-auto"
            />
            <Image
              src={Bandeiras1}
              alt="bandeiras1"
              className="absolute top-0 left-0 -translate-x-1/2"
            />
            <Image
              src={Bandeiras2}
              alt="bandeiras2"
              className="absolute bottom-0 left-0 scale-105 translate-y-2"
            />
            <div className="w-1/2 flex flex-col gap-3">
              <h2 className="font-londrinaSolid text-4xl uppercase leading-none text-[#e7c102] mb-2">
                Equipe
              </h2>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">Coordenadora</h3>
                <span>Prof. Dra. Mariana Bracks Fonseca</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">VICE-COORDENADOR</h3>
                <span>Prof. Dr. Carlos Liberato</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  BOLSISTAS DE PÓS- DOUTORADO
                </h3>
                <span>Díjna Andrade Torres</span>
                <span>Yérsia Souza de Assis</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  BOLSISTAS DE MESTRADO
                </h3>
                <span>José Edwyn Gomes</span>
                <span>Daniela Macedo Lima</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  BOLSISTAS DE INICIAÇÃO CIENTÍFICA
                </h3>
                <span>Maria Isabel de Barros Santos</span>
                <span>Mirosmar Bezerra</span>
                <span>Maiara Quaranta Lobão Linhares</span>
                <span>Anacelia de Souza Luduvice</span>
                <span>Allef</span>
                <span>Beatriz Agnes Costa Bosco</span>
                <span>Milene</span>
                <span>Kardja Vieira Bittencourt</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  ESTUDANTES COLABORADORES VOLUNTÁRIOS
                </h3>
                <span>Laura Giovana Menezes Nascimento</span>
                <span>Dacia Rita Ferreira Bispo</span>
                <span>Vanessa Andrade</span>
                <span>Vanessa Anunciação</span>
                <span>Nathally Daianne dos Santos Silva</span>
                <span>Nicolle Oliveira Barbosa</span>
                <span>João Aysllan Dionizio Santos</span>
                <span>Thayemille Nathaly Santos</span>
                <span>Lucas Gabriel Gama</span>
                <span>Maria Eduarda Loeser</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  MESTRANDO COLABORADOR VOLUNTÁRIO
                </h3>
                <span>Hiato Feitosa</span>
                <span>Maria da Conceição Bezerra</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  DOUTORANDO COLABORADOR VOLUNTÁRIO
                </h3>
                <span>Mariana Galvão Nascimento</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  PROFESSORAS COLABORADORAS DA REDE DE ENSINO DE SERGIPE
                </h3>
                <span>Alessandra Santos da Graça</span>
                <span>Andréia Teixeira dos Santos</span>
                <span>Adalcy Costa dos Santos</span>
                <span>Eliane Dantas</span>
                <span>Jonatha Vasconcelos Santos</span>
                <span>Morgana Catherine Leite Santos</span>
                <span>Wirna Maria</span>
                <span>Messalas Santos</span>
                <span>João Muzzart</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  Projeto Gráfico Site
                </h3>
                <span>Folha Verde Design</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">
                  Desenvolvimento Site
                </h3>
                <span>João Vitor Fontoura Jardim</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#e7c102] font-bold">Ilustrações</h3>
                <span>Edwyn Gomes</span>
              </div>
              <div className="flex flex-col font-bold mt-5 text-sm">
                <span>Todos os direitos reservados a Kizomba dos Saberes.</span>
                <span>
                  Nenhuma imagem pode ser reproduzida sem autorização prévia.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-fit relative bg-[#a79280] ">
        <MenuBar className="fill-[#a79280] w-screen absolute -top-1" />
        <div className="flex gap-20 mx-auto py-40 max-w-7xl w-full px-20">
          <ContactForm />
          <div className="w-1/2 flex items-center justify-center">
            <Image
              src={Parafuso}
              alt="Ilustração Parafusos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
