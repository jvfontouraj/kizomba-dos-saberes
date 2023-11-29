import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Banda de Pífanos',
  text: [
    'Popularmente chamado de “Pífe” e igualmente conhecido como zabumba, é uma manifestação cultural caracterizada pelo conjunto de instrumentos geralmente rústicos e simples. O pífano é um tipo de flauta geralmente feita de taquara, uma espécie de bambu nativo da América do Sul - o repertório musical abrange canções populares e composições autorais.',
    'Os instrumentos que compõem a banda são: zabumba, caixa, ganzá, triângulo e os pífanos. Embora hoje seja reconhecida apenas como “Banda de Pífanos”, no passado essa manifestação era reconhecida como zabumba. Na língua kikongo nzuba (pronuncia un.zu.ba) significa “batida”, nza significa mundo ou terra e mbumba possui inúmeros significados, um deles é segredo, ou seja, “segredo da terra”, provável origem da palavra zabumba.',
    'Instrumento percussivo caracterizado pelo som grave que marca o ritmo, presente em outras manifestações negras de Sergipe. Os grupos de Pífanos se apresentam geralmente nas novenas para os santos católicos e nas festas de São João, como também apresentam-se em encontros culturais e até mesmo nos cortejos funerários no interior do Estado. Ocorre nos municípios de Itaporanga, Moita Bonita, Lagarto, Ribeirópolis, Pacatuba, Aquidabã, Graccho Cardoso, Carira, Capela, Gararu, Macambira, Tobias Barreto entre outros. Em Boquim quem comanda a Banda de Pífano Santo Antônio é Antônio Modesto, conhecido como Mestre Tonho Preto, nascido em 1940 em Riachão do Dantas.',
  ],
  details: {
    locais:
      'Itaporanga, Moita Bonita, Lagarto, Ribeirópolis, Pacatuba, Aquidabã, Graccho Cardoso, Carira, Capela, Gararu, Macambira, Tobias Barreto entre outros.',
    festas:
      'Festas de São João, novenas para os santos católicos e cortejos funerários.',
    sedes: '',
  },
  refs: [
    'BRITO, Claudia Toscano de. Indumentária Folclórica. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades; Fotógrafo: Jairo ]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',
    'COBE, Francisco Narciso. Novo dicionário Português Kikongo. Luanda: Editora Mayamba, 2010.',
    'Documentário Mestre Tonho Preto: Missa do Vaqueiro. (acesso em: 21/07/2023). https://www.youtube.com/watch?v=ix_zY7aTymI.',
    'Documentário Banda de Pífano Santo Antônio do Mestre Tonho Preto. (acesso em: 21/07/2023). https://www.youtube.com/watch?v=DfgVH2dSsdw',
  ],
  imagesUrl: [
    '/images/ilustracoes/zabumba.webp',
    '/images/ilustracoes/bacamarteiro.webp',
    '/images/ilustracoes/batucada.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Chegança() {
  return <Template content={content} />
}
