import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Guerreiro',
  text: [
    'O Guerreiro é uma manifestação cultural surgida em Alagoas, presente em Sergipe, que incorpora elementos africanos, indígenas e europeu na sua composição. Embora não seja estritamente um auto natalino, compartilha semelhanças com o Reisado, uma tradição popular ligada às festividades do ciclo natalino. Durante a apresentação do Guerreiro, é narrada uma história de amor em que uma rainha, acompanhada de sua criada e vassalos, se apaixona por um personagem indígena chamado Peri. No entanto, com medo de que seu segredo seja revelado, a rainha toma uma atitude drástica, ordenando a morte de sua criada. Infelizmente, o Rei descobre a verdade e confronta Peri em uma luta, resultando na morte do Rei. É importante destacar que a história encenada pelo Guerreiro pode variar em diferentes localidades e tradições.',
    'Segundo relatos do saudoso mestre do grupo Guerreiro "Treme Terra", de Aracaju, conhecido como Seu Euclides, o Guerreiro teve origem em outra dança executada pelos índios "Abori", acompanhada por um berimbau ou viola adaptada. Em Sergipe, o Guerreiro é uma manifestação cultural composta por sequências de cantos e danças chamadas jornadas, cada uma relacionada a um personagem específico. Durante a apresentação, o grupo interage com o público por meio de cantos, charadas e louvações, criando um ambiente de alegria e participação. Um dos momentos mais marcantes é a luta de espadas, que ocorre entre o Mestre e o Índio Peri, sendo um ponto alto da performance. ',
    'Além do Mestre e do Índio Peri, outros personagens importantes fazem parte do Guerreiro, como o Embaixador, a Rainha, Lira, o Palhaço e os Vassalos, cada um contribuindo para a diversidade e riqueza cultural da manifestação. O grupo é acompanhado por instrumentos tradicionais, como sanfona, pandeiro, triângulo e tambor, que proporcionam o ritmo e a melodia que embalam as danças e os cantos. Visualmente, os trajes coloridos e brilhantes são destaque, os palhaços ou vassalos usando macacões, penachos nos braços e cabeça, além de colares. O Contramestre e o Embaixador utilizam grandes chapéus em formato de igreja, conhecidos como capelas ou matriz, adornados com espelhos e fitas. A Rainha, por sua vez, além de usar vestido e coroa, requer “jogo de cinutra” para as danças e responsabilidade ao carregar o estandarte do grupo.',
  ],
  details: {
    locais: '',
    festas: '',
    sedes: '',
  },
  refs: [
    'FERREIRA, Mariano Antonio. Guerreiro. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, [s.d.].',
    'Guerreiro. In: INDUMENTÁRIA FOLCLÓRICA. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades; Fotógrafo: Jairo ]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Guerreiro() {
  return <Template content={content} />
}
