import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Batalhão de Bacamarteiros',
  text: [
    'Com uma nomeação que remete ao Bacamarte, arma de fogo em desuso nos dias atuais, o grupo de Bacamarteiros, ou também conhecido como Batalhão de Bacamarteiros é uma das manifestações culturais presentes no território sergipano. Com uma agenda festiva amplamente vinculada ao ciclo junino, o Batalhão de Bacamarteiros, ou simplesmente Batalhão sai pelas ruas de diversos municípios sergipanos louvando Sr. São João e Sr. São Pedro, respectivamente nas datas de 24 de junho e 29 de junho. O grupo que é formado por mulheres, homens e crianças saí às ruas acompanhado de instrumentos como ganzás, pandeiros, onças e caixas tocadas em ritmos marcantes e envolventes. Entoando cheios como: “Aqui não tem areia, areia só tem no mar ... Chora neném, seu amor quer lhe deixar... ô deixa chorar”, as/os participantes do Batalhão passam em muitas casas, onde famílias oferecem bebida e comida, como forma de agradecer a visita do grupo, mas como também um modo festivo de pagar promessas feitas ao Sr. São João e ao Sr. São Pedro.',
    'Variações do grupo de Batalhão de Bacamarteiros podem ser encontradas nos municípios de Carmópolis, General Maynard e Santo Amaro, todos pertencentes à região do Vale do Cotinguiba. Em razão dessas manifestações estarem fortemente originadas nesses lugares é possível entender como elas também fazem parte do circuito cultural afro-sergipano. Ademais, historicamente, as pessoas que compunham os agrupamentos dos Bacamarteiros eram homens negros. O Batalhão saí com roupas padronizadas, podemos dizer, com fardamento, que, em geral, são feitos em tecidos de cores marcantes, festivas. É de ressaltar que qualquer pessoa que deseje acompanhar o cortejo promovido pelo grupo está autorizada, pois é uma festa que ocupa o espaço público dos seus municípios. Vale pontuar o empenho criativo desses grupos que ascendem de agrupamento paramilitar para manifestação cultural celebrativa e festiva em períodos juninos no Nordeste do Brasil. ',
  ],
  details: {
    locais: 'Carmópolis; General Maynard; Santo Amaro',
    festas: 'Ciclo Junino (São João e São Pedro)',
    sedes: '',
  },
  refs: [],
  imagesUrl: [
    '/images/ilustracoes/bacamarteiro.webp',
    '/images/fotos/batalhao/batalhao-1.webp',
    '/images/fotos/batalhao/batalhao-2.webp',
    '/images/fotos/batalhao/batalhao-3.webp',
    '/images/fotos/batalhao/batalhao-4.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Batalhão() {
  return <Template content={content} />
}
