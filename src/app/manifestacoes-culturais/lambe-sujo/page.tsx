import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Lambe-Sujo',
  text: [
    'O grupo popular Lambe-sujo é uma manifestação cultural que acontece sempre no segundo domingo do mês de outubro, no município de Laranjeiras, sob a liderança do mestre Zé Rolinha. O folguedo, marcado por cortejos e embaixadas, traz a dramatização de um combate protagonizado por dois grupos: de uma lado, os indivíduos que representam os escravizados, os chamados Lambe-sujo, e do outro, os Caboclinhos que simbolizam os silvícolas. Os brincantes simulam um  embate, cujo grande motivo seria o sequestro da princesa  e a invasão das terras indígenas pelos escravizados fugidos. A festividade é marcada por três momentos, sendo eles: a alvorada, o cortejo e o combate final.',
    'Os Lambe-sujos, em sua performance, pintam-se com tinta xadrez preta, sabão de pedra e mel cambaú. As vestimentas são compostas por bermudas e boinas vermelhas, carregam consigo facas e foices feitas de madeira. Além dos brincantes, o grupo é formado pelo rei, o príncipe, a mãe Suzana, o pai Juá e dois feitores. Já os Caboclinhos, para representação dos silvícolas, usam tinta xadrez vermelha e sabão de pedra. O grupo é composto majoritariamente por crianças que além de pintarem o corpo, utilizam cocar industrializado e arco e flecha feitos de madeira. A sua condução é feita pelo Cacique, o seu filho e a princesa. ',
  ],
  details: {
    locais: 'Laranjeiras',
    festas: 'Segundo domingo de outubro',
    sedes: 'Zé Rolinha ',
  },
  refs: [
    'SANTOS, M. F.  Performance e Escárnio na Festa do Lambe-Sujo. 1. ed. São Cristóvão: Editora UFS, 2013. v. 1. 180p .',
    'SANTOS, V. R. . PERFORMANCE E CONTRADIÇÕES SOCIAIS NA FESTA DO LAMBE SUJOS E CABOCLINHOS EM LARANJEIRAS/SE. In: Reuniões de Antropólogos Norte e Nordeste ? ABANNE Reunião Equatorial de Antropologia ? REA, 2015, MACEIO.',
  ],
  imagesUrl: [''],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function LambeSujo() {
  return <Template content={content} />
}
