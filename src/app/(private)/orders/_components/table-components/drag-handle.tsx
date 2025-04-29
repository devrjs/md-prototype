import { useSortable } from '@dnd-kit/sortable'
import { IconGripVertical } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'

// Componente para o manipulador de arrasto das linhas da tabela
export function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  })

  return (
    <Button
      {...attributes}
      {...listeners}
      variant="ghost"
      size="icon"
      className="text-muted-foreground size-7 hover:bg-transparent"
    >
      <IconGripVertical className="text-muted-foreground size-3" />
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}
