import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Maracatu',
  text: [
    'O Maracatu é uma manifestação cultural nordestina que originou-se da coroação dos Reis do Congo. Autos dos Congos, de forma transfigurada, evoluíram para os Maracatus - Nação e outras manifestações, como a folgança dos escravos, as Congadas, as Taieiras. Segundo Dantas Silva em “A corte dos reis do Congo e os maracatus do Recife” (2011), no início dessas manifestações, os negros saíam em cortejo no dia de Nossa Senhora do Rosário, dirigiam-se para frente de sua igreja e realizavam danças, cantos e batuques. Esses cortejos eram compostos por um grupo de negros formados por uma corte real, com seus reis acompanhados de batuqueiros e dançarinos. O Maracatu surgiu no Nordeste brasileiro como uma manifestação popular genuinamente afro-brasileira, em que cada estado do nordeste vai possuir uma identidade diferente de se “brincar”. Suas cantigas, vestimentas e instrumentação são realizadas pelos próprios integrantes, sempre tendo como principal influência as lutas quilombolas e suas raízes ancestrais. Seus instrumentos são composto por tambor ( tocado sentado), ganzá, onça ou muitos denominado de porca( pela sua sonoridade) e o mais importante de todos o apito, considerado o maestro da brincadeira.',
    'Podemos encontrar o Maracatu no estado de Sergipe em dois territórios. O primeiro em Japaratuba, fundado pelo senhor Aquino Vieira, mais conhecido como Mestre Cural, com cunho carnavalesco ainda na primeira metade do séc. XX), Maracatu este que  passou por diversas transformações, tanto em sua nomenclatura, quanto em sua trajetória. Outro Maracatu do estado de Sergipe está localizado no município Brejo Grande, na comunidade quilombola Brejão do Negros, originou-se, pela oralidade, em um primeiro momento até o ano de 2006. Existia apenas o Maracatu Patrocínio do Brejão (MPB) na comunidade, tendo como Mestre seu Adalto, à frente juntamente com Dona Lila, com a inserção do povoado Brejão no Território Quilombola Brejão dos Negros, criado pelo Governo Federal, ocorreu a divisão no folguedo em que Mestre Adalto, brincante (co-fundador) do MPB, cria o Maracatu Raízes do Quilombo (MRQ), distinguindo, na origem, por ser uma formação que apoia o movimento de incorporação do povoado como quilombo. Atualmente, com o falecimento de Dona Lila no ano de 2022, o Maracatu Patrocínio do Brejão está com suas atividades suspensas, sendo o Maracatu Raízes do Brejão o único em atividade na localidade.',
  ],
  details: {
    locais: 'Aracaju, Brejo Grande e Japaratuba',
    festas: 'Carnaval',
    sedes: '',
  },
  refs: [
    'ALMEIDA, Marina Kerolyn Lima. “Viva o Rei, a Rainha e o povo do lgar”: histórias do maracatu nação Pavão Dourado de Japaratuba. Práxis Pedagógica, v. 2, nº. 3, 2015.',
    'BRANDÃO, Theo. Folguedos natalinos. Maceió: Depto. de Assuntos Culturais, 1973.',
    'JAPARATUBA, Prefeitura Municipal de. Cultura. Disponível em: <https://www.japaratuba.se.gov.br/>. Acesso em 20 de abril de 2014.',
    'JOVEM, Projeto Mídia. Maracatu, Brejão dos Negros – Doc. Mídia Jovem. Canal ProjetoMídiaJovem. 08 de novembro de 2010. Disponível em: <https://www.youtube.com/watch?v=DcjiDWBAqoY&t=352s>.',
    'MELHOR, Selo Mundo. Maracatu Patrocínio do Brejão de Brejo Grande-SE em Laranjeiras-SE. Canal Selo Mundo Melhor. 17 de janeiro de 2010. Disponível em: <https://www.youtube.com/watch?v=V0htm7E5K5Y>. ',
    'MELHOR, Selo Mundo. Maracatu Pavão Dourado de Japaratuba SE no Encontro Cultural de Laranjeiras-SE. Canal Selo Mundo Melhor. 16 de janeiro de 2010. Disponível em: <https://www.youtube.com/watch?v=IBzQbJpR-4s>.',
    'OLIVEIRA, Edivaldo Alves de. Os territórios dos Maracatus do povoado Brejão - Brejo Grande/SE. 2017. 138 f. Dissertação (Mestrado em Geografia) - Universidade Federal de Sergipe, São Cristóvão, SE, 2017.',
    'SOUZA, Marcelo Renan Oliveira de. Maracatus de Fortaleza: entre tradições, identidades e a formação de um patrimônio cultural. IPHAN, 2015',
  ],
  imagesUrl: [''],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function Maracatu() {
  return <Template content={content} />
}
