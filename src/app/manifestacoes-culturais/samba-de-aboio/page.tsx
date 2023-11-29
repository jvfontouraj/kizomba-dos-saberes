import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Samba de Aboio',
  text: [
    'Fundado por uma africana de nome Thamashalim Eocubanker, o Samba de Aboio/Festa de Santa Bárbara é uma expressão cultural e religiosa presente no território sergipano, e única no Brasil. Segundo a tradição oral dessa expressão e prática religiosa, a neta de Thamashalim, que se chamava Maria Benedita, encontrou em um tanque uma Pedra com formato de boneca, ao levar esse artefato até sua avó Thamashalim, a africana a partir dos seus conhecimentos ancestrais entendeu se tratar de Yansã, e em razão disso, a partir daquele instante era necessário serem iniciados rituais em devoção à Pedra, também conhecida como Corisco. Juntamente ao momento sagrado/espiritual um marco histórico nacional acontece: A Abolição da Escravatura, em 13 de maio de 1888. E, em razão desta data, Thamashalim entende que era fundamental celebrar a liberdade de africanas/os e seus descendentes que migram da condição de “coisa” para “pessoa”. E, em sendo assim, a festividade para Yansã se alarga, ou melhor, incorpora também as festividades alusivas à Liberdade das pessoas negras e seus descendentes. Podemos afirmar, que, em linhas breves, a história do Samba de Aboio/Festa de Santa Bárbara é composta por esses elementos.',
    'O Samba de Aboio/Festa de Santa Bárbara tem como ano fundacional a data de 1888, perfazendo uma vida, enquanto manifestação cultural com mais de 100 anos, acontecendo de modo ininterrupto. Tanto a Festa como a celebração religiosa são mantidas pela família Mota e Assis, descendentes diretos de Thamashalim. Logo, tratando-se, portanto, de uma família negra do pós-abolição. São muitos os membros dessa família que atualmente cuidam e gestam a Festa, juntamente com muitas pessoas da comunidade de Aguada, no município de Carmópolis, território dessa festividade. Carmópolis que pertencente à região do Vale do Cotinguiba. Destaca-se que o Samba de Aboio/Festa de Santa Bárbara acontece apenas uma vez por ano, no final de semana da Páscoa. Onde são feitos os rituais para Yansã, mas também acontece o Samba de Aboio, ou Samba de Bate Coxa: em um grande círculo, as pessoas batem palmas, cantam acompanhadas de pandeiros, ganzás, tambores e onça. No domingo, a festividade do Samba leva uma especificidade: as pessoas em roda precisam estar de branco e com um lenço vermelho, alusivo a Yansã, mas também a Santa Bárbara. Neste sentido, explicamos que a nomeação de Santa Bárbara foi feita como um equivalente religioso entre Yansã e Santa Bárbara, santa católica, que assim como Yansã enfrentou guerras e batalhas.',
  ],
  details: {
    locais: 'Povoado Aguada/Carmópolis',
    festas: 'Realiza-se impreterivelmente no final de semana da Páscoa',
    sedes: 'Família Mota e Assis',
  },
  refs: [
    'ALMEIDA, Luan Vinícius Carvalho de. "Vem ver, gente, esse samba como é": caminhos, olhares e escutas acerca do Samba de Aboio-Sergipe. 2022. 158 f. Dissertação (Mestrado Interdisciplinar em Culturas Populares) - Universidade Federal de Sergipe. São Cristóvão, Sergipe, 2022.',
    'ALMEIDA, Luana Almeida de. (2022). “Oh Zé, O Samba de Aboio é aqui” Um estudo sobre a relação do alimento tradicional, memórias e identidades no Samba de Aboio do Povoado Aguada-Carmópolis/SE: “Oh Zé, O Samba de Aboio é aqui” Um estudo sobre a relação do alimento tradicional, memórias e identidades no Samba de Aboio do Povoado Aguada-Carmópolis/SE. Revista Do Instituto Histórico E Geográfico De Sergipe, 2(51), 283 a 312.',
    'ASSIS, Yérsia Souza de. “O Samba de Aboio é de Santa Barbara”: celebração, fé e resistência cultural numa comunidade negra sergipana: “Samba de Aboio is Santa Barbara”: celebration, faith and cultural resistance in a black community in sergipe. Revista Nordestina de História do Brasil, [S. l.], v. 4, n. 7, p. 1–17, 2022. DOI: 10.52996/rnhb.v4i7.103.',
    'ASSIS, Yérsia Souza de. Crianças ativas, aprendizagem e afro- brasilidade: pensando o aprendizado afro-brasileiro na casa de Santa Bárbara. Revista ABPN, v. 10, p. 530-548, 2018.',
    'ASSIS, Yérsia Souza de. Vale do Cotinguiba: Um território que se tornou uma ideia. (no prelo)',
  ],
  imagesUrl: [
    '/images/ilustracoes/samba-de-aboio.webp',
    '/images/fotos/samba-de-aboio/samba-de-aboio-1.webp',
    '/images/fotos/samba-de-aboio/samba-de-aboio-2.webp',
    '/images/fotos/samba-de-aboio/samba-de-aboio-3.webp',
    '/images/fotos/samba-de-aboio/samba-de-aboio-4.webp',
    '/images/fotos/samba-de-aboio/samba-de-aboio-5.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function SambaDeAboio() {
  return <Template content={content} />
}
