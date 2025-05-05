import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  IconCircleCheckFilled,
  IconDotsVertical,
  IconLoader,
} from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SquarePen, Trash } from 'lucide-react'
import { TableItemViewer } from './table-item-viewer'
import type { TableItemType } from './table-schema'

export const tableColumns: ColumnDef<TableItemType>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs lg:pr-2">{row.original.id}</span>
    ),
  },
  {
    accessorKey: 'nome',
    header: 'Nome',
    cell: ({ row }) => row.original.name,
  },
  {
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>
            <SquarePen className="size-4 mr-1" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash className="size-4 mr-1" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
