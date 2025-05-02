'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from '@tabler/icons-react'
import type { Table } from '@tanstack/react-table'
import { useRouter, useSearchParams } from 'next/navigation'
import type { TableType } from './table-schema'

interface TablePaginationProps {
  table: Table<TableType>
}

export function TablePagination({ table }: TablePaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  function updateUrlParams(newParams: { page?: number; pageSize?: number }) {
    if (newParams.page) params.set('page', String(newParams.page))
    if (newParams.pageSize) {
      params.set('pageSize', String(newParams.pageSize))
      params.set('page', '1')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex items-center justify-end px-4">
      <div className="flex w-full items-center gap-8 lg:w-fit">
        <div className="hidden items-center gap-2 lg:flex">
          <Label htmlFor="rows-per-page" className="text-sm font-medium">
            Registros por página
          </Label>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={value => {
              const newSize = Number(value)
              table.setPageSize(newSize)
              updateUrlParams({
                pageSize: newSize,
              })
            }}
          >
            <SelectTrigger size="sm" className="w-20" id="rows-per-page">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map(pageSize => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-fit items-center justify-center text-sm font-medium">
          Página {table.getState().pagination.pageIndex} de{' '}
          {table.getPageCount()}
        </div>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              table.setPageIndex(0)
              updateUrlParams({
                page: 1,
              })
            }}
            disabled={table.getState().pagination.pageIndex <= 1}
          >
            <span className="sr-only">Ir para primeira página</span>
            <IconChevronsLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              table.previousPage()
              const newIndex = table.getState().pagination.pageIndex - 1
              if (newIndex >= 0) {
                updateUrlParams({
                  page: newIndex,
                })
              }
            }}
            disabled={table.getState().pagination.pageIndex <= 1}
          >
            <span className="sr-only">Ir para página anterior</span>
            <IconChevronLeft />
          </Button>
          <Button
            variant="outline"
            className="size-8"
            size="icon"
            onClick={() => {
              table.nextPage()
              const newIndex = table.getState().pagination.pageIndex + 1
              updateUrlParams({
                page: newIndex,
              })
            }}
            disabled={
              table.getState().pagination.pageIndex >= table.getPageCount()
            }
          >
            <span className="sr-only">Ir para próxima página</span>
            <IconChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden size-8 lg:flex"
            size="icon"
            onClick={() => {
              const lastPageIndex = table.getPageCount()
              table.setPageIndex(lastPageIndex)
              updateUrlParams({
                page: lastPageIndex,
              })
            }}
            disabled={
              table.getState().pagination.pageIndex >= table.getPageCount()
            }
          >
            <span className="sr-only">Ir para última página</span>
            <IconChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
