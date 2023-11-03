import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Parafusos',
  text: [
    'O centenário Grupo cultural Parafusos foi criado no município de Lagarto, Sergipe em 07 de setembro de 1897. É o único grupo do gênero no Estado e no país. A história do grupo remete ao período da escravidão, onde os negros, em suas saídas noturnas, utilizavam como disfarce as anáguas brancas das sinhás, que ficavam nos quaradouros para secar. Nas noites de lua, os escravizados se vestiam com várias anáguas até o pescoço e pintavam seus rostos de Tabatinga (composto argiloso branco), rodopiando no meio dos canaviais, o que fazia com que, inicialmente, quem os visse, achasse que se tratavam de assombrações ou “visagens”.',
    'Encerrada a escravatura, a lenda fantasmagórica acabou, permanecendo a tradição, e os homens então ganharam as ruas, rodopiando e dançando ao som de sanfona, triângulo e zabumba. Constituído apenas por homens, o figurino do grupo é formado por um cone bordado de rendas brancas na cabeça, rostos pintados de branco, 5 saias brancas com bordas de renda, calça e sandálias brancas. Quando o então vigário de Lagarto, Padre José Saraiva Salomão, viu os brincantes, disse que eles pareciam parafusos, a rodopiar, torcer e distorcer. Depois disso, o grupo foi denominado Parafusos e passou a compor as tradições culturais do município de Lagarto, sendo o grupo recentemente declarado como Patrimônio Histórico, Cultural e Imaterial do estado de Sergipe por reconhecimento da  Assembleia Legislativa do Estado de Sergipe (2020). O grupo também foi reverenciado em 2018, tendo uma estátua representativa de um brincante do Parafuso compondo o conjunto de manifestações culturais homenageadas no Largo da Gente Sergipana.',
  ],
  details: {
    locais: 'Lagarto',
    festas: 'Festas juninas e outros eventos culturais do Estado',
    sedes: 'Associação dos Grupos Folclórico de Lagarto (ASFLAG)',
  },
  refs: [
    'Giro Sergipe - Conheça os "Parafusos", grupo folclórico de Lagarto, único no Brasil - 10/10/2020 < https://globoplay.globo.com/v/8940150/ > ',
    'Grupo Parafusos da cidade de Lagarto-SE < https://www.youtube.com/watch?v=EXoeEmG0-Z4 > ',
    'Parafusos < https://www.encontroteca.com.br/grupo/parafusos > ',
    'OLIVEIRA, Eliana Dias Ferreira. Ponteiros da memória: educação patrimonial do ensino de história em Sergipe. 2020. 492 f. Dissertação (Mestrado Profissional em Ensino de História) – Universidade Federal de Sergipe, São Cristóvão, SE, 2020.',
  ],
  imagesUrl: [''],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Parafusos() {
  return <Template content={content} />
}
