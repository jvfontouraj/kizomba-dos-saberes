import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Taieiras',
  text: [
    'Em Laranjeiras, interior de Sergipe, a Taieira é uma manifestação cultural e religiosa mantida ao longo das gerações pela Irmandade Nagô Santa Bárbara Virgem que através de Barbara Cristina Santos, atual liderança, responsável pelo grupo e pela irmandade, conduz com maestria o louvor a São Benedito e a Nossa Senhora do Rosário.',
    'Em Laranjeiras foi criada a partir de uma promessa feita pela africana Birunkê, batizada no Brasil como Isméria. Essa africana foi a avó de Umbelina Araújo, conhecida como Mãe Bilina, líder nagô que se destacou no período em que comandou as Taieiras e a Irmandade Nagô. Formada majoritariamente por meninas jovens e virgens, a Taieira está relacionada ao período natalino, sobretudo o encerramento desse período no dia de Santos Reis Magos (06 de Janeiro).',
    'No domingo mais próximo do dia de Reis, as Taieiras, a Chegança e o Cacumbi percorrem tradicionalmente em “louvação” e pagamento de promessas pelas ruas de Laranjeiras, seguindo em cortejo até o Rio Cotinguiba onde prestam homenagens aos Bom Jesus dos Navegantes no porto da cidade. Das margens do rio, seguem até a Igreja de Nossa Senhora do Rosário e São Benedito.',
    'Na Igreja cantam e dançam, até o momento em que a Rainha das Taieiras é finalmente coroada pelas mãos do padre que tradicionalmente retira a coroa da santa e coloca sobre a cabeça da rainha. Além das jovens brincantes taieiras, existem outros personagens que compõem o folguedo, tais como as Guias que vão no front, orientando o grupo e coordenando as mais novas; as Lacraias que seguram a sombrinha para as rainhas; os Capacetes são os guardas; o Ministro que acompanha o Rei; o Patrão aquele que toca o tambor; além do Rei e as Rainhas Perpétuas. (ALENCAR, 2003, p. 05).',
    'De origem portuguesa, a Taieira no Brasil incorporou diversos elementos de origem africana, africanizou-se. Podemos identificar africanidades que vão desde o vestuário, símbolos, cânticos, ritmos e cores. A cor vermelha é destaque no cortejo, simboliza a origem do grupo e a patrona da Irmandade Nagô Santa Bárbara Virgem, a divindade dos ventos e dos raios, a orixá nagô Oyá/Iansã.',
    'As Taieiras de Laranjeiras empunham uma espécie de chocalho, chamado de Kerékexé, nome de origem yorubá - kéré (pequeno) + ẹ̀ṣẹ́ (punho), além de um bastão com fitas amarelas e vermelhas. Além das Taieiras de Laranjeiras, atualmente existem outros dois grupos em Sergipe, a Taieira de Dona Néti e a Taieira de Seu Gérson, ambos de Lagarto, agreste sergipano. Mas já houve ocorrência em municípios como Japaratuba e São Cristóvão.',
  ],
  details: {
    locais: 'Laranjeiras, Lagarto, Japaratuba e São Cristóvão.',
    festas: '',
    sedes: '',
  },
  refs: [
    'ALENCAR, Aglaé D’Ávila Fontes. Danças e Folguedos; iniciação ao Folclore Sergipano Desenhos de Cláudia Endlein, Fotos de Marcel Nauer. Aracaju. 2003. 320p.',
    'BENISTE, José. Dicionário yorubá-português. - 2ª ed. Rio de Janeiro: Bertrand Brasil, 2014. 820p.',
    'DANTAS, Beatriz Góis, Mensageiros do lúdico. Aracaju: Criação, 2013.',
    'INDUMENTÁRIA FOLCLÓRICA. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades, Fotógrafo: Jairo]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',
    'SEPLAN. Sergipe, Cultura e Diversidade. Aracaju, 2010.',
  ],
  imagesUrl: [
    '/images/ilustracoes/taieiras.webp',
    '/images/fotos/taieiras/taieiras-1.webp',
    '/images/fotos/taieiras/taieiras-2.webp',
    '/images/fotos/taieiras/taieiras-3.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Taieiras() {
  return <Template content={content} />
}
