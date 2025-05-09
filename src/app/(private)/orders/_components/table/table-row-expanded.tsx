'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import { getOrdersId } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import type { Row } from '@tanstack/react-table'
import type { TableItemType } from './table-schema'

interface TableRowExpandedProps {
  row: Row<TableItemType>
}

export function TableRowExpanded({ row }: TableRowExpandedProps) {
  const { data: orderData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['order', row.original.id],
    queryFn: async () => await getOrdersId(row.original.id),
  })

  return (
    <TableRow>
      <TableCell
        colSpan={row.getVisibleCells().length}
        className="p-4 bg-muted/30"
      >
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            {orderData?.items.map(item => (
              <div key={item.id} className="flex flex-col">
                <span>order_id: {item.order_id}</span>
                <span>item_id: {item.id}</span>
                <span>name: {item.name}</span>
                <span>quantity: {item.quantity}</span>
                <span>unit_price: {item.unit_price}</span>
                <span>
                  unit_price_with_discount: {item.unit_price_with_discount}
                </span>
                <span>variation_sku: {item.variation_sku}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <span>
              amount_received_from_sale:{' '}
              {Number(orderData?.order_payment?.amount_received_from_sale)}
            </span>
            <span>
              buyer_paid_amount:{' '}
              {Number(orderData?.order_payment?.buyer_paid_amount)}
            </span>
            <span>
              platform_coins: {Number(orderData?.order_payment?.platform_coins)}
            </span>
            <span>
              platform_discount:{' '}
              {Number(orderData?.order_payment?.platform_discount)}
            </span>
            <span>
              seller_discount:{' '}
              {Number(orderData?.order_payment?.seller_discount)}
            </span>
            <span>
              total_order_price:{' '}
              {Number(orderData?.order_payment?.total_order_price)}
            </span>
            <span>
              total_platform_fee:{' '}
              {Number(orderData?.order_payment?.total_platform_fee)}
            </span>
            <span>
              total_platform_fee_with_discounts:{' '}
              {Number(
                orderData?.order_payment?.total_platform_fee_with_discounts
              )}
            </span>
          </div>
        </div>
      </TableCell>
    </TableRow>
  )
}
