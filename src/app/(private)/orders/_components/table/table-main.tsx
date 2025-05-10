'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  type PaginationState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Fragment, useMemo, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import DatePicker from '../../../../../components/global/date-picker'
import { tableColumns } from './table-columns'
import { TableFilters } from './table-filters'
import { TablePagination } from './table-pagination'
import { TableRowExpanded } from './table-row-expanded'
import type { TableItemType } from './table-schema'
import { TableSkeleton } from './table-skeleton'

export function TableMain({
  data,
  pagination,
  rowCount,
  isLoadingData,
}: {
  data: TableItemType[]
  pagination: PaginationState
  rowCount: number
  isLoadingData: boolean
}) {
  const columns = useMemo(() => tableColumns, [])

  const table = useReactTable({
    data,
    columns,
    rowCount,
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: row => true,
  })

  return (
    <div className="flex flex-col gap-4 px-6 md:gap-6">
      <TableFilters />
      {isLoadingData ? (
        <TableSkeleton />
      ) : (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="sticky top-0 z-10 bg-muted">
              {table.getHeaderGroups().map(headerGroup => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className={
                        index === headerGroup.headers.length - 1
                          ? 'w-[40px]'
                          : ''
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="**:data-[slot=table-cell]:first:w-8">
              {table.getRowModel().rows?.length ? (
                <>
                  {table.getRowModel().rows.map(row => (
                    <Fragment key={row.id}>
                      <TableRow
                        data-state={row.getIsSelected() && 'selected'}
                        className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
                      >
                        {row.getVisibleCells().map(cell => (
                          <TableCell
                            key={cell.id}
                            className={
                              cell.column.id === 'expander'
                                ? 'w-px py-0 pr-0'
                                : ''
                            }
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                      {row.getIsExpanded() && <TableRowExpanded row={row} />}
                    </Fragment>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Nenhum resultado encontrado.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}

      <TablePagination table={table} />
    </div>
  )
}
