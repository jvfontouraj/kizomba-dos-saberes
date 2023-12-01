import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Capoeira',
  text: [
    'A capoeira é uma manifestação presente no Brasil desde pelo menos o século XIX e denominada pelas autoridades como “capoeiragem”, na época vinculada à ideia de vadiagem e libertinagem. A palavra é de origem Tupi, mas os significados são diversos -  alguns afirmam que o significado é “mato rasteiro” outros afirmam que no século XIX o termo significava “cesto de palha” ou “gaiola de ferro”, podendo ainda tratar se de um tipo de solo.',
    'Em Sergipe “o capoeira” era sinônimo de arruaceiro, ou seja, palavra com conotação pejorativa. Além disso, o Código Penal brasileiro, através do decreto 847, de 11 de Outubro de 1890 previa prisão de dois a seis meses para aqueles que praticassem capoeira. Para que a polícia prendesse não era necessário o flagrante da roda de capoeira, bastava ser reconhecido como “capoeira” para que fossem presos e levados à delegacia. ',
    'O costume do apelido da capoeira surge principalmente da necessidade de proteger a própria identidade e a identidade do outro, pois  uma vez preso era torturado para que entregasse os demais. (BRAGA; SALDANHA, 2014). Somente em 1937 a capoeira deixou de ser crime -  fruto dos esforços dos mestres como Vicente Ferreira conhecido como Mestre Pastinha, que nasceu em 1889 e foi um dos principais responsáveis pela difusão da Capoeira Angola e Manoel dos Reis Machado, conhecido como Mestre Bimba que fundou em 1932 a sua primeira academia de Capoeira Regional em Salvador. ',
    'O jogo ou estilo angola tem como característica principal movimentos próximos do chão e ritmo mais compassado ou “mandigado”. A regional é o estilo criado pelo mestre Bimba e tem como principal característica ritmo e movimentos mais rápidos. As cantigas podem ser entoadas em: 1) ladainhas - canto introdutório que narra acontecimentos e personalidades da capoeira;  2) chulas - cantiga curta geralmente improvisada; 3) corrido - junção de versos com o refrão; 4) quadras - quatro versos que geralmente descrevem o jogo e a roda em si. Os instrumentos utilizados na capoeira são o berimbau, o reco-reco, o pandeiro, o agogô e o atabaque.',
    'José Paulo dos Anjos, mais conhecido como Mestre Paulo dos Anjos nasceu em 15 de Agosto de 1936, na cidade da Estância, no sul sergipano. Em Salvador passou a praticar boxe, quando conheceu Mestre Canjiquinha em 1950, com quem aprendeu  a arte da capoeira e tornou-se uma das principais personalidades sergipanas da capoeira. Os grupos mais antigos de Sergipe são o Grupo Molas, fundado em 1977 pelo Mestre Lucas (Luiz Carlos Vieira Tavares) e o grupo Novos Irmãos, fundado em 1978, pelo radialista estanciano Mestre Jorge. De acordo com o Mestre Robson Mangangá, entrevistado em 2014, existiam cerca de 150 grupos em  Sergipe. Em Aracaju é tradição a ocorrência de rodas de capoeira nas manhãs de sábado no Mercado Thales Ferraz. O dia 17 de Março além de aniversário da cidade também é comemorado o dia da Capoeira em Aracaju.',
  ],
  details: {
    locais: 'Lorem Ipsum',
    festas: '',
    sedes: '',
  },
  refs: [
    'BRAGA, Janine de Carvalho Ferreira ; SALDANHA, B. S. . CAPOEIRA: DA CRIMINALIZAÇÃO NO CÓDIGO PENAL DE 1890 AO RECONHECIMENTO COMO ESPORTE NACIONAL E LEGISLAÇÃO APLICADA. In: Janaína Rigo Santin, Ivan Aparecido Ruiz. (Org.). CAPOEIRA: DA CRIMINALIZAÇÃO NO CÓDIGO PENAL DE 1890 AO RECONHECIMENTO COMO ESPORTE NACIONAL E LEGISLAÇÃO APLICADA. 1ed.Florianópolis: CONPEDI, 2014, v. , p. 117-142.',
    'MACHADO, T. T. ; AMORIM, S. . A Capoeira no Jornal O Republicano de Sergipe em 1890: Reflexões sobre um dos atos do Governador Felisbelo Freire. In: V CONGRESSO SERGIPANO DE HISTÓRIA & V ENCONTRO ESTADUAL DE HISTÓRIA DA ANPUH/SE O BRASIL NA HISTORIOGRAFIA DE FELISBELO FREIRE: Reflexos na pesquisa e no ensino em história, 2016, Aracaju. Anais Eletrônicos, 2016.',
    'Jornal O Republicano : orgão do partido republicano (SE) - 1890. Ed. 128, p. 03.',
    'http://capoeiristasdeestancia.blogspot.com/2016/08/nome-adilson-santos-cruz-datade.html (acesso em: 17/07/2023).',
    'https://infonet.com.br/noticias/cultura/mestre-lucas-lanca-mais-um-livro-sobre-a-capoeira/ (acesso em: 18/07/2023).',
    'https://www.palmares.gov.br/?p=41316#:~:text=Em%205%20de%20abril%20de,maiores%20s%C3%ADmbolos%20da%20cultura%20brasileira. (Acesso em : 18/07/2023).',
    'https://infonet.com.br/noticias/esporte/encontro-de-mulheres-capoeiristas-acontece-no-dia-31/ (acesso em : 18/07/2023).',
  ],
  imagesUrl: [
    '/images/ilustracoes/capoeira.webp',
    '/images/fotos/capoeira/capoeira-1.webp',
    '/images/fotos/capoeira/capoeira-2.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Batucada() {
  return <Template content={content} />
}
