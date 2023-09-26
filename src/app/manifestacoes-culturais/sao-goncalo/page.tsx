import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'São Gonçalo',
  text: [
    'A Dança de São Gonçalo surge a partir do culto ao santo português homônimo, sendo, portanto, uma manifestação ligada ao catolicismo popular brasileiro. Esta dança encontra-se registrada em diferentes estados brasileiros e destina-se, geralmente, ao pagamento de promessas feitas a São Gonçalo do Amarante, santo católico cuja história está associada ao auxílio prestado pelo santo às mulheres, seja para casamentos, fertilidade ou na conversão de prostitutas ao cristianismo através da música e da dança. Em Sergipe, foram registradas ocorrências do rito de louvor a São Gonçalo em municípios como Lagarto, Nossa Senhora de Lourdes, Pinhão, Poço Verde, Riachão do Dantas, Simão Dias, Tomar do Geru e São Cristóvão. (BOMFIM, 2014) e (LIMA, 2019). No entanto, o maior registro da Dança de São Gonçalo está situado no município de Laranjeiras, em especial na comunidade quilombola Mussuca. Ocorrido desde as primeiras décadas do século XX, o São Gonçalo possui, atualmente, um grupo formado por adultos e outro formado por crianças, com o intuito de dar continuidade à tradição.',
    'O grupo de São Gonçalo da Mussuca é constituído pelo “Patrão”, que comanda a dança e o canto através de gestos e toques convencionais na caixa (instrumento musical percursivo); pela “Mariposa”, mulher que carrega a imagem de São Gonçalo à frente do cortejo e, eventualmente, tira os cantos; pelos “Tocadores”, que executam as músicas; e pelos Dançarinos, que executam as danças junto com o Patrão. Enquanto o Patrão se apresenta com uma vestimenta de marinheiro, em alusão a um dos ofícios de São Gonçalo, os dançarinos homens vestem calça de brim branca, camisa branca sem mangas, saias de chita com bicos de renda, turbantes na cabeça, fitas coloridas presas numa espécie de xale enviesado ao peito e colares, representando as prostitutas que São Gonçalo “salvou” através da dança e dos louvores. Os instrumentos musicais utilizados na Dança de São Gonçalo são: caixa, violões, cavaquinhos e reco-recos (chamados pule), sendo estes últimos tocados pelos guias (dois dos dançarinos que ficam na ponta de cada uma das duas filas. O pagamento de promessas é composto por uma louvação com doze músicas.',
  ],
  details: {
    locais:
      'Laranjeiras (Há registros da ocorrência da dança em Lagarto, São Cristóvão, Simão Dias, Pinhão, Tobias Barreto, São Domingos e Carira) ',
    festas:
      '10 de janeiro (Dia de São Gonçalo), Pagamento de promessas (dança votiva), Festa do Senhor da Cruz (Semana Santa) e outros eventos culturais do Estado.',
    sedes: 'Povoado Mussuca',
  },
  refs: [
    'BOMFIM, W. J. Identidade, Memoria e Narrativas na Dança de São Gonçalo do Povoado Mussuca-SE. Aracaju, 2014.',
    'FALCÃO, C. R. A dança de São Gonçalo da Mussuca. UNIrevista - Vol. 1, n° 3 (julho 2006).',
    'GOIS, A. A. F. A Dança de São Gonçalo em São Cristóvão: a corporeidade no folclore sergipano. 2003. 108 f. Dissertação (Mestrado em Educação Física)-Universidade Metodista de Piracicaba, Piracicaba, 2003.',
    'LIMA, Marcelo Rangel. O engenho criativo da Mussuca : desenvolvimento e cultura no campo negro de Laranjeiras, Sergipe. 2019. 155 f. Dissertação (Mestrado em Comunicação) - Universidade Federal de Sergipe, São Cristóvão, SE, 2019.',
    'SANTANA, J. S. Abordagem dos movimentos do São Gonçalo do Amarante de Laranjeiras - SE no ensino fundamental : uma ação pedagógica com ênfase nas artes cênicas. São Cristóvão, SE, 2019. Monografia (graduação em Licenciatura em Teatro) – Departamento de Teatro, Centro de Educação e Ciências Humanas, Universidade Federal de Sergipe, São Cristóvão, 2019.',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function SãoGonçalo() {
  return <Template content={content} />
}
