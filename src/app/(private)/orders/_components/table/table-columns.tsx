import {
  IconCircleCheckFilled,
  IconDotsVertical,
  IconLoader,
} from '@tabler/icons-react'
import type { ColumnDef } from '@tanstack/react-table'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { SquarePen, Trash } from 'lucide-react'
import type { OrderItem } from './schema'
import { TableCellViewer } from './table-cell-viewer'

// Definição das colunas da tabela
export const getColumns = (): ColumnDef<OrderItem>[] => [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={
  //           table.getIsAllPageRowsSelected() ||
  //           (table.getIsSomePageRowsSelected() && 'indeterminate')
  //         }
  //         onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
  //         aria-label="Select all"
  //       />
  //     </div>
  //   ),
  //   cell: ({ row }) => (
  //     <div className="flex items-center justify-center">
  //       <Checkbox
  //         checked={row.getIsSelected()}
  //         onCheckedChange={value => row.toggleSelected(!!value)}
  //         aria-label="Select row"
  //       />
  //     </div>
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    id: 'viewer',
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />
    },
    enableHiding: false,
  },
  {
    accessorKey: 'ID',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.original.id}</span>
    ),
  },
  {
    accessorKey: 'número do pedido',
    header: 'Número do pedido',
    cell: ({ row }) => row.original.platform_order_details?.external_order_id,
  },
  {
    accessorKey: 'plataforma',
    header: 'Plataforma',
    cell: ({ row }) =>
      row.original.platform_order_details?.platform_name || 'N/A',
  },
  {
    accessorKey: 'realizado há',
    header: 'Realizado há',
    cell: ({ row }) => {
      return formatDistanceToNow(new Date(row.original.order_placed_at), {
        locale: ptBR,
        addSuffix: true,
      })
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant="outline" className="text-muted-foreground px-1.5">
        {row.original.status === 'PROCESSED' ? (
          <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
        ) : (
          <IconLoader />
        )}
        {row.original.status}
      </Badge>
    ),
  },
  {
    accessorKey: 'transportadora',
    header: 'Transportadora',
    cell: ({ row }) => row.original.shipping_carrier,
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
