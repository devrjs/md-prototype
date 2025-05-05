import { Skeleton } from '@/components/ui/skeleton'

export function TableSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-6 md:gap-6">
      <div className="w-full overflow-hidden rounded-lg border">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&_tr]:border-b bg-muted sticky top-0 z-10">
            <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              />
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-24" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-20" />
              </th>
              <th
                className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] w-[40px]"
                colSpan={1}
              />
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {Array.from({ length: 10 }).map((_, index) => (
              <tr
                key={Number(index)}
                className="data-[state=selected]:bg-muted border-b transition-colors relative z-0"
              >
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-8 w-8 rounded-md" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-6 w-20 rounded-md" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-20" />
                </td>
                <td className="p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-8 w-8 rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
