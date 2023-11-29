import { Metadata } from 'next'
import { Template } from '../components/template'

const content = {
  title: 'Capoeira',
  text: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl. Donec euismod, nisl quis aliquam blandit, nunc nisl ultrices nunc, vitae aliquam nisl nunc vitae nisl.',
  ],
  details: {
    locais: 'Lorem Ipsum',
    festas: 'Lorem Ipsum',
    sedes: 'Lorem Ipsum',
  },
  refs: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
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
