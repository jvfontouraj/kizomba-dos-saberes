import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Barco de Fogo',
  text: [
    'A tradição do Barco de Fogo está intrinsecamente ligada ao ciclo junino da cidade de Estância, em Sergipe. Estima-se que a produção do primeiro Barco de Fogo ocorreu no final da década de 1930, por Francisco da Silva Cardoso, o Chico Surdo, que empenhou seus esforços na materialização de um desejo seu, ser pescador. Sonho este que não podia se concretizar em virtude da surdez e de não saber nadar. Os primeiros protótipos se deram através de experiências com um barquinho de papelão, espadas acopladas e um fio de arame. Com o passar do tempo foram acrescentados alguns detalhes, o papelão substituído por uma estrutura de madeira, cada vez mais ornamentados e aperfeiçoados, levando ao que conhecemos hoje como Barco de Fogo, um barco que voa. ',
    'O Barco de Fogo, após ornamentado pelos fogueteiros, é pendurado no fio de aço e são acesas as espadas (fogos de artifício) nele acoplados. Os barcos percorrem cerca de 300 metros no tradicional evento do Barco de Fogo, o Concurso do Melhor Barco de Fogo, que ocorre nas festas juninas da cidade estância a, mas também há apresentações na data de 11 de junho, dia oficial do Barco de Fogo, instituído pela Lei Estadual n° 7.301/2011, em homenagem ao nascimento de Chico Surdo. O Barco de Fogo tornou-se Patrimônio Cultural Imaterial de Sergipe, em virtude do seu modo de fazer artesanal, uma tradição que foi mantida, aperfeiçoada e passada por gerações pelas comunidades estancianas que aderiram a essa manifestação cultural, que tornou-se de grande importância para a cultura e economia do município sergipano.',
  ],
  details: {
    locais: '',
    festas: '',
    sedes: '',
  },
  refs: [],
  imagesUrl: [
    '/images/ilustracoes/barco-de-fogo.webp',
    '/images/fotos/barco-de-fogo/barco-de-fogo-1.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function BarcoDeFogo() {
  return <Template content={content} />
}
