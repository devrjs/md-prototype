'use client'

import { getOrders } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { TableMain } from './table/table-main'

export function OrderData() {
  const searchParams = useSearchParams()
  const pageIndex = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('pageSize')) || 10

  const { data: ordersData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex, pageSize],
    queryFn: async () => await getOrders({ pageIndex, perPage: pageSize }),
  })

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <TableMain
        data={ordersData?.orders ?? []}
        pagination={{ pageIndex, pageSize }}
        rowCount={ordersData?.totalCount ?? 0}
        isLoadingData={isLoadingOrders}
      />
    </div>
  )
}
