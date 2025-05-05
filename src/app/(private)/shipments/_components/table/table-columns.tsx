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
    id: 'viewer',
    cell: ({ row }) => {
      return <TableItemViewer itemId={row.original.id} />
    },
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs lg:pr-2">{row.original.id}</span>
    ),
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
