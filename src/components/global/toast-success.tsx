import { CircleCheckBig } from 'lucide-react'

export function ToastSuccess({ description }: { description: string }) {
  return (
    <div className="bg-green-200 border border-green-400 p-2 px-3 rounded-lg shadow-lg">
      <span className="text-sm font-medium text-green-900 flex items-center">
        <CircleCheckBig className="size-4 mr-3 text-green-500" /> {description}
      </span>
    </div>
  )
}
