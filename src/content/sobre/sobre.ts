type MediaType = 'video' | 'image' | 'none' | 'gallery'

type MediaItem = {
  src: string
  alt: string
}

type ContentTypes = {
  title: string
  text: string
  mediaType: MediaType
  media: MediaItem[]
}

export const content: ContentTypes[] = [
  {
    title: 'Lançamento do Projeto',
    text: 'O evento de lançamento do projeto aconteceu em Agosto de 2022, na Universidade Federal de Sergipe, e contou com a presença de Mãe Marizete, a mais antiga mãe de santo viva do candomblé sergipano, mestre Pedrinho Mendonça do grupo Burundanga, mestre Paulo Lobato do tambor de crioula e Michelle Pereira, dançarina afro e professora.',
    mediaType: 'video',
    media: [
      {
        src: 'YkFcbY0d3vY',
        alt: 'Vídeo do lançamento do projeto',
      },
    ],
  },
  {
    title: 'Oficina formativa com mestras e mestres dos saberes sergipanos',
    text: 'Em outubro de 2022, organizamos na Biblioteca Epiphânio Dória a oficina formativa “Educação e expressões culturais afro-sergipanas”, com a presença dos mestres João Babu do Batalhão de Bacamarteiros de Carmópolis, Genilson Mota do Samba de Aboio de Aguada, e Neilton Santana do São Gonçalo da Mussuca. Registra-se também a importante presença de Dona Maria José do Samba de Aboio, que encantou a todos com sua alegria, e recentemente fez sua passagem, tornando nossa atividade ainda mais relevante à medida que registramos sua voz e sua dança envolvente. Além destes mestres, o evento contou com a participação dos educadores João Mouzart, Lilian Teles e Firmino de Souza, que compartilharam a metodologia de ensino “parafuso” com os professores presentes.',
    mediaType: 'video',
    media: [
      {
        src: 'YkFcbY0d3vY',
        alt: 'Vídeo da oficina formativa com mestras e mestres dos saberes sergipanos',
      },
    ],
  },
  {
    title: 'Palestra com o doutor honoris causa Severo D’Acelino',
    text: 'Em novembro de 2022, organizamos a palestra “A perspectiva negra da História de Sergipe” com o doutor Honoris Causa Severo D’Acelino, ícone da resistência negra no estado e profundo conhecedor da história, além de poeta e escritor com foco na cultura africana.',
    mediaType: 'image',
    media: [
      {
        src: '/images/sobre/image11.webp',
        alt: 'Foto da palestra com o doutor honoris causa Severo D’Acelino',
      },
    ],
  },
  {
    title: 'Mini-curso de Kikongo',
    text: 'Ainda em novembro organizamos a oficina de língua Kikongo, com o professor angolano Nsimba José (Universidade Agostinho Neto), que durante oito horas/aula nos fez perceber como o português brasileiro é composto por diversas palavras centro-africanas, inclusive diversos nomes de locais do estado de Sergipe são provenientes do Kikongo. Esta foi a primeira iniciativa de ensino de uma língua africana na história da Universidade Federal de Sergipe, transmitida ao vivo pelo canal UFS no Youtube.',
    mediaType: 'none',
    media: [],
  },
  {
    title: 'Exibição de ﬁlme com debates com as realizadoras negras',
    text: 'Durante a exibimos o filme “O ano que onça descansou”, sobre o finado mestre Paizinho do Samba de Aboio, dirigido por sua neta Yérsia Assis, membro da família guardiã da manifestação e pesquisadora de pós-doutorado do projeto à época. Este evento contou com a participação da cineasta e doutoranda Luciana Oliveira e foi uma excelente oportunidade de refletir sobre a potencialidade do cinema para o ensino de cultura afro-brasileira',
    mediaType: 'image',
    media: [
      {
        src: '/images/sobre/image13.webp',
        alt: 'Foto da exibição de ﬁlme com debates com as realizadoras negras',
      },
    ],
  },
  {
    title: 'Oficina Educação e religiosidades afro-sergipanas',
    text: 'Em dezembro de 2022, realizamos a oficina “Educação e religiosidades afro-sergipanas”no terreiro Axé Obá Abassá Odê Bamirê, com a presença das lideranças Mãe Acácia (nossa anfitriã do Odê Bamirê), Yá Sônia Oliveira (Comunidade Oju Ifa), Yá Martha Salles (Casa de Mar), e da Egbomi e pesquisadora Díjna Torres.',
    mediaType: 'video',
    media: [
      {
        src: 'YkFcbY0d3vY',
        alt: 'Vídeo da oficina Educação e religiosidades afro-sergipanas',
      },
    ],
  },
  {
    title:
      'Curso de extensão Produção de materiais didáticos sobre a cultura afro-sergipana',
    text: 'Encontros semanais entre fevereiro e novembro de 2023 para a construção coletiva do conteúdo do site. Contamos com a colaboração de pesquisadores e detentores das tradições culturais:',
    mediaType: 'gallery',
    media: [
      {
        src: '/images/sobre/image4.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image8.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image9.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image1.webp',
        alt: 'foto do encontro do Kizomba',
      },
    ],
  },
  {
    title:
      'Curso de extensão Produção de materiais didáticos sobre a cultura afro-sergipana',
    text: 'Encontros semanais entre fevereiro e novembro de 2023 para a construção coletiva do conteúdo do site. Contamos com a colaboração de pesquisadores e detentores das tradições culturais:',
    mediaType: 'gallery',
    media: [
      {
        src: '/images/sobre/image5.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image7.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image2.webp',
        alt: 'foto do encontro do Kizomba',
      },
      {
        src: '/images/sobre/image10.webp',
        alt: 'foto do encontro do Kizomba',
      },
    ],
  },
]
