'use client'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'

export function PaginationTest({
  items,
  pageIndex,
  pageSize,
  totalPages,
}: {
  items: number
  pageIndex: number
  totalPages: number
  pageSize: number
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  function updateParams(newParams: { page?: number; pageSize?: number }) {
    if (newParams.page) params.set('page', String(newParams.page))
    if (newParams.pageSize) {
      params.set('pageSize', String(newParams.pageSize))
      params.set('page', '1')
    }
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex text-sm items-center justify-between text-zinc-500">
      <span>
        Showing {pageSize} of {items} items
      </span>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <Select
            value={String(pageSize)}
            onValueChange={value => updateParams({ pageSize: Number(value) })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <span>
          Page {pageIndex} of {totalPages}
        </span>
        <div className="space-x-1.5">
          <Button
            onClick={() => updateParams({ page: 1 })}
            size="icon"
            disabled={pageIndex <= 1}
          >
            <ChevronsLeft className="size-4" />
            <span className="sr-only">First page</span>
          </Button>
          <Button
            onClick={() => updateParams({ page: pageIndex - 1 })}
            size="icon"
            disabled={pageIndex <= 1}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <Button
            onClick={() => updateParams({ page: pageIndex + 1 })}
            size="icon"
            disabled={pageIndex >= totalPages}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next page</span>
          </Button>
          <Button
            onClick={() => updateParams({ page: totalPages })}
            size="icon"
            disabled={pageIndex >= totalPages}
          >
            <ChevronsRight className="size-4" />
            <span className="sr-only">Last page</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
