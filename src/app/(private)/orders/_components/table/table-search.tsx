import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export function TableSearch() {
  return (
    <Input
      // id={`${id}-input`}
      // ref={inputRef}
      className={cn(
        'peer min-w-60 ps-9 bg-background bg-gradient-to-br from-accent/60 to-accent'
        // Boolean(table.getColumn('name')?.getFilterValue()) && 'pe-9'
      )}
      // value={(table.getColumn('name')?.getFilterValue() ?? '') as string}
      // onChange={e =>
      //   table.getColumn('name')?.setFilterValue(e.target.value)
      // }
      placeholder="Pesquisa"
      type="text"
      aria-label="Pesquisa"
    />
  )
}
