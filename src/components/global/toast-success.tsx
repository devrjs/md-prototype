import { CircleCheckBig } from 'lucide-react'

export function ToastSuccess({ description }: { description: string }) {
  return (
    <div className='rounded-lg border border-green-400 bg-green-200 p-2 px-3 shadow-lg'>
      <span className='flex items-center font-medium text-green-900 text-sm'>
        <CircleCheckBig className='mr-3 size-4 text-green-500' /> {description}
      </span>
    </div>
  )
}
