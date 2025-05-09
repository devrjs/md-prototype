'use client'

import { Separator } from '@/components/ui/separator'
import { TableCell, TableRow } from '@/components/ui/table'
import { getOrdersId } from '@/http/kubb'
import { useQuery } from '@tanstack/react-query'
import type { Row } from '@tanstack/react-table'
import { Calculator, CreditCard, Package } from 'lucide-react'
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
        className="p-0 bg-muted/30"
      >
        <div className="flex flex-row gap-3 overflow-x-auto pb-2 whitespace-nowrap">
          {orderData?.items.map(item => (
            <div
              key={item.id}
              className="bg-background rounded-lg p-3 shadow-sm inline-flex flex-col min-w-[200px] mr-3 last:mr-0"
            >
              <div className="flex justify-between items-center gap-2">
                <span className="font-medium text-sm truncate">
                  {item.name}
                </span>
                <span className="text-muted-foreground text-sm">
                  x{item.quantity}
                </span>
              </div>
              <Separator className="my-1.5" />
              <div className="space-y-1 text-xs">
                <div className="flex justify-between gap-2">
                  <span className="text-muted-foreground">SKU:</span>
                  <span className="font-mono">{item.variation_sku}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span>Preço:</span>
                  <span className="font-medium">
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(item.unit_price)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Pagamento */}
        <div className="space-y-4 md:space-y-6 min-w-[300px]">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Detalhes do Pagamento
          </h3>
          <div className="bg-background rounded-lg p-6 shadow-sm space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total do Pedido:</span>
                <span className="font-medium">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    Number(orderData?.order_payment?.total_order_price || 0)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Desconto Plataforma:</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    Number(orderData?.order_payment?.platform_discount || 0)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Desconto Vendedor:</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    Number(orderData?.order_payment?.seller_discount || 0)
                  )}
                </span>
              </div>
            </div>
            <Separator />
            <div className="flex justify-between font-medium">
              <span>Valor Recebido:</span>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(
                  Number(
                    orderData?.order_payment?.amount_received_from_sale || 0
                  )
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="space-y-4 md:space-y-6 min-w-[300px]">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Resumo Financeiro
          </h3>
          <div className="bg-background rounded-lg p-6 shadow-sm space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Taxas da Plataforma:</span>
                <span className="text-destructive">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    Number(orderData?.order_payment?.total_platform_fee || 0)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Moedas Plataforma:</span>
                <span>
                  {Number(orderData?.order_payment?.platform_coins || 0)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Valor Pago pelo Cliente:</span>
                <span className="text-primary">
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(
                    Number(orderData?.order_payment?.buyer_paid_amount || 0)
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </TableCell>
    </TableRow>
  )
}
