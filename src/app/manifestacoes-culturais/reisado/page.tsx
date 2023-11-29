import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Reisado',
  text: [
    'O Reisado é uma manifestação cultural que ocorre de dezembro a janeiro, acompanhada pelo som da zabumba, do triângulo e da sanfona. Essa manifestação cultural está relacionada às comemorações dos reis magos e ao nascimento de Jesus. Além da influência portuguesa, o Reisado também apresenta semelhanças com outras manifestações, como Congos e Cacumbi, e possui influência ameríndia.',
    'O Reisado é composto por várias figuras, como Caboclo ou Mateus (palhaço), Dona do Baile ou Dona Deusa, Cabocla, Cigana, Viúva, Dona Chiquinha além de personagens que são divididos em dois cordões: balão, aeroplano, chaveiro e borboleta. A manifestação cultural segue as seguintes jornadas: Serenata, pedição de sala, Bendito, Contradança, figuras, o boi e o Jaraguá, por fim, a Retirada. O boi de pano, também chamado de Janeiro, é um elemento importante do Reisado, e é enfeitado com fitas nos chifres e espelhos. Atualmente, as cores utilizadas no Reisado variam de acordo com o gosto das lideranças, mas, tradicionalmente, são o verde e o vermelho ou azul e vermelho.',
    'De acordo com Ferreira (s.d) , o Reisado tem o poder de retratar, por meio das anedotas e charadas contadas pelo Caboclo e pela Dona do Baile, situações mais típicas da região. Realizado em diversos municípios sergipanos : Japaratuba, Itaporanga, Amparo de São Francisco, Boquim, Itabaiana, São Cristóvão, Areia Branca, Pedrinhas, Pirambu, Malhador, Santa Rosa de Lima, Tobias Barreto, Neópolis e Cristinápolis.',
    'O Reisado do Povoado Marimbondo do município de Pirambu, conhecido como Reisado de Sabal, é destaque, formado por membros de uma mesma família, tem sobrevivido através das gerações há mais de duzentos anos. Além do Reisado de Dona Lalinha, existe o Reisado Sagrado Coração de Jesus (Laranjeiras), de Maria de Lourdes dos Santos. Infelizmente, em 2021, Saturnino Prudêncio, conhecido como Mestre Satu do Reisado de São Cristóvão, faleceu aos 80 anos.',
  ],
  details: {
    locais:
      ' Japaratuba, Itaporanga, Amparo de São Francisco, Boquim, Itabaiana, São Cristóvão, Areia Branca, Pedrinhas, Pirambu, Indiaroba, Malhador, Santa Rosa de Lima, Tobias Barreto, Neópolis e Cristinápolis.',
    festas: 'Dezembro a Janeiro',
    sedes: '',
  },
  refs: [
    'BRITO, Claudia Toscano de. Indumentária Folclórica. [levantamento de dados e sistematização: Claudia Toscano de Brito; Capa: Melcíades; Fotógrafo: Jairo ]. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, 1985.',

    'FERREIRA, Mariano Antonio. Guerreiro. Aracaju: Secretaria de Estado da Educação e Cultura / FUNDESC, [s.d.]. https://ajn1.com.br/urbano/mestre-satu-icone-do-reisado-morre-em-sao-cristovao/ (Acesso em: 03/07/2023).',
    'Cultura em Foco - Reisado Sabal - TV Alese - https://www.youtube.com/watch?v=Gu5HTv7bVTY. SERGIPE. Sergipe, cultura e diversidade. Governo de Sergipe. Aracaju: Solisluna, 2010.',
  ],
  imagesUrl: [
    '/images/ilustracoes/reisado.webp',
    '/images/fotos/reisado/reisado-1.webp',
    '/images/fotos/reisado/reisado-2.webp',
  ],
}

export const metadata: Metadata = {
  title: `Kizomba | ${content.title}`,
}

export default function RendaIrlandesa() {
  return <Template content={content} />
}
