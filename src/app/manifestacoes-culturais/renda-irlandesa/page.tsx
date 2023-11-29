import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Renda Irlandesa',
  text: [
    'A renda irlandesa é uma tradição que passa de geração a geração em alguns municípios sergipanos e é um modo de fazer através do alinhavar de um cordão grosso chamado lacê. Referenciada como patrimônio imaterial do Brasil, a renda irlandesa tem como pólo a cidade de Divina Pastora, em razão de condições históricas de produção vinculadas à tradição dos engenhos canavieiros, à abolição da escravatura e às mudanças econômicas que culminaram na apropriação popular do ofício de rendeira, que, já foi restrito originalmente à aristocracia. A delicada técnica utilizada na produção foi trazida da Europa, no século XVII, e associada à condição feminina e o saber-fazer compartilhado pelas rendeiras e sob a liderança de uma mestra.',
    'O fazer da renda é uma atividade coletiva, e para fazê-la,  o primeiro passo são os desenhos em um papel, em seguida, é preciso alinhavar o lacê nesse desenho, e  preencher os espaços com os pontos da renda irlandesa, que de acordo com as rendeiras, existem mais de cem pontos que resultam na confecção de uma renda singular, ressaltada pelo relevo e brilho do lacê.  Portanto, confere ao produto um diferencial em relação às outras rendas produzidas no país. Vale destacar que Sergipe é o único pólo de Renda Irlandesa no mundo, e em 2008, recebeu o título de Patrimônio Cultural do Brasil, conferido pelo Conselho Consultivo do Patrimônio Histórico e Artístico Nacional do Iphan. Atualmente, essa tarefa ocupa mais de uma centena de artesãs sergipanas, além de ser uma referência cultural.',
  ],
  details: {
    locais: 'Divina Pastora, Laranjeiras e Aracaju',
    festas: '',
    sedes:
      'ASDEREN - Associação para o Desenvolvimento de Renda de Divina Pastora; Associação das Rendeiras Independentes de Divina Pastora (ASDRIN); Associação de Costureiras e Artesãs do Município de Laranjeiras.',
  },
  refs: [
    'CAVALCANTI, M. L. V. de C.; FONSECA, M. C. L. Patrimônio imaterial no Brasil. Legislação e Políticas Estaduais; Brasília: UNESCO, Educarte, 2008.',
    'DANTAS, Beatriz Góis. As rendeiras de Divina Pastora. Relatório apresentado ao Artesanato Solidário. Aracaju: 2000',
    'IPHAN. Instrução Técnica do Processo de Registro do Modo de Fazer da Renda Irlandesa tendo como Referência o Ofício das Rendeiras de Divina Pastora/SE. ',
    'TORRES, D. A. Associação de Costureiras e Artesãs do Município de Laranjeiras: transformando a arte hereditária em fonte de renda. In: Anais eletrônicos do XI Congresso Luso Afro Brasileiro de Ciências Sociais: Diversidades e (Des)Igualdades. Salvador: UFBA, 2011. ',
  ],
  imagesUrl: [
    '/images/ilustracoes/rendeira.webp',
    '/images/fotos/renda-irlandesa/renda-irlandesa-1.webp',
    '/images/fotos/renda-irlandesa/renda-irlandesa-2.webp',
    '/images/fotos/renda-irlandesa/renda-irlandesa-3.webp',
    '/images/fotos/renda-irlandesa/renda-irlandesa-4.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function RendaIrlandesa() {
  return <Template content={content} />
}
