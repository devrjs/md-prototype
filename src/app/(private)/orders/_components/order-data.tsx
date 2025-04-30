'use client'

import { getOrders } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import { TableMain } from './table/table-main'

export function OrderData() {
  const { data: result, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['orders' /*, pageIndex */],
    queryFn: () => getOrders(),
  })

  console.log(result)

  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <TableMain data={result?.orders} />
    </div>
  )
}
