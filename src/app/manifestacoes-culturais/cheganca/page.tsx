import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Chegança',
  text: [
    'A Chegança é uma manifestação que remonta aventuras marítimas e às guerras de reconquista, também conhecida como “Retomada Cristã” - desde o século VIII os muçulmanos haviam expandido o seus controles políticos, religiosos, econômicos e culturais pelo norte da África e ao sul da Europa, principalmente a Península Ibérica, controlando grande parte do mar mediterrâneo até meados de 1571. Também conhecida como Mourama ou Chegança dos Mouros, essa manifestação popular ocorre geralmente nas celebrações para o santo Benedito, o Mouro e à Nossa Senhora do Rosário, como também no dia de Reis (06 de Janeiro).',
    'Como auto popular, encenam as batalhas entre cristãos e os mouros, as negociações e a rendição dos mouros que são aprisionados e forçados a pedir batismo aos cristãos. Os cristãos são representados pelos brincantes que possuem patentes inspiradas na Marinha brasileira como Almirante, General de Brigada, Padre, Gajeiros etc. Os Mouros são representados pelo Rei, a Rainha, em alguns casos há princesa, “alacaia”, embaixadores e ministros. É constituída por várias jornadas, cada brincante com suas indumentárias e falas previamente ensaiadas, através dos cânticos e danças representam as embarcações e as experiências náuticas que chamam “marujada”, “já o termo mourama indica ora a representação da luta entre mouros e cristãos, (...), enquanto o folguedo como um todo é denominado Chegança.” (DANTAS, 1976, p. 05).',
  ],
  details: {
    locais:
      'Divina Pastora, Laranjeiras, Itabaiana , Lagarto, Japaratuba, Carmópolis, Santo Amaro das Brotas e São Cristóvão.',
    festas: '',
    sedes: '',
  },
  refs: [
    'DANTAS, Beatriz Góis. Chegança: Cadernos do Folclore. vol. 14. Rio de Janeiro: FUNARTE, 1976.',
    'FERNANDES, Cláudio. "Batalha de Lepanto"; Brasil Escola. Disponível em: https://brasilescola.uol.com.br/guerras/batalha-lepanto.htm. Acesso em 04 de maio de 2023.',
    'INDUMENTÁRIA FOLCLÓRICA. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades; Fotógrafo: Jairo ]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',
    'SANTOS, Mesalas Ferreira. Formas Expressivas de um mestre: a mediação entre margem e centro nos folguedos de Sergipe. in: 29ª Reunião Brasileira de Antropologia, Rio Grande do Norte, 2014.',
  ],
  imagesUrl: [
    '/images/ilustracoes/cheganca.webp',
    '/images/fotos/cheganca/cheganca-1.webp',
    '/images/fotos/cheganca/cheganca-2.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Chegança() {
  return <Template content={content} />
}
