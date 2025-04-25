import { getOrders } from '@/http/kubb'

export default async function Order() {
  const data = await getOrders({ params: { pageIndex: '1' } })

  return (
    <div>
      <h1>{JSON.stringify(data, null, 2)}</h1>
    </div>
  )
}
