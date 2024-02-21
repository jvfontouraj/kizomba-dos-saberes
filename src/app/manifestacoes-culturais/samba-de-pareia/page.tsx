import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Samba de Pareia',
  text: [
    'O Samba de Pareia tem sua origem no povoado Mussuca, uma comunidade remanescente de quilombo situada no município de Laranjeiras. Está relacionado às celebrações da noite de São João e ao nascimento das crianças da comunidade, que chamam de “Samba de Visita” ou “Samba de mulher parida”. Celebrar o nascimento das crianças é uma africanidade, ou seja, um costume trazido da África que persiste até os dias atuais. A “Pareia” ou parelha, significa que os brincantes dançam aos pares, ao som de instrumentos percussivos como atabaques, porca (similar à cuíca) e ganzás, as mulheres marcam o ritmo através das pisadas com os tamancos.',
    'Mas, nem sempre foi assim. Antigamente, conta Dona Nadir, referência do grupo,  participavam homens, mulheres e crianças. Os instrumentos, como o ganzá, era feito com lata de leite, e o atabaque era feito com as tábuas de barrica (barril) e com o couro do carneiro abatido para alimentação da comunidade na festa, muito similar aos atabaques tocados na Irmandade Nagô Santa Bárbara Virgem. A partir da interferência externa e da política local, a manifestação se tornou um grupo “parafolclórico” composto por 20 mulheres, recebendo roupas típicas estampadas e os tamancos tais como vemos atualmente. Hoje os homens só participam tocando instrumentos e as cantigas, são composições que relatam fatos vividos no cotidiano da comunidade, dão continuidade à brincadeira dos pais e avós.',
  ],
  details: {
    locais: 'Laranjeiras',
    festas: 'Festas de São João e o nascimento de crianças da comunidade. ',
    sedes: 'Quilombo da Mussuca, Laranjeiras',
    ondeEncontrar: '',
  },
  refs: [
    'SILVA, Jonathan Rodrigues. Samba de Pareia pelos saberes do corpo que samba. 195 f. il. 2019. Dissertação (Mestrado em Culturas Populares) – Programa de Pós-Graduação Interdisciplinar em Culturas Populares, Universidade Federal de Sergipe, São Cristóvão, 2019.',
    'Vale do cotinguiba: a arte de um povo. Direção:  Wendell Miranda. Quatro Cantos Produções. Brasil: Petrobrás (Patrocínio), 2008. (20min) Disponível em: https://www.youtube.com/watch?v=MEAwznWna0E (acesso em: 20/09/2023). ',
  ],
  imagesUrl: [
    '/images/ilustracoes/pareia.webp',
    '/images/fotos/samba-de-pareia/samba-de-pareia-1.webp',
    '/images/fotos/samba-de-pareia/samba-de-pareia-2.webp',
    '/images/fotos/samba-de-pareia/samba-de-pareia-3.webp',
    '/images/fotos/samba-de-pareia/samba-de-pareia-4.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function RendaIrlandesa() {
  return <Template content={content} />
}
