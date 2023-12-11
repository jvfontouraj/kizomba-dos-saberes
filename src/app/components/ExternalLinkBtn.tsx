import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface ExternalLinkBtnProps {
  href: string
}

export function ExternalLinkBtn({ href }: ExternalLinkBtnProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link href={href} target="_blank">
            <ExternalLinkIcon className="text-neutral-50" />
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Ir para página do jogo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
