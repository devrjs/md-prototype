'use client'

import { getProducts } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { TableSkeleton } from './table-skeleton'
import { TableContainer } from './table/table-container'

export function TableData() {
  const searchParams = useSearchParams()
  const pageIndex = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('pageSize')) || 10

  const { data: productsData, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', pageIndex, pageSize],
    queryFn: async () => await getProducts({ pageIndex, perPage: pageSize }),
  })

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {isLoadingProducts ? (
        <TableSkeleton />
      ) : (
        <TableContainer
          data={productsData?.products ?? []}
          pagination={{ pageIndex, pageSize }}
          rowCount={productsData?.totalCount ?? 0}
        />
      )}
    </div>
  )
}
