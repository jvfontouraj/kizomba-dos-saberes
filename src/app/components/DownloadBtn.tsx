import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/app/components/ui/tooltip'
import { DownloadIcon } from '@radix-ui/react-icons'
// import Link from 'next/link'

interface DownloadBtnProps {
  href: string
}

export function DownloadBtn({ href }: DownloadBtnProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a href={href} download>
            <DownloadIcon className="text-neutral-50" />
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Baixar conteúdo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
