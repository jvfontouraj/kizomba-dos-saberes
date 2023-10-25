import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Samba de Coco',
  text: [
    'Dentre as manifestações da cultura popular sergipana, o Samba de Coco se constitui a partir de sua origem africana em território sergipano. A apresentação está diretamente relacionada à atividade laboral da colheita do coco, ligada ao movimento migratório no período pós abolição, de negros que eram escravizados e que passam a residir em diversas localidades de Sergipe, onde realizavam a colheita do coco e entoavam cantigas durante esse processo. A prática era tida como momento de descontração entre os trabalhadores da lavoura. Logo, a relação entre esse movimento dos negros, lavouras, quilombos e o samba de coco é indissociável, pois é no seio da socialização desses indivíduos que o samba de coco irá se formar.Para a realização do samba, os instrumentos utilizados são: triângulo, tambores, zabumba, sanfona, além de sons reproduzidos pelo próprio corpo, como as palmas e os sapateados.',
    'Atualmente em Sergipe, o Samba de Coco está presente em municípios como Barra dos Coqueiros, Aracaju, Japoatã, Nossa Senhora do Socorro, São Cristóvão, Riachuelo, Santo Amaro das Brotas e General Maynard e Laranjeiras. Alguns exemplos de grupos conhecidos no estado são: Samba de Coco de Seu Diô, no bairro Mosqueiro, em Aracaju, em que todos podem participar e realizar as funções de brincantes e tocadores, sem haver distinção, contando também com a participação de crianças. Além de festejarem dançando, é tomada também a famosa meladinha, bebida feita de cravo, canela em pau, erva doce, casca da lima, mel, água, açúcar e cachaça; Samba de Coco da Barra dos Coqueiros, que tinha como mestra Dona Iolanda, líder do grupo por mais de 30 anos, falecida em março de 2021 por complicações da COVID 19.',
  ],
  details: {
    locais:
      'Riachuelo, General Maynard, Santo Amaro das Brotas, Japoatã, São Cristóvão, Barra dos Coqueiros, Nossa Senhora do Socorro e Aracaju.',
    festas: 'Ciclo de festejos juninos. ',
    sedes: '',
  },
  refs: [
    'tv.brasil.ebc.com.br – Mulheres de Sergipe mantém tradição do Samba de Coco',
    'al.se.leg.br – Nossos Mestres',
    'Revista Barra: Samba de Coco / Mestre Iolanda',
    'Samba de Coco de Seu Diô – Fundação de Cultura e Arte Aperipê / Aperipê TV',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function SambadeCoco() {
  return <Template content={content} />
}
