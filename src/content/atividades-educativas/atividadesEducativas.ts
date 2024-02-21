interface Activity {
  name: string
  src: string
  tags?: string[]
}

interface EducationalCategory {
  name: string
  imgUrl: string
  activities: Activity[]
}

export type AtividadesEducativasTypes = Array<EducationalCategory>

export const atividadesEducativas: AtividadesEducativasTypes = [
  {
    name: 'Gerais',
    imgUrl: '/images/logo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Gerais/Atividade01Gerais.pdf',
        tags: [
          'Ensino Médio',
          'Manifestações Culturais',
          'Capitalismo',
          'Afro sergipano',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Gerais/Atividade02Gerais.pdf',
        tags: [
          'Ensino Fundamental',
          'Musicalidade',
          'Jogo São Gonçalo',
          'Samba',
        ],
      },
      {
        name: 'Jogo 1',
        src: 'https://p.interacty.me/7dedb45a08d37f1f/iframe.html',
        tags: ['Jogo', 'Música', 'Percepção Musical', 'Samba'],
      },
      {
        name: 'Jogo 2',
        src: 'https://p.interacty.me/945e871c4bbe55b1/iframe.html',
        tags: ['Jogo', 'Jogo da Memória', 'Imagem'],
      },
      {
        name: 'Jogo 3',
        src: 'https://p.interacty.me/58e77928caf8b329/iframe.html',
        tags: ['Jogo', 'Questões', 'Nagô'],
      },
      {
        name: 'Jogo 4',
        src: 'https://p.interacty.me/2fea6037675036a1/iframe.html',
        tags: ['Jogo', 'Jogo da Memória', 'Imagem'],
      },
      // {
      //   name: 'Jogo 5',
      //   src: 'https://p.interacty.me/13f28ddab053f738/iframe.html',
      //   tags: ['Jogo'],
      // },
    ],
  },
  {
    name: 'Bacamarteiros',
    imgUrl: '/images/ilustracoes-sem-fundo/bacamarteiro.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Bacamarteiros/Atividades/Atividade-Bacamarteiro-Ens.Médio.pdf',
        tags: [
          'Batalhão',
          'Ensino Médio',
          'Abolição',
          'Manifestação Cultural',
          'Aguada',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Bacamarteiros/Atividades/Atividade-Bacamarteiro(2).pdf',
        tags: [
          'Batalhão',
          'Ensino Fundamental',
          'Bacamarte',
          'Caça-palavras',
          'Aguada',
        ],
      },
      {
        name: 'Plano de Aula 1',
        src: '/atividades-educacionais/Bacamarteiros/Planos/Planodeaula-Bacamarteiro(1).pdf',
        tags: ['Plano de Aula', 'Batalhão', 'Brasil Império'],
      },
      {
        name: 'Plano de Aula 2',
        src: '/atividades-educacionais/Bacamarteiros/Planos/Planodeaula-Bacamarteiro(2).pdf',
        tags: ['Plano de Aula', 'Batalhão', 'Brasil Império'],
      },
    ],
  },
  {
    name: 'Barco de Fogo',
    imgUrl: '/images/ilustracoes-sem-fundo/barco-de-fogo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Barco-de-fogo/Atividade(Barcodefogo).pdf',
        tags: ['Ensino Fundamental', 'Questões', 'História'],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Barco-de-fogo/Barcodefogo.pdf',
        tags: ['Ensino Fundamental', 'Poema', 'História'],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Barco-de-fogo/Barcodefogo-planoeatividade.pdf',
        tags: ['Ensino Médio', 'Texto', 'Debate'],
      },
      {
        name: 'Atividade 4',
        src: '/atividades-educacionais/Barco-de-fogo/Barcodefogo-recursodidático.pdf',
        tags: ['Ensino Fundamental', 'Jogo', 'Quiz'],
      },
      {
        name: 'Atividade 5',
        src: '/atividades-educacionais/Barco-de-fogo/Quadrinho.pdf',
        tags: ['Ensino Fundamental', 'História em Quadrinhos', 'História'],
      },
    ],
  },
  {
    name: 'Batucada',
    imgUrl: '/images/ilustracoes-sem-fundo/batucada.png',
    activities: [
      {
        name: 'Plano de Aula 1',
        src: '/atividades-educacionais/Batucada/Batucada-planodeaula.pdf',
        tags: ['Plano de Aula', 'Estância', 'Debate', 'Apresentação'],
      },
    ],
  },
  {
    name: 'Caceteira',
    imgUrl: '/images/ilustracoes-sem-fundo/caceteira.png',
    activities: [
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Caceteira/PlanodeAula-ACaceteira.pdf',
        tags: [
          'Caceteira',
          'Ensino Fundamental',
          'Manifestação Cultural',
          'São Cristóvão',
          'Pecuária',
          'Boi',
          'Couro',
          'Instrumentos Musicais',
          'Mestre Rindú',
        ],
      },
    ],
  },
  {
    name: 'Cacumbi',
    imgUrl: '/images/ilustracoes-sem-fundo/cacumbi.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Cacumbi/Atividades/atividade01cacumbi.pdf',
        tags: [
          'Cacumbi',
          'Música',
          'Ensino Fundamental',
          'Manifestação Cultural',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Cacumbi/Atividades/Atividade1-Cacumbi.pdf',
        tags: [
          'Cacumbi',
          'Educação Infantil',
          'Instrumentos Musicais',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Cacumbi/Atividades/Atividade02Cacumbi.pdf',
        tags: ['Cacumbi', 'Educação Infantil', 'Pintura', 'Laranjeiras'],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Cacumbi/PlanosdeAula/Planodeaula-Cacumbi(1).pdf',
        tags: [
          'Cacumbi',
          'Ensino Médio',
          'Brasil República',
          'Pós-abolição',
          'Mestre Deca',
          'Laranjeiras',
          'Racismo',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Cacumbi/PlanosdeAula/Planodeaula-Cacumbi(2).pdf',
        tags: ['Cacumbi', 'Ensino Fundamental', 'Cultura', 'Religiosidade'],
      },
    ],
  },
  {
    name: 'Capoeira',
    imgUrl: '/images/ilustracoes-sem-fundo/capoeira.png',
    activities: [
      {
        name: 'Atividade e Plano de aula 1',
        src: '/atividades-educacionais/capoeira/PlanodeAula-Capoeira(1).pdf',
        tags: [
          'Capoeira',
          'Ensino fundamental',
          'Patrimônio cultural',
          'Império',
          'República',
          'Abolição',
        ],
      },
      {
        name: 'Atividade e Plano de aula 2',
        src: '/atividades-educacionais/capoeira/Planodeaula-Capoeira(2).pdf',
        tags: [
          'Capoeira',
          'Ensino Infantil',
          'Formação histórica',
          'Cultura',
          'Música',
        ],
      },
      {
        name: 'Atividade e Plano de aula 3',
        src: '/atividades-educacionais/capoeira/Planodeaula-Capoeira(3).pdf',
        tags: ['Capoeira', 'Ensino médio', 'Brasil Colônia', 'Cultura'],
      },
    ],
  },
  {
    name: 'Chegança',
    imgUrl: '/images/ilustracoes-sem-fundo/cheganca.png',
    activities: [
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Chegança/Chegança-planodeaula01.pdf',
        tags: [
          'Chegança',
          'Ensino Fundamental',
          'Trabalho',
          'Formas de organização social',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Chegança/Planodeaula-Chegança.pdf',
        tags: [
          'Plano de Aula',
          'Ensino Fundamental',
          'Texto',
          'Imagem',
          'História',
          'Português',
          'Religiosidade',
        ],
      },
    ],
  },
  {
    name: 'Guerreiro',
    imgUrl: '/images/ilustracoes-sem-fundo/guerreiro.png',
    activities: [
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Guerreiro/Guerreiro-planodeaula01.pdf',
        tags: [
          'Guerreiro',
          'Ensino Médio',
          'Manifestação Cultural',
          'Identidade',
          'Música',
          'Máscara',
        ],
      },
    ],
  },
  {
    name: 'Lambe-sujo',
    imgUrl: '/images/ilustracoes-sem-fundo/lambe-sujo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Lambe-sujo/Atividades/Atividade01-LAMBESUJO.pdf',
        tags: [
          'Lambe-sujo',
          'Ensino Fundamental',
          'Cultura',
          'Jogo',
          'Teatro',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Lambe-sujo/Atividades/Atividade02Lambe-Sujo.pdf',
        tags: [
          'Lambe-sujo',
          'Ensino Médio',
          'Cultura',
          'Redes Sociais',
          'Escravidão',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Lambe-sujo/PlanosdeAula/PlanodeaulaLambe-sujo+atividade01.pdf',
        tags: [
          'Lambe-sujo',
          'Ensino Fundamental',
          'Cultura',
          'Patrimônio Histórico',
          'Artes',
          'Laranjeiras',
        ],
      },
    ],
  },
  {
    name: 'Literatura',
    imgUrl: '/images/logo.png',
    activities: [
      {
        name: 'Plano de aula e atividade 1',
        src: '/atividades-educacionais/Literatura/PlanodeaulaeAtividades01paraturmasdo7ÂºdoEnsinoFundamental-Batalhao.pdf',
        tags: [
          'Literatura',
          'Ensino Fundamental',
          'Escravidão',
          'Quilombo',
          'Diáspora',
          'Brasil Colônia',
        ],
      },
      {
        name: 'Plano de aula e atividade 2',
        src: '/atividades-educacionais/Literatura/PlanodeaulaeAtividades02paraturmasdoensinomÃ©dio-literatura.pdf',
        tags: [
          'Literatura',
          'Ensino Médio',
          'Brasil República',
          'Brasil Império',
          'Diáspora',
          'Abolição',
        ],
      },
    ],
  },
  {
    name: 'Maracatu',
    imgUrl: '/images/ilustracoes-sem-fundo/maracatu.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Maracatu/MARACATUKIZOMBAI.pdf',
        tags: ['História', 'Artes', 'Música', 'Ensino Fundamental II'],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Maracatu/MARACATUATIVIDADEII.pdf',
        tags: [
          'Artes',
          'Ensino Fundamental II',
          'Pulsação/ Parlendas',
          'Provérbios',
          'Trava-línguas',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Maracatu/MARACATUIII.pdf',
        tags: [
          'Artes',
          'Música',
          'Ensino Fundamental II',
          'Instrumentos de percussão',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Maracatu/Planodeaula01-maracatu.pdf',
        tags: ['Maracatu', 'Música', 'Identidade', 'Ensino Médio'],
      },
    ],
  },
  {
    name: 'Nagô',
    imgUrl: '/images/ilustracoes-sem-fundo/nagô.webp',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Nagô/Atividades/AtividadesNAGÔ01pdf.pdf',
        tags: [
          'Nagô',
          'Ensino Fundamental',
          'Patrimônio Imaterial',
          'Religiosidade',
          'Brasil Colônia',
          'Irmandades',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Nagô/Atividades/Atividade02.pdf',
        tags: [
          'Nagô',
          'Ensino Médio',
          'Religiosidade',
          'Irmandade',
          'Laranjeiras',
          'Abolição',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Nagô/PlanosdeAula/Nagô-Planodeaulaeativ01.pdf',
        tags: [
          'Nagô',
          'Ensino Fundamental',
          'Artes',
          'Patrimônio Histórico',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Nagô/PlanosdeAula/planodeaulaeatividadenago02.pdf',
        tags: [
          'Nagô',
          'Ensino Fundamental',
          'História',
          'Cultura',
          'Interpretação de texto',
          'Religiosidade',
        ],
      },
      {
        name: 'Plano de aula 3',
        src: '/atividades-educacionais/Nagô/PlanosdeAula/PLANODEAULANagÃ´03.pdf',
        tags: [
          'Nagô',
          'Ensino Fundamental',
          'Patrimônio Cultural',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
    ],
  },
  {
    name: 'Parafusos',
    imgUrl: '/images/ilustracoes-sem-fundo/parafuso.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Parafusos/Atividades/AtividadeParafusos(QUESTÃ_OVESTIBULAR)01.pdf',
        tags: [
          'Parafusos',
          'Ensino Médio',
          'Século XIX',
          'Abolição',
          'Lagarto',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Parafusos/Atividades/NEGROESCAPOU(PARAFUSOS)02.pdf',
        tags: [
          'Parafusos',
          'Ensino Fundamental',
          'Música',
          'Abolição',
          'Lagarto',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Parafusos/PlanodeAula/Parafusos-planodeaula01.pdf',
        tags: [
          'Parafusos',
          'Ensino Fundamental',
          'Século XIX',
          'Brasil Império',
          'Lagarto',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Parafusos/PlanodeAula/ParafusosPlanodeaula02.pdf',
        tags: [
          'Parafusos',
          'Ensino Médio',
          'Conflitos Mundiais',
          'Revolução Russa',
          'Capitalismo',
          'Socialismo',
        ],
      },
    ],
  },
  {
    name: 'Pífanos',
    imgUrl: '/images/ilustracoes-sem-fundo/pifano.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/pifanos/ATIVIDADEPÍFANOS_ZABUMBA01.pdf',
        tags: [
          'Pífanos',
          'Ensino Fundamental',
          'Zabumba',
          'Musicalidade',
          'Manifestação Cultural',
        ],
      },
    ],
  },
  {
    name: 'Quilombos',
    imgUrl: '/images/logo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Quilombos/Atividades/ATIVIDADE01-QUILOMBOSEMSERGIPE-ESCRAVIDÃO,RESISTÊNCIAELIBERDADE(1).pdf',
        tags: [
          'Quilombo',
          'Ensino Médio',
          'Maloca',
          'Resistência',
          'Liberdade',
          'Abolição',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Quilombos/Atividades/Atividade02.pdf',
        tags: [
          'Quilombo',
          'Ensino Médio',
          'Abolição',
          'Legislação',
          'Liberdade',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Quilombos/Atividades/Quilombo-atividade03.pdf',
        tags: ['Quilombo', 'Ensino Médio', 'Abolição', 'Escravidão', 'Redação'],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Quilombos/PlanosdeAula/PLANODEAULA01-QUILOMBOSEMSERGIPE-ESCRAVIDÃO,RESISTÊNCIAELIBERDADE.pdf',
        tags: [
          'Quilombo',
          'Ensino Fundamental',
          'Patrimônio Cultural',
          'Resistência',
          'Século XIX',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Quilombos/PlanosdeAula/Planodeaula02eAtividadesparaturmasdo3ÂºdoEnsinoFundamental-quilombo.pdf',
        tags: [
          'Quilombo',
          'Ensino Fundamental',
          'Brasil Colônia',
          'Cultura',
          'Lenda',
          'História',
        ],
      },
      {
        name: 'Plano de aula 3',
        src: '/atividades-educacionais/Quilombos/PlanosdeAula/Planodeaula03eAtividadesparaturmasdo4ÂºdoEnsinoFundamental-quilombo.pdf',
        tags: [
          'Quilombo',
          'Ensino Fundamental',
          'Brasil Colônia',
          'Resistência',
          'Fotografia',
        ],
      },
      {
        name: 'Plano de aula 4',
        src: '/atividades-educacionais/Quilombos/PlanosdeAula/Planodeaula04eAtividadesparaturmasdoensinomÃ©dio-quilombo.pdf',
        tags: [
          'Quilombo',
          'Ensino Médio',
          'Brasil Colônia',
          'Cultura',
          'Texto',
        ],
      },
    ],
  },
  {
    name: 'Reisado',
    imgUrl: '/images/ilustracoes-sem-fundo/reisado.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/reisado/ATIVIDADEREISADO01.pdf',
        tags: [
          'Reisado',
          'Ensino Fundamental',
          'Semiótica',
          'Festejos natalinos',
          'Rima',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/reisado/AtividadeReisado02.pdf',
        tags: [
          'Reisado',
          'Ensino Fundamental',
          'Música',
          'Manifestação Cultural',
          'Texto',
        ],
      },
    ],
  },
  {
    name: 'Renda Irlandesa',
    imgUrl: '/images/ilustracoes-sem-fundo/rendeira.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Renda-Irlandesa/Atividade/ATIVIDADERENDAIRLANDESA01.pdf',
        tags: [
          'Renda Irlandesa',
          'Ensino Fundamental',
          'Patrimônio Imaterial',
          'Divina Pastora',
          'Caça-palavras',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Renda-Irlandesa/Planodeaula/RENDAIRLANDESA- PLANODEAULA01.pdf',
        tags: [
          'Renda Irlandesa',
          'Ensino Fundamental',
          'Patrimônio Imaterial',
          'Divina Pastora',
          'Trabalho manual',
          'Artes',
        ],
      },
    ],
  },
  {
    name: 'Roteiros',
    imgUrl: '/images/logo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Roteiros/AsDandaras–UmavisitaçãoaoQuilomboBrejãodosNegrosesuasoutrasexpressõesculturais..pdf',
        tags: ['Roteiro histórico-cultural', 'Brejão dos Negros', 'Quilombo'],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Roteiros/Japaratuba–Enxergandoaculturanegralocaleoutrasexpressõesculturais..pdf',
        tags: [
          'Roteiro histórico-cultural',
          'Japaratuba',
          'Festa das Cabacinhas',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Roteiros/OPortoD’Areia–UmavisitaçãoaoQuilomboUrbanodeorigemdoBarco-de-fogoesuasoutrasexpressõesculturais..pdf',
        tags: [
          'Roteiro histórico-cultural',
          'Porto D’Areia',
          'Quilombo Urbano',
        ],
      },
      {
        name: 'Atividade 4',
        src: '/atividades-educacionais/Roteiros/ROTEIRODOPROJETOROTADOQUILOMBOMOCAMBOTURISMORURALCOMUNITÃ_RIO.pdf',
        tags: [
          'Roteiro histórico-cultural',
          'Porto da Folha',
          'Quilombo Mocambo',
        ],
      },
    ],
  },
  {
    name: 'Samba de Aboio',
    imgUrl: '/images/ilustracoes-sem-fundo/samba-de-aboio.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Samba-de-aboio/Atividade/Atividade01-SambaseAboio.pdf',
        tags: [
          'Samba de Aboio',
          'Ensino Fundamental',
          'Patrimônio Cultural',
          'Aguada',
          'Religiosidade',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Samba-de-aboio/Atividade/Atividade02SAMBADEABOIO-LucasGama.pdf',
        tags: [
          'Samba de Aboio',
          'Educação Infantil',
          'Música',
          'Aguada',
          'Instrumentos Musicais',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Samba-de-aboio/PlanodeAula/Planodeaula01SambadeAboio.pdf',
        tags: [
          'Samba de Aboio',
          'Ensino Fundamental',
          'Abolição',
          'Aguada',
          'Século XIX',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Samba-de-aboio/PlanodeAula/SambadeAboio-planodeaula02.pdf',
        tags: [
          'Samba de Aboio',
          'Ensino Fundamental',
          'História',
          'Aguada',
          'Cultura',
          'Linguagens',
        ],
      },
    ],
  },
  {
    name: 'Samba de Coco',
    imgUrl: '/images/ilustracoes-sem-fundo/sambadeira.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Samba-de-coco/Atividades/Atividade01.pdf',
        tags: [
          'Samba de Coco',
          'Educação Infantil',
          'Manifestação Cultural',
          'Mosqueiro',
          'Barra dos Coqueiros',
          'Jogo',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Samba-de-coco/Atividades/Atividade02.pdf',
        tags: [
          'Samba de Coco',
          'Educação Infantil',
          'Manifestação Cultural',
          'Mosqueiro',
          'Barra dos Coqueiros',
          'Jogo',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Samba-de-coco/Atividades/SAMBADECOCO-Atividade03.pdf',
        tags: [
          'Samba de Coco',
          'Ensino Fundamental',
          'Manifestação Cultural',
          'Brasil Império',
          'Mosqueiro',
          'Barra dos Coqueiros',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Samba-de-coco/PlanosdeAula/Planodeaula-sambadecoco01.pdf',
        tags: [
          'Samba de Coco',
          'Educação Infantil',
          'História',
          'Geografia',
          'Cultura',
          'Símbolos',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Samba-de-coco/PlanosdeAula/Sambadecoco-planodeaula.pdf',
        tags: [
          'Samba de Coco',
          'Ensino Fundamental',
          'Português',
          'Redação',
          'Festas juninas',
        ],
      },
      {
        name: 'Plano de aula 3',
        src: '/atividades-educacionais/Samba-de-coco/PlanosdeAula/Sambadecoco-planodeaula03.pdf',
        tags: [
          'Samba de Coco',
          'Ensino Fundamental',
          'História',
          'Geografia',
          'Cultura',
          'Religiosidade',
        ],
      },
    ],
  },
  {
    name: 'Samba de Pareia',
    imgUrl: '/images/ilustracoes-sem-fundo/pareia.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Samba-de-pareia/Atividades/AtividadeSambadePareia01.pdf',
        tags: [
          'Samba de Pareia',
          'Ensino Fundamental',
          'História',
          'Jogo',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Samba-de-pareia/Atividades/Atividade02Sambadepareia.pdf',
        tags: [
          'Samba de Pareia',
          'Educação Infantil',
          'História',
          'Jogo',
          'Caça-palavras',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Samba-de-pareia/PlanosdeAula/Planodeaula01-SambadePareia.pdf',
        tags: [
          'Samba de Pareia',
          'Educação Infantil',
          'Matemática',
          'Jogo',
          'Laranjeiras',
        ],
      },
    ],
  },
  {
    name: 'São Gonçalo',
    imgUrl: '/images/ilustracoes-sem-fundo/sao-goncalo.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/SãoGonçalo/Atividade/Atividade01.pdf',
        tags: [
          'São Gonçalo',
          'Ensino Fundamental',
          'Diáspora',
          'Sincretismo',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/SãoGonçalo/Atividade/Atividade02.pdf',
        tags: [
          'São Gonçalo',
          'Ensino Fundamental',
          'Diáspora',
          'Sincretismo',
          'Música',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/SãoGonçalo/Atividade/Recursodidático-SãoGonçalo.pdf',
        tags: ['São Gonçalo', 'Imagem', 'Instrumentos Musicais'],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/SãoGonçalo/PlanodeAula/Planodeaula-SãoGonçalo(1).pdf',
        tags: [
          'São Gonçalo',
          'Ensino Fundamental',
          'Educação Física',
          'História',
          'Dança',
          'Música',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/SãoGonçalo/PlanodeAula/Planodeaula-SãoGonçalo(2).docx.pdf',
        tags: [
          'São Gonçalo',
          'Ensino Fundamental',
          'História',
          'Cultura',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
    ],
  },
  {
    name: 'Taieiras',
    imgUrl: '/images/ilustracoes-sem-fundo/taieiras.png',
    activities: [
      {
        name: 'Atividade 1',
        src: '/atividades-educacionais/Taieiras/Atividades/Atividade01Taieiras.pdf',
        tags: [
          'Taieiras',
          'Educação Infantil',
          'Jogo da Memória',
          'Nagô',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 2',
        src: '/atividades-educacionais/Taieiras/Atividades/Atividade02Taieiras-1.pdf',
        tags: [
          'Taieiras',
          'Ensino Fundamental',
          'Música',
          'Nagô',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
      {
        name: 'Atividade 3',
        src: '/atividades-educacionais/Taieiras/Atividades/Atividade03.pdf',
        tags: [
          'Taieiras',
          'Educação Infantil',
          'Nagô',
          'Jogo da Memória',
          'Dança',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 1',
        src: '/atividades-educacionais/Taieiras/PlanosdeAula/Plano01+atividadeTaieiras.pdf',
        tags: [
          'Taieiras',
          'Ensino Fundamental',
          'História',
          'Geografia',
          'Religiosidade',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 2',
        src: '/atividades-educacionais/Taieiras/PlanosdeAula/Planodeaula02-Taieiras.pdf',
        tags: [
          'Taieiras',
          'Ensino Fundamental',
          'História',
          'Cultura',
          'Patrimônio Imaterial',
          'Laranjeiras',
        ],
      },
      {
        name: 'Plano de aula 3',
        src: '/atividades-educacionais/Taieiras/PlanosdeAula/planodeaula03Taieiras.pdf',
        tags: [
          'Taieiras',
          'Ensino Fundamental',
          'História',
          'Matemática',
          'Patrimônio Cultural',
          'Laranjeiras',
        ],
      },
    ],
  },
]
