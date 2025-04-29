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

import type { OrderItem } from './table-components/schema'
import { TableActions } from './table-components/table-actions'
// Importação dos componentes modulares
import { getColumns } from './table-components/table-columns'
import { TableHeader as TableControls } from './table-components/table-header'
import { TablePagination } from './table-components/table-pagination'

export function DataTable({
  data: initialData,
}: {
  data: OrderItem[]
}) {
  // Estados para controle da tabela
  const [data, setData] = React.useState(() => initialData)
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  // Obter as colunas da tabela
  const columns = React.useMemo(() => getColumns(), [])

  // Configuração da tabela usando TanStack Table
  const table = useReactTable({
    data,
    columns,
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
      <div className="overflow-hidden rounded-lg border">
        <TableActions table={table} data={data} setData={setData} />
      </div>
      {/* Paginação da tabela */}
      <TablePagination table={table} />
    </>
  )
}
