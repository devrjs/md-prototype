import { getOrders, getOrdersId } from '@/http/kubb'

export default async function Order() {
  const data = await getOrders()

  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  )
}
