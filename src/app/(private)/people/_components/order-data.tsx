'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { getOrders } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { PaginationTest } from './pagination-test'
import { TableTest } from './table-test'
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
      {isLoadingOrders ? (
        <Skeleton className="h-8 w-full" />
      ) : (
        <TableTest data={ordersData?.orders ?? []} />
        // <TableMain
        //   data={ordersData?.orders}
        //   pageIndex={pageIndex}
        //   pageSize={pageSize}
        //   totalCount={ordersData?.totalCount ?? 0}
        //   pageCount={ordersData?.pageCount ?? 0}
        // />
        // <>
        //   {JSON.stringify(ordersData, null, 2)}
        //   <PaginationTest
        //     items={ordersData?.totalCount ?? 0}
        //     pageIndex={pageIndex}
        //     pageSize={pageSize}
        //     totalPages={ordersData?.pageCount ?? 0}
        //   />
        // </>
      )}
    </div>
  )
}
