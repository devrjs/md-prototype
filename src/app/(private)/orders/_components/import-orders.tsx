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
import { useEffect } from 'react'
import { toast } from 'sonner'
import { importShopeeOrders } from '../_actions/import-shopee-orders'

export function ImportOrders() {
  const [{ success, message, errors }, handleSubmit, isPending] =
    useFormState(importShopeeOrders)

  useEffect(() => {
    if (success) {
      toast.custom(
        () => <ToastSuccess description="Pedidos importados com sucesso!" />,
        { duration: 3500 }
      )
    } else {
      toast.warning(message, {
        duration: 7000,
      })
    }
  }, [success, message])

  return (
    <div className="px-6 pt-4 flex justify-between gap-6 items-center">
      <div className="bg-accent rounded-md p-2 gap-1 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="flex gap-2">
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
          <Button className="cursor-pointer" disabled={isPending}>
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
