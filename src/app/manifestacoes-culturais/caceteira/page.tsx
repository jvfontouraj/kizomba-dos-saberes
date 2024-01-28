import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Caceteira do Mestre Rindú',
  text: [
    'A caceteira é uma manifestação de cultura popular que é tradicional no período junino do município de São Cristóvão, em Sergipe. Entoando cantigas do cancioneiro popular sergipano, homens e mulheres compõem o cortejo animado por zabumbas, ganzá e cuíca. O nome caceteira lembra o processo artesanal de sova do couro dos instrumentos de percussão e o próprio batuque “à base de cacetes”. As caceteiras mais antigas de São Cristóvão datam da primeira metade do século XX. A Caceteira da Dona Biu e a Caceteira de João de Cota, ambas desaparecidas com o falecimento dos seus mentores, ainda resistem na memória coletiva da cidade.',
    'Atualmente, a única manifestação desse gênero em São Cristóvão é a Caceteira do Rindú, apelido do seu coordenador, José Gonçalo dos Santos. A Caceteira de Rindu é formada por aproximadamente 30 integrantes com idades que variam de 6 a 70 anos, eles ensaiam durante todo o ano para fazer bonito na véspera de São João. De acordo com a tradição, todos os anos, no dia 31 de maio, o grupo percorre as ruas do centro histórico numa batucada que festeja a chegada do mês junino. Quando os sinos das igrejas batem à meia-noite, há um canto louvado com emoção: “o sino do Carmo abalou, abalou deixa abalar”, diz o refrão.',
  ],
  details: {
    locais: 'São Cristóvão ',
    festas: 'Período Junino',
    sedes: '',
  },
  refs: [
    'Entrevista do Mestre Rindú para o Guia Divirta-SE, da Secretaria de Estado da Cultura, à jornalista Díjna Torres, em 2010.',
    "FONTES, Aglaé d'Ávila. Mestre Rindú - José Gonçalo Santos. São Cristóvão: PMSC/FUNPATRI, 2012.",
    'FRAGATA, Thiago. Mestres do Folk: Mestre Rindú, 10 de agosto de 2007, http://thiagofragata.blogspot.com.br/2007/08/mestres-do-folk-mestre-rind.html',
  ],
  imagesUrl: [
    '/images/ilustracoes/caceteira.webp',
    '/images/fotos/caceteira/caceteira-1.webp',
    '/images/fotos/caceteira/caceteira-2.webp',
    '/images/fotos/caceteira/caceteira-3.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Caceteira() {
  return <Template content={content} />
}
