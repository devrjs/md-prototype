'use client'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@/components/ui/table'
import { useIsMobile } from '@/hooks/use-mobile'
import { getOrdersId } from '@/http/kubb'
import { IconPhoto, IconSearch } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'

interface TableCellViewerProps {
  itemId: string
}

export function TableItemViewer({ itemId }: TableCellViewerProps) {
  const isMobile = useIsMobile()

  const { data: orderData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ['order', itemId],
    queryFn: async () => await getOrdersId(itemId),
  })

  return (
    <Drawer direction={isMobile ? 'bottom' : 'right'}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="size-8">
          <IconSearch className="size-4" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1">
          <DrawerTitle>ID: {itemId}</DrawerTitle>
          <DrawerDescription>Pedido: [item]</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          {orderData?.items.map(item => (
            <div key={item.id} className="overflow-hidden">
              <Table className="w-full table-fixed text-center border-separate">
                <TableBody>
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="pt-2 font-medium text-xs text-start border-b whitespace-pre-wrap break-words"
                    >
                      {item.name}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    {/* Coluna da imagem */}
                    <TableHead
                      rowSpan={2}
                      className="align-center text-center w-24 border rounded bg-gray-100"
                    >
                      <IconPhoto className="size-4" />
                    </TableHead>

                    {/* Cabeçalhos */}
                    <TableHead className="font-bold">QTDE</TableHead>
                    <TableHead className="font-bold">PREÇO</TableHead>
                    <TableHead className="font-bold">DESCONTO</TableHead>
                  </TableRow>
                  <TableRow>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>R$ {item.unit_price}</TableCell>
                    <TableCell>R$ {item.unit_price}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ))}

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Input id="header" defaultValue={orderData?.items[0].name} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="type">Type</Label>
                <Select defaultValue={itemId}>
                  <SelectTrigger id="type" className="w-full">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Table of Contents">
                      Table of Contents
                    </SelectItem>
                    <SelectItem value="Executive Summary">
                      Executive Summary
                    </SelectItem>
                    <SelectItem value="Technical Approach">
                      Technical Approach
                    </SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Capabilities">Capabilities</SelectItem>
                    <SelectItem value="Focus Documents">
                      Focus Documents
                    </SelectItem>
                    <SelectItem value="Narrative">Narrative</SelectItem>
                    <SelectItem value="Cover Page">Cover Page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue={itemId}>
                  <SelectTrigger id="status" className="w-full">
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Done">Done</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Not Started">Not Started</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="target">Target</Label>
                <Input id="target" defaultValue={itemId} />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="limit">Limit</Label>
                <Input id="limit" defaultValue={itemId} />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="reviewer">Reviewer</Label>
              <Select defaultValue={itemId}>
                <SelectTrigger id="reviewer" className="w-full">
                  <SelectValue placeholder="Select a reviewer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Eddie Lake">Eddie Lake</SelectItem>
                  <SelectItem value="Jamik Tashpulatov">
                    Jamik Tashpulatov
                  </SelectItem>
                  <SelectItem value="Emily Whalen">Emily Whalen</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button onClick={() => toast.success('Changes saved successfully')}>
            Submit
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Done</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
