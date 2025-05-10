'use client'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import {
  endOfDay,
  endOfMonth,
  endOfYear,
  startOfDay,
  startOfMonth,
  startOfYear,
  subDays,
  subMonths,
  subYears,
} from 'date-fns'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

interface DatePickerProps {
  date?: DateRange
  setDate: React.Dispatch<React.SetStateAction<DateRange | undefined>>
}

export default function DatePicker({ date, setDate }: DatePickerProps) {
  const today = new Date()
  const todayStart = startOfDay(today)
  const todayEnd = endOfDay(today)
  const yesterday = {
    from: startOfDay(subDays(today, 1)),
    to: endOfDay(subDays(today, 1)),
  }
  const last7Days = {
    from: startOfDay(subDays(today, 6)),
    to: todayEnd,
  }
  const last30Days = {
    from: startOfDay(subDays(today, 29)),
    to: todayEnd,
  }
  const monthToDate = {
    from: startOfDay(startOfMonth(today)),
    to: todayEnd,
  }
  const lastMonth = {
    from: startOfDay(startOfMonth(subMonths(today, 1))),
    to: endOfDay(endOfMonth(subMonths(today, 1))),
  }
  const yearToDate = {
    from: startOfDay(startOfYear(today)),
    to: todayEnd,
  }
  const lastYear = {
    from: startOfDay(startOfYear(subYears(today, 1))),
    to: endOfDay(endOfYear(subYears(today, 1))),
  }
  const [month, setMonth] = useState(today)

  return (
    <div className="*:not-first:mt-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-58 justify-start cursor-pointer"
          >
            <CalendarIcon
              size={16}
              className="-ms-1 shrink-0 opacity-40 transition-colors group-hover:text-foreground"
              aria-hidden="true"
            />
            <span className={cn('truncate', !date && 'text-muted-foreground')}>
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'dd MMM, y', { locale: ptBR })} -{' '}
                    {format(date.to, 'dd MMM, y', { locale: ptBR })}
                  </>
                ) : (
                  format(date.from, 'dd MMM, y', { locale: ptBR })
                )
              ) : (
                'Selecione um período'
              )}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <div className="flex max-sm:flex-col">
            <div className="relative py-4 max-sm:order-1 max-sm:border-t sm:w-32">
              <div className="h-full sm:border-e">
                <div className="flex flex-col px-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate({
                        from: todayStart,
                        to: todayEnd,
                      })
                      setMonth(today)
                    }}
                  >
                    Hoje
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(yesterday)
                      setMonth(yesterday.to)
                    }}
                  >
                    Ontem
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(last7Days)
                      setMonth(last7Days.to)
                    }}
                  >
                    Últimos 7 dias
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(last30Days)
                      setMonth(last30Days.to)
                    }}
                  >
                    Últimos 30 dias
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(monthToDate)
                      setMonth(monthToDate.to)
                    }}
                  >
                    Mês até hoje
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(lastMonth)
                      setMonth(lastMonth.to)
                    }}
                  >
                    Mês anterior
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(yearToDate)
                      setMonth(yearToDate.to)
                    }}
                  >
                    Ano até hoje
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => {
                      setDate(lastYear)
                      setMonth(lastYear.to)
                    }}
                  >
                    Ano anterior
                  </Button>
                </div>
              </div>
            </div>
            <Calendar
              mode="range"
              selected={date}
              onSelect={newDate => {
                if (newDate) {
                  // Ajustar para início e fim do dia
                  if (newDate.from) {
                    newDate.from = startOfDay(newDate.from)
                  }
                  if (newDate.to) {
                    newDate.to = endOfDay(newDate.to)
                  }
                  setDate(newDate)
                }
              }}
              month={month}
              onMonthChange={setMonth}
              className="p-2"
              disabled={[
                { after: today }, // Dates before today
              ]}
              locale={ptBR}
            />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
