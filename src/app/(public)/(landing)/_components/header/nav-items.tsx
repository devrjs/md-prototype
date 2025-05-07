'use client'

import Link from 'next/link'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { siteConfig } from '../site-config'

export default function NavItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {siteConfig.header.map((item, index) => (
          <NavigationMenuItem key={Number(index)}>
            {item.trigger ? (
              <>
                <NavigationMenuTrigger>{item.trigger}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={`grid gap-3 p-6 ${
                      item.content.main
                        ? 'md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                        : 'w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]'
                    }`}
                  >
                    {item.content.main && (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-primary/10 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={item.content.main.href}
                          >
                            {item.content.main.icon}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {item.content.main.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {item.content.main.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    )}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <span>ok</span>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
