import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Cacumbi',
  text: [
    'O Cacumbi é um folguedo popular que engrandece de maneira centenária através de suas cores. O tom amarelo representando o ouro dos dançantes e azul do mestre que o diferencia do contramestre, e que evidencia sua hierarquia a qual, atualmente, dá-se entre o mestre, o contramestre e os dançantes, nessa ordem, fazendo a festa nas ruas acontecer. A origem do folguedo é incerta e modificou-se com o tempo, apresentando-se através das particularidades. De acordo com informações, o Cacumbi surgiu na época da escravidão, dançado e perpetuado ainda nos canaviais pelos negros escravizados em cada localidade e representava, desde então, a dualidade entre negros e indígenas. Sendo assim, o Cacumbi consolida-se como um grupo de origem centenária e enfincado nas origens africanas de louvor a São Benedito e Nossa Senhora do Rosário, em comum também com as danças que deram ao Cacumbi a origem do bailar, evidenciando o puro sincretismo no território brasileiro. ',
    'Os instrumentos utilizados no cortejo são a onça, ganzá, pandeiro, reco-reco a caixa e claro, o apito do mestre que ecoa ao passar pela cidade que o mantém. O folguedo constitui-se de aproximadamente 34 brincantes e dividem-se entre o grupo adulto e mirim, que são os filhos, sobrinhos e netos dos brincantes do grupo adulto em sua maioria com a intencionalidade de perpetuar a manifestação, as idades variam entre 10 e 86 anos e todos são do sexo masculino. Em Sergipe, a manifestação ocorre em Japaratuba, Lagarto, Riachuelo e Laranjeiras, e seus mestres mais populares são: Zezinho, João do Pita, José Santana dos Santos, Mestre testinha,  Zé Adilson, e Deca, que popularizou o cacumbi de Laranjeiras juntamente com seu filho Antônio Carlos (neguinho), este último, ao assumir a coordenação do grupo, instituiu o dia municipal do Cacumbi, dia 16 de julho, em Laranjeiras.  ',
  ],
  details: {
    locais: 'Laranjeiras, Japaratuba, Riachuelo e Lagarto.',
    festas:
      'Procissão do Bom Jesus dos Navegantes, Procissão do padroeiro de Laranjeiras e de Japaratuba, Dia de Reis e  Semana do folclore',
    sedes: '',
  },
  refs: [
    'FONTES, Irineu. Cacumbi Mestre Deca: A relação grupo cultural e gestão pública. p.52 il. 2014. Monografia (Curso de Formação de Gestores Culturais dos Estados do Nordeste) – Instituto de Humanidades, Artes e Ciências Professor Milton Santos, Universidade Federal da Bahia, Salvador, 2014. http://anais.educonse.com.br/2016/lugar_e_lugaridade_do_folguedo_cacumbi_do_mestre_deca_laraneirass.pdf ',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Cacumbi() {
  return <Template content={content} />
}
