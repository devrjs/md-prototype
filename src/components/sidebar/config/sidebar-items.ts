import {
  IconHelp,
  IconSettings,
  IconShoppingBag,
  IconTags,
  IconTruckDelivery,
  IconUsers,
} from '@tabler/icons-react'

export const sidebarItems = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  basicRegistration: [
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
  ],
  sales: [
    {
      name: 'Conferência de vendas',
      url: 'orders',
      icon: IconShoppingBag,
    },
  ],
  shipments: [
    {
      name: 'Controle de envios',
      url: 'shipments',
      icon: IconTruckDelivery,
    },
  ],
  navBottomItems: [
    {
      title: 'Configurações',
      url: 'settings',
      icon: IconSettings,
    },
    {
      title: 'Ajuda',
      url: '#',
      icon: IconHelp,
    },
  ],
}
