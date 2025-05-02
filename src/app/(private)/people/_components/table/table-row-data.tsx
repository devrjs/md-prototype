import type { Row } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'

import { TableCell, TableRow } from '@/components/ui/table'

import type { OrderItem } from './schema'

interface OrderTableRowProps {
  row: Row<OrderItem>
}

export function TableRowData({ row }: OrderTableRowProps) {
  const cells = row.getVisibleCells() || []
  return (
    <TableRow>
      {cells.map(cell => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  )
}
