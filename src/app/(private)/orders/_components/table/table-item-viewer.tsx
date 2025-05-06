'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import { useIsMobile } from '@/hooks/use-mobile'
import { getOrdersId } from '@/http/kubb'
import { formatToBRL } from '@/utils/format-to-brl'
import { IconPhoto, IconSearch } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'

interface TableCellViewerProps {
  itemId: string
}

export function TableItemViewer({ itemId }: TableCellViewerProps) {
  const isMobile = useIsMobile()

  const { data: orderData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['order', itemId],
    queryFn: async () => await getOrdersId(itemId),
  })

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="size-8">
          <IconSearch className="size-4" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>Detalhes do pedido</DrawerTitle>
          <DrawerDescription>ID: {itemId}</DrawerDescription>
          <DrawerDescription>
            Número do Pedido:{' '}
            {orderData?.platform_order_details?.external_order_id}
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm pb-6">
          {orderData?.items.map(item => (
            <div
              key={item.id}
              className="border rounded-t-2xl rounded-b bg-accent/50"
            >
              <Table className="w-full table-fixed text-center border-separate">
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="pt-2 font-medium text-xs text-start border-b whitespace-pre-wrap break-words"
                    >
                      {item.name}
                    </TableCell>
                  </TableRow>

                  <TableRow className="text-xs">
                    <TableHead
                      colSpan={2}
                      className="font-bold text-center border whitespace-pre-wrap break-words"
                    >
                      SKU
                    </TableHead>
                    <TableHead
                      colSpan={2}
                      className="font-bold border text-center"
                    >
                      PRATELEIRA
                    </TableHead>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell colSpan={2} className="border">
                      {item.variation_sku}
                    </TableCell>
                    <TableCell colSpan={2} className="border">
                      -
                    </TableCell>
                  </TableRow>

                  <TableRow className="text-xs">
                    <TableHead
                      rowSpan={2}
                      className="align-center px-0 w-24 borders rounded bg-gray-100"
                    >
                      <div className="w-full flex flex-col items-center justify-center text-muted-foreground/80">
                        <IconPhoto className="size-8" />
                        <span className="self-center">sem imagem</span>
                      </div>
                    </TableHead>

                    <TableHead className="font-bold border text-center whitespace-pre-wrap break-words">
                      QUANT.
                    </TableHead>
                    <TableHead className="font-bold border text-center">
                      PREÇO
                    </TableHead>
                    <TableHead className="font-bold border text-center">
                      DESCONTO
                    </TableHead>
                  </TableRow>
                  <TableRow className="text-xs">
                    <TableCell className="border">{item.quantity}</TableCell>
                    <TableCell className="border">
                      {formatToBRL(item.unit_price)}
                    </TableCell>
                    <TableCell className="border">
                      {formatToBRL(
                        item.unit_price - item.unit_price_with_discount
                      )}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}

          {/* <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="limit">1</Label>
              <span>
                {orderData?.order_payment?.total_platform_fee_with_discounts}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="target">2</Label>
              <span>{orderData?.order_payment?.amount_received_from_sale}</span>
            </div>
          </div> */}
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
            seller_discount: {Number(orderData?.order_payment?.seller_discount)}
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
        {/* <DrawerFooter>
          <Button onClick={() => toast.success('Changes saved successfully')}>
            Submit
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Done</Button>
          </DrawerClose>
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  )
}
