import { Icons } from '@/components/global/icons'
import { env } from '@/env'
import { CircleArrowLeft } from 'lucide-react'

export const BLUR_FADE_DELAY = 0.15

export const siteConfig = {
  name: 'mdsistema',
  description: 'Automate your workflow with AI',
  url: env.NEXT_PUBLIC_APP_URL,
  keywords: [
    'E-commerce',
    'Gestão',
    'Venda',
    'Loja Online',
    'Controle de Estoque',
    'Sistema para E-commerce',
  ],
  links: {
    email: 'support@mdsistema',
    twitter: 'https://twitter.com/',
    discord: 'https://discord.gg/',
    github: 'https://github.com/',
    instagram: 'https://instagram.com/',
  },
  header: [
    {
      trigger: 'Como Funciona',
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: 'Como Funciona o MD Sistema',
          description:
            'Economize dinheiro e aumente suas vendas com uma ferramenta única para gerenciar seu e-commerce.',
          href: '#',
        },
        items: [
          {
            href: '#',
            title: 'Faça o Cadastro',
            description:
              'Cadastro simples e otimizado com as informações necessárias para abrir sua loja.',
          },
          {
            href: '#',
            title: 'Configure sua Loja',
            description:
              'Configure as informações da sua loja e adicione seus produtos para iniciar suas vendas.',
          },
          {
            href: '#',
            title: 'Comece a Vender!',
            description:
              'Pronto! Comece a divulgar sua loja e participe da revolução dos e-commerces.',
          },
        ],
      },
    },
    {
      trigger: 'Solutions',
      content: {
        items: [
          {
            title: 'For Small Businesses',
            href: '#',
            description: 'Tailored automation solutions for growing companies.',
          },
          {
            title: 'Enterprise',
            href: '#',
            description: 'Scalable AI automation for large organizations.',
          },
          {
            title: 'Developers',
            href: '#',
            description: 'API access and integration tools for developers.',
          },
          {
            title: 'Healthcare',
            href: '#',
            description: 'Specialized automation for healthcare workflows.',
          },
          {
            title: 'Finance',
            href: '#',
            description: 'AI-driven process automation for financial services.',
          },
          {
            title: 'Education',
            href: '#',
            description:
              'Streamline administrative tasks in educational institutions.',
          },
        ],
      },
    },
    {
      href: '/blog',
      label: 'Blog',
    },
  ],
  pricing: [
    {
      name: 'BASIC',
      href: '#',
      price: '$19',
      period: 'month',
      yearlyPrice: '$16',
      features: [
        '1 User',
        '5GB Storage',
        'Basic Support',
        'Limited API Access',
        'Standard Analytics',
      ],
      description: 'Perfect for individuals and small projects',
      buttonText: 'Subscribe',
      isPopular: false,
    },
    {
      name: 'PRO',
      href: '#',
      price: '$49',
      period: 'month',
      yearlyPrice: '$40',
      features: [
        '5 Users',
        '50GB Storage',
        'Priority Support',
        'Full API Access',
        'Advanced Analytics',
      ],
      description: 'Ideal for growing businesses and teams',
      buttonText: 'Subscribe',
      isPopular: true,
    },
    {
      name: 'ENTERPRISE',
      href: '#',
      price: '$99',
      period: 'month',
      yearlyPrice: '$82',
      features: [
        'Unlimited Users',
        '500GB Storage',
        '24/7 Premium Support',
        'Custom Integrations',
        'AI-Powered Insights',
      ],
      description: 'For large-scale operations and high-volume users',
      buttonText: 'Subscribe',
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: 'What is mdsistema?',
      answer: (
        <span>
          mdsistema is a platform that helps you build and manage your
          AI-powered applications. It provides tools and services to streamline
          the development and deployment of AI solutions.
        </span>
      ),
    },
    {
      question: 'How can I get started with mdsistema?',
      answer: (
        <span>
          You can get started with mdsistema by signing up for an account on our
          website, creating a new project, and following our quick-start guide.
          We also offer tutorials and documentation to help you along the way.
        </span>
      ),
    },
    {
      question: 'What types of AI models does mdsistema support?',
      answer: (
        <span>
          mdsistema supports a wide range of AI models, including but not
          limited to natural language processing, computer vision, and
          predictive analytics. We continuously update our platform to support
          the latest AI technologies.
        </span>
      ),
    },
    {
      question: 'Is mdsistema suitable for beginners in AI development?',
      answer: (
        <span>
          Yes, mdsistema is designed to be user-friendly for both beginners and
          experienced developers. We offer intuitive interfaces, pre-built
          templates, and extensive learning resources to help users of all skill
          levels create AI-powered applications.
        </span>
      ),
    },
    {
      question: 'What kind of support does mdsistema provide?',
      answer: (
        <span>
          mdsistema provides comprehensive support including documentation,
          video tutorials, a community forum, and dedicated customer support. We
          also offer premium support plans for enterprises with more complex
          needs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: 'Product',
      links: [
        { href: '#', text: 'Features', icon: null },
        { href: '#', text: 'Pricing', icon: null },
        { href: '#', text: 'Documentation', icon: null },
        { href: '#', text: 'API', icon: null },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '#', text: 'About Us', icon: null },
        { href: '#', text: 'Careers', icon: null },
        { href: '#', text: 'Blog', icon: null },
        { href: '#', text: 'Press', icon: null },
        { href: '#', text: 'Partners', icon: null },
      ],
    },
    {
      title: 'Resources',
      links: [
        { href: '#', text: 'Community', icon: null },
        { href: '#', text: 'Contact', icon: null },
        { href: '#', text: 'Support', icon: null },
        { href: '#', text: 'Status', icon: null },
      ],
    },
    {
      title: 'Social',
      links: [
        {
          href: '#',
          text: 'Twitter',
          icon: <CircleArrowLeft />,
        },
        {
          href: '#',
          text: 'Instagram',
          icon: <CircleArrowLeft />,
        },
        {
          href: '#',
          text: 'Youtube',
          icon: <CircleArrowLeft />,
        },
      ],
    },
  ],
}

export type SiteConfig = typeof siteConfig
