'use client'

import DatePicker from '@/components/global/date-picker'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { postShopeeOrderImport } from '@/http/kubb'
import { useMutation } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

export function ImportOrders() {
  const { data: orderImport, isPending: isImportingOrders } = useMutation({
    mutationFn: async () =>
      await postShopeeOrderImport({
        orderPeriodStartDate: '2023-01-01',
        orderPeriodEndDate: '2023-01-01',
      }),
  })

  return (
    <div className="px-6 pt-4 flex justify-between gap-6 items-center">
      <div className="bg-accent rounded-md p-2 gap-1 flex flex-col justify-between">
        <div className="flex gap-2">
          <DatePicker />

          <Select>
            <SelectTrigger className="w-[190px] bg-background cursor-pointer">
              <SelectValue placeholder="Selecione a plataforma" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Shopee</SelectItem>
                <SelectItem value="banana">Mercado Livre</SelectItem>
                <SelectItem value="blueberry">Tray</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button
            className="bg-amber-500 hover:bg-orange-400 cursor-pointer"
            disabled={isImportingOrders}
          >
            {isImportingOrders ? <Loader2 className="" /> : 'Importar'}
          </Button>
          <Button className="cursor-pointer" disabled={isImportingOrders}>
            Atualizar Importados
          </Button>
        </div>
      </div>
      <Button className="bg-emerald-500 hover:bg-emerald-400 cursor-pointer">
        Novo Pedido
      </Button>
    </div>
  )
}
