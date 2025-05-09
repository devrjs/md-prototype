
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { applyBrazilianCNPJMask } from '@/utils/apply-brazilian-cnpj-mask'
import { applyBrazilianCPFMask } from '@/utils/apply-brazilian-cpf-mask'
import {
  IconDotsVertical,
} from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'
import { SquarePen, Trash } from 'lucide-react'
import type { TableItemType } from './table-schema'

export const tableColumns: ColumnDef<TableItemType>[] = [
  // {
  //   id: 'viewer',
  //   cell: ({ row }) => {
  //     return <TableItemViewer itemId={row.original.id} />
  //   },
  //   enableHiding: false,
  // },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs lg:pr-6">{row.original.id}</span>
    ),
  },
  {
    accessorKey: 'nome',
    header: 'Nome',
    cell: ({ row }) => row.original.name,
  },
  {
    accessorKey: 'CPF/CPNJ',
    header: 'CPF/CNPJ',
    cell: ({ row }) => {
      if (row.original.document.length === 11) {
        return applyBrazilianCPFMask(row.original.document)
      }

      return applyBrazilianCNPJMask(row.original.document)
    },
  },
  {
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className='flex size-8 text-muted-foreground data-[state=open]:bg-muted'
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem>
            <SquarePen className='mr-1 size-4' />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash className='mr-1 size-4' />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
