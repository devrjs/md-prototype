'use client'

import DatePicker from '@/components/global/date-picker'
import { ToastSuccess } from '@/components/global/toast-success'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormState } from '@/hooks/use-form-state'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { DateRange } from 'react-day-picker'
import { toast } from 'sonner'
import { importShopeeOrders } from '../_actions/import-shopee-orders'

export function ImportOrders() {
  const [date, setDate] = useState<DateRange | undefined>()

  const [{ success, message, errors }, handleSubmit, isPending] =
    useFormState(importShopeeOrders)

  useEffect(() => {
    if (success && !isPending) {
      toast.custom(
        () => <ToastSuccess description="Pedidos importados com sucesso!" />,
        { duration: 3500 }
      )
    }

    if (!success && !isPending && message) {
      toast.warning(message, {
        duration: 7000,
      })
    }
  }, [success, message, isPending])

  return (
    <div className="px-6 pt-4 flex justify-between gap-6 items-center">
      <div className="bg-accent rounded-md p-2 gap-1 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="hidden"
            name="orderPeriodStartDate"
            value={date?.from?.toISOString() ?? ''}
          />
          <input
            type="hidden"
            name="orderPeriodEndDate"
            value={date?.to?.toISOString() ?? ''}
          />
          <div className="flex flex-col gap-0.5">
            <DatePicker date={date} setDate={setDate} />
            {errors?.orderPeriodStartDate && (
              <span className="text-xs px-2 font-medium text-red-500 dark:text-red-400">
                {errors.orderPeriodStartDate[0]}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <Select name="platform">
              <SelectTrigger className="w-[190px] bg-background cursor-pointer">
                <SelectValue placeholder="Selecione a plataforma" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="shopee">Shopee</SelectItem>
                  <SelectItem value="mercado-livre">Mercado Livre</SelectItem>
                  <SelectItem value="tray">Tray</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors?.platform && (
              <span className="text-xs px-2 font-medium text-red-500 dark:text-red-400">
                {errors.platform[0]}
              </span>
            )}
          </div>

          <Button
            type="submit"
            className="w-24 bg-amber-500 hover:bg-orange-400 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              'Importar'
            )}
          </Button>
          <Button type="button" className="cursor-pointer" disabled={isPending}>
            Atualizar Importados
          </Button>
        </form>
      </div>
      <Button className="bg-emerald-500 hover:bg-emerald-400 cursor-pointer">
        Novo Pedido
      </Button>
    </div>
  )
}
