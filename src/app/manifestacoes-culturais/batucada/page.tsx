import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Batucada',
  text: [
    'A Batucada é uma manifestação cultural encontrada em Estância, sul sergipano. Inserida nas manifestações e celebrações do mês de Junho, utilizam-se instrumentos musicais como tambor, reco-reco, ganzá, triângulo, ao ritmo das pisadas dos tamancos no chão, sambam muitas vezes de forma espontânea, em cortejo ou emparelhados. Os batuques que incomodavam os opositores do Antônio Dias Coelho e Mello, o Barão de Estância, foram noticiados no jornal O Democrata em 1882. Além dos batuques, as “girandolas” e as “grandes bombas” nos dão pistas que a tradição com a pólvora, em especial, com as bombas de artifício possuem no município de Estância no mínimo 140 anos.',
    'A batucada tem como base o ritmo do “pisa-pólvora”, através do trabalho dos fogueteiros que utilizam o pilão na fabricação da pólvora para os fogos de artifício. De acordo com Seu Enoque dos Santos a batucada do Quilombo Porto D’Areia surgiu através do Samba de Côco, através dos tambores feitos com o tronco da gaiteira, árvore nativa do mangue. Utilizando roupas típicas, as mulheres saem de vestidos estampados, floridos, calçadas geralmente em tamancos, enquanto os homens vestidos com estampas similares, utilizam geralmente um laço no pescoço e chapéus. No dia 22 de Dezembro é comemorado em Estância o Dia das Batucadas, data que marca o início da produção dos fogos de artifício com a colheita do bambu para a confecção do famoso buscapé e da espada, além do barco de fogo.',
  ],
  details: {
    locais: 'Estância',
    festas: 'Festas de São João, 22 de Dezembro (Dia das Batucadas).',
    sedes: '',
  },
  refs: [
    'BRITO, Claudia Toscano de. Indumentária Folclórica. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades; Fotógrafo: Jairo ]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',
    'Jornal O Democrata. Sergipe, 1882. (22 de Abril de 1882, p. 04). Fonte:http://memoria.bn.br/DocReader/DocReader.aspx?bib=226530&pesq=batuque&hf=memoria.bn.br&pagfis=97 (acesso em 20/09/2023).',
    'https://camaradeestancia.se.gov.br/2021/12/23/estancia-festeja-no-dia-22-de-dezembro-o-dia-das-batucadas/ (acesso em 20/09/2023).',
    'https://www.youtube.com/watch?v=caO7a-2rOS4 (acesso em 16/09/2023)',
  ],
  imagesUrl: [
    '/images/ilustracoes/batucada.webp',
    '/images/fotos/batucada/batucada-1.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Batucada() {
  return <Template content={content} />
}
