'use client'

import { ToastSuccess } from '@/components/global/toast-success'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useFormState } from '@/hooks/use-form-state'
import { getShopeeAuthUrl } from '@/http/kubb'
import { IconBrandShopee } from '@tabler/icons-react'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { connectShopee } from '../_actions/connect-shopee'

export function ShopeeConnection() {
  const [{ success, message, errors }, handleSubmit, isPending] =
    useFormState(connectShopee)

  function handleShopeeURL() {
    getShopeeAuthUrl().then(res => window.open(res.url, '_blank'))
  }

  useEffect(() => {
    if (success) {
      toast.custom(
        () => <ToastSuccess description="Shopee conectada com sucesso!" />,
        { duration: 3500 }
      )
    } else {
      toast.warning(message, {
        duration: 7000,
      })
    }
  }, [success, message])

  return (
    <>
      <div className="flex h-fit items-center justify-between rounded-xl bg-muted/50 p-4 md:min-h-min">
        <div className="flex items-center gap-6">
          <IconBrandShopee className="size-10 rounded-full bg-orange-400 p-1 text-white" />
          Shopee
        </div>
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => handleShopeeURL()}
        >
          Acessar URL
        </Button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex h-fit items-center justify-between rounded-xl bg-muted/50 p-4 md:min-h-min"
      >
        <div className="flex items-center gap-2">
          <Input name="code" id="code" type="text" placeholder="Code" />
          <Input name="shopId" id="shopId" type="text" placeholder="Shop ID" />
        </div>
        <Button variant="outline" className="cursor-pointer" type="submit">
          {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Conectar'}
        </Button>
      </form>
    </>
  )
}
