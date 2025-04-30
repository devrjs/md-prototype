'use client'

import type { UniqueIdentifier } from '@dnd-kit/core'
import { type Table, flexRender } from '@tanstack/react-table'

import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as UITable,
} from '@/components/ui/table'

import { OrderTableRow } from './order-table-row'
import type { OrderItem } from './schema'

interface TableActionsProps {
  table: Table<OrderItem>
  data: OrderItem[]
  setData: React.Dispatch<React.SetStateAction<OrderItem[]>>
}

export function TableActions({ table, data = [], setData }: TableActionsProps) {
  return (
    <UITable>
      <TableHeader className="bg-muted sticky top-0 z-10">
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => {
              return (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className={
                    index === headerGroup.headers.length - 1 ? 'w-[40px]' : ''
                  }
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="**:data-[slot=table-cell]:first:w-8">
        {(table.getRowModel().rows || [])?.length ? (
          <>
            {(table.getRowModel().rows || []).map(row => (
              <OrderTableRow key={row.id} row={row} />
            ))}
          </>
        ) : (
          <TableRow>
            <TableCell
              colSpan={table.getAllColumns().length}
              className="h-24 text-center"
            >
              Nenhum resultado encontrado.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </UITable>
  )
}
