'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { getOrders } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { TableMain } from './table/table-main'

export function OrderData() {
  const searchParams = useSearchParams()
  const pageIndex = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('pageSize')) || 10

  const { data: ordersData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex, perPage: pageSize }),
  })

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      {isLoadingOrders ? (
        <Skeleton className="h-8 w-full" />
      ) : (
        <TableMain data={ordersData?.orders} />
      )}
    </div>
  )
}
