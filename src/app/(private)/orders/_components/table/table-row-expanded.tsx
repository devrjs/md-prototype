'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import { getOrdersId } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import type { Row } from '@tanstack/react-table'
import type { TableItemType } from './table-schema'

interface TableRowExpandedProps {
  row: Row<TableItemType>
}

export function TableRowExpanded({ row }: TableRowExpandedProps) {
  const { data: orderData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['order', row.original.id],
    queryFn: async () => await getOrdersId(row.original.id),
  })

  return (
    <TableRow>
      <TableCell
        colSpan={row.getVisibleCells().length}
        className="p-4 bg-muted/30"
      >
        <div className="text-primary/80 flex items-start py-2">
          <div className="ml-7 flex flex-col gap-2 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium">Número do Pedido:</span>{' '}
                {orderData?.order_payment?.buyer_payment_method}
              </div>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  )
}
