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
import { differenceInMinutes, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronDown, ChevronUp, SquarePen, Trash } from 'lucide-react'
import type { TableItemType } from './table-schema'

export const tableColumns: ColumnDef<TableItemType>[] = [
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <Button
            className="size-7 shadow-none text-muted-foreground"
            size="icon"
            variant="outline"
            data-expanded={row.getIsExpanded()}
            {...{
              onClick: row.getToggleExpandedHandler(),
              'aria-expanded': row.getIsExpanded(),
              'aria-label': row.getIsExpanded()
                ? `Recolher detalhes do pedido ${row.original.id}`
                : `Expandir detalhes do pedido ${row.original.id}`,
            }}
          >
            <ChevronDown
              className="size-4 opacity-60 transition-transform duration-200 data-[expanded=true]:rotate-180"
              aria-hidden="true"
              data-expanded={row.getIsExpanded()}
            />
          </Button>
        )
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.original.id}</span>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
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
    accessorKey: 'número do pedido',
    header: 'Número do pedido',
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        {row.original.platform_order_details?.external_order_id}
        {differenceInMinutes(new Date(), new Date(row.original.created_at)) <=
          1 && (
          <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
            novo
          </span>
        )}
      </div>
    ),
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
            className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
            size="icon"
          >
            <IconDotsVertical />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32">
          <DropdownMenuItem className="cursor-pointer">
            <SquarePen className="mr-1 size-4" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" className="cursor-pointer">
            <Trash className="mr-1 size-4" />
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]
