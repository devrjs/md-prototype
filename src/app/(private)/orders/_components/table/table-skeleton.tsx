import { Skeleton } from '@/components/ui/skeleton'

export function TableSkeleton() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="w-full overflow-hidden rounded-lg border">
        <table className="w-full caption-bottom text-sm">
          <thead className="sticky top-0 z-10 bg-muted [&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              />
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-24" />
              </th>
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-16" />
              </th>
              <th
                className="h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              >
                <Skeleton className="h-4 w-20" />
              </th>
              <th
                className="h-10 w-[40px] whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                colSpan={1}
              />
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {Array.from({ length: 10 }).map((_, index) => (
              <tr
                key={Number(index)}
                className="relative z-0 border-b transition-colors data-[state=selected]:bg-muted"
              >
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-8 w-8 rounded-md" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-32" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-24" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-16" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-6 w-20 rounded-md" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
                  <Skeleton className="h-4 w-20" />
                </td>
                <td className="whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">
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
