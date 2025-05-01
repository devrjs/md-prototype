'use client'

import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'

import type { OrderItem } from './schema'
import { TableActions } from './table-actions'
// Importação dos componentes modulares
import { getColumns } from './table-columns'
import { TableControls } from './table-controls'
import { TablePagination } from './table-pagination'

export function TableMain({
  data: initialData = [],
  initialPageIndex,
  initialPageSize,
  pageCount,
  totalCount,
}: {
  data?: OrderItem[]
  initialPageIndex: number
  initialPageSize: number
  pageCount: number
  totalCount: number
}) {
  // Estados para controle da tabela
  const [data, setData] = React.useState(() => initialData || [])
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
  })

  // Obter as colunas da tabela
  const columns = React.useMemo(() => getColumns(), [])

  // Configuração da tabela usando TanStack Table
  const table = useReactTable({
    data,
    columns,
    pageCount,
    rowCount: totalCount,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: row => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <>
      <TableControls table={table} />
      <div className="flex flex-col gap-4 px-6 md:gap-6">
        <div className="overflow-hidden rounded-lg border">
          <TableActions table={table} data={data} setData={setData} />
        </div>
        <TablePagination table={table} />
      </div>
    </>
  )
}
