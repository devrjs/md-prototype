'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
import { toast } from 'sonner'

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
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          {orderData?.items.map(item => (
            <div
              key={item.id}
              className='rounded-t-2xl rounded-b border bg-accent/50'
            >
              <Table className='w-full table-fixed border-separate text-center'>
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className='whitespace-pre-wrap break-words border-b pt-2 text-start font-medium text-xs'
                    >
                      {item.name}
                    </TableCell>
                  </TableRow>

                  <TableRow className="text-xs">
                    <TableHead
                      colSpan={2}
                      className='whitespace-pre-wrap break-words border text-center font-bold'
                    >
                      SKU
                    </TableHead>
                    <TableHead
                      colSpan={2}
                      className='border text-center font-bold'
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
                      className='borders w-24 rounded bg-gray-100 px-0 align-center'
                    >
                      <div className='flex w-full flex-col items-center justify-center text-muted-foreground/80'>
                        <IconPhoto className="size-8" />
                        <span className="self-center">sem imagem</span>
                      </div>
                    </TableHead>

                    <TableHead className='whitespace-pre-wrap break-words border text-center font-bold'>
                      QUANT.
                    </TableHead>
                    <TableHead className='border text-center font-bold'>
                      PREÇO
                    </TableHead>
                    <TableHead className='border text-center font-bold'>
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

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="limit">Taxa da plataforma</Label>
              <span>
                {orderData?.order_payment?.total_platform_fee_with_discounts}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <Label htmlFor="target">Valor Recebido</Label>
              <span>{orderData?.order_payment?.amount_received_from_sale}</span>
            </div>

            <span>
              {Number(orderData?.order_payment?.amount_received_from_sale) +
                Number(
                  orderData?.order_payment?.total_platform_fee_with_discounts
                )}
            </span>
          </div>
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
