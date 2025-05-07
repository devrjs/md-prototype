import {
  IconShoppingBag,
  IconTags,
  IconTruckDelivery,
  IconUsers,
} from '@tabler/icons-react'

export const sidebarItems = {
  geral: [
    {
      name: 'Pessoas',
      url: 'people',
      icon: IconUsers,
    },
    {
      name: 'Produtos',
      url: 'products',
      icon: IconTags,
    },
    {
      name: 'Conferência de vendas',
      url: 'orders',
      icon: IconShoppingBag,
    },
    {
      name: 'Controle de envios',
      url: 'shipments',
      icon: IconTruckDelivery,
    },
  ],
}
