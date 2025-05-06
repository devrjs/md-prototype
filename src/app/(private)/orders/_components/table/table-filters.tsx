import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ListFilter } from 'lucide-react'

export function TableFilters() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="max-w-32 w-fit">
          <ListFilter className="size-5 ml-0.5 -ms-1.5 text-muted-foreground/60" />
          Filtros
          {/* {selectedStatuses.length > 0 && ( */}
          <span className="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
            {/* {selectedStatuses.length} */}2
          </span>
          {/* )} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto min-w-36 p-3" align="end">
        <div className="space-y-3">
          <div className="text-xs font-medium uppercase text-muted-foreground/60">
            Status
          </div>
          <div className="space-y-3">
            {/* {uniqueStatusValues.map((value, i) => ( */}
            <div className="flex items-center gap-2">
              <Checkbox
              // id={`${id}-${i}`}
              // checked={selectedStatuses.includes(value)}
              // onCheckedChange={(checked: boolean) =>
              //   handleStatusChange(checked, value)
              // }
              />
              <Label
                // htmlFor={`${id}-${i}`}
                className="flex grow justify-between gap-2 font-normal"
              >
                Processado{/* {value}{' '} */}
                {/* <span className="ms-2 text-xs text-muted-foreground"> */}
                {/* {statusCounts.get(value)} */}
                {/* </span> */}
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox />
              <Label className="flex grow justify-between gap-2 font-normal">
                Pronto para envio
              </Label>
            </div>
            {/* ))} */}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
