'use client'

import { getCustomers } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { TableSkeleton } from './table-skeleton'
import { TableContainer } from './table/table-container'

export function TableData() {
  const searchParams = useSearchParams()
  const pageIndex = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('pageSize')) || 10

  const { data: customersData, isLoading: isLoadingCustomers } = useQuery({
    queryKey: ['customers', pageIndex, pageSize],
    queryFn: async () => await getCustomers({ pageIndex, perPage: pageSize }),
  })

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {isLoadingCustomers ? (
        <TableSkeleton />
      ) : (
        <TableContainer
          data={customersData?.customers ?? []}
          pagination={{ pageIndex, pageSize }}
          rowCount={customersData?.totalCount ?? 0}
        />
      )}
    </div>
  )
}
