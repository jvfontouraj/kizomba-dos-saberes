import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Nagôs em Sergipe',
  text: [
    'A prática ritual ‘Nagô’, em Sergipe, é travestida de particularidades e se distancia da perspectiva do Candomblé Ketu. Por aqui, os Nagôs são comunidades que preservam práticas afro-brasileiras que se revelam através de rituais festivos, celebrações públicas, manifestações culturais e, principalmente, um repertório sobre a experiência negra antes e pós Abolição. Os Nagôs também reivindicam que suas práticas, ritos e costumes sejam mantidos originalmente, ou seja, práticas que se aproximam das práticas africanas ou das práticas trazidas pelos africanos, embora não se tenha precisão de qual origem no continente africano seriam os descendentes dos nagôs sergipanos. Atualmente, as principais comunidades Nagôs em Sergipe se encontram na região historicamente chamada de Vale do Cotinguiba, nos municípios de Laranjeiras, Carmópolis e Nossa Senhora do Socorro.',
    'Em Laranjeiras e Nossa Senhora do Socorro, se organizam em terreiros que preservam um calendário litúrgico que acontece durante todo o ano. Já em Carmópolis, os Nagôs concentram suas atividades no festejo do Samba de Aboio, que é também a festa de Santa Bárbara, uma referência que tem bastante importância para os Nagôs, inclusive, nomeando seus espaços, seus terreiros, a exemplo dos terreiros de Santa Bárbara, nome, que, por exemplo, em Laranjeiras e Carmópolis as comunidades chamam seus espaços de ritos.',
    'Os Nagôs de Sergipe também se distinguem nas formas litúrgicas: as indumentárias, os processos iniciáticos, os instrumentos — e as formas como são tocados —, os adereços, as rezas e os cantos são especíﬁcos de cada casa, inclusive, sendo diferentes entre si: os ritos dos Nagôs de Laranjeiras não são idênticos aos dos Nagôs de Nossa Senhora do Socorro nem dos Nagôs de Carmópolis. Apesar de todas essas comunidades se identiﬁcarem como Nagôs, eles preservam, se identiﬁcam e elaboram sobre suas práticas a partir das experiências particulares de suas comunidades.',
  ],
  details: {
    locais: 'Laranjeiras, Carmópolis e Nossa Senhora do Socorro',
    festas: 'Festa do Inhame; Samba de Aboio; Festa de Iansã',
    sedes:
      'Terreiro de Santa Barbara Virgem/Laranjeiras; Centro Santo Antonio/ Nossa Senhora do Socorro; Terreiro de Santa Barbara/ Carmópolis.',
  },
  refs: [
    'ASSIS, Yérsia Souza de. Vale do Cotinguiba: Um território que se tornou uma ideia.',
    'DANTAS, Beatriz Góis. Vovó Nagô e Papai Branco: usos e abusos da África no Brasil. Graal: Rio de Janeiro, 1988.',
    'TORRES, Díjna Andrade. Mulher nagô: liderança feminina e as relações de gênero e parentesco no Terreiro Santa Bárbara Virgem, em Laranjeiras. Dissertação de Mestrado em Sociologia. São Cristóvão: Núcleo de Pós-Graduação e Pesquisa em Ciências Sociais, 2012.',
    'TORRES, Díjna Andrade. Mulher Nagô: liderança feminina e suas relações de poder e parentesco no Terreiro Santa Bárbara Virgem, em Laranjeiras. II Seminário de Estudos Culturais, Identidades e Relações Interétnicas. São Cristóvão: UFS, 2011. Disponível em: http://www.gerts.com.br/se-ciri/anais_II_SECIRI/gt_04/gt04_02.pdf.',
  ],
  imagesUrl: [
    '/images/ilustracoes/nago.webp',
    '/images/ilustracoes/maracatu.webp',
    '/images/ilustracoes/guerreiro.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Nago() {
  return <Template content={content} />
}
