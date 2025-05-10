'use client'

import DatePicker from '@/components/global/date-picker'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { ListFilter } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export function TableFilters() {
  const [date, setDate] = useState<DateRange | undefined>()

  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  function updateUrlParams(newParams: { search?: string }) {
    if (newParams.search) {
      params.set('search', String(newParams.search))
      params.set('page', '1')
    }

    router.push(`?${params.toString()}`)
  }

  function handleStatusChange(checked: boolean, value: string) {
    if (checked) {
      params.append('status', value)
    } else {
      params.delete('status')
    }
  }

  return (
    <div className="flex gap-4">
      <Input
        className="peer w-full max-w-80 bg-background bg-gradient-to-br from-accent/60 to-accent"
        placeholder="Pesquisar..."
        type="text"
        aria-label="Search"
      />
      <Button onClick={() => {}}>Pesquisar</Button>

      <DatePicker date={date} setDate={setDate} />

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-fit max-w-32 cursor-pointer">
            <ListFilter className="-ms-1.5 ml-0.5 size-5 text-muted-foreground/60" />
            Filtros
            {/* {selectedStatuses.length > 0 && ( */}
            <span className="-me-1 ms-1 inline-flex h-5 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] font-medium text-[0.625rem] text-muted-foreground/70">
              {/* {selectedStatuses.length} */}2
            </span>
            {/* )} */}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto min-w-36 p-3" align="end">
          <div className="space-y-3">
            <div className="font-medium text-muted-foreground/60 text-xs uppercase">
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
                  className="cursor-pointer"
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
                <Checkbox className="cursor-pointer" />
                <Label className="flex grow justify-between gap-2 font-normal">
                  Pronto para envio
                </Label>
              </div>
              {/* ))} */}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
