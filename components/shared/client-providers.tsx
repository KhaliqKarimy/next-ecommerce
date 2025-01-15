'use client'
import React from 'react'
import useCartSidebar from '@/hooks/use-cart-sidebar'
import CartSidebar from './cart-sidebar'
// import { ThemeProvider } from './theme-provider'
import { Toaster } from '../ui/toaster'
// import AppInitializer from './app-initializer'
// import { ClientSetting } from '@/types'

export default function ClientProviders({
//   setting,
  children,
}: {
//   setting: ClientSetting
  children: React.ReactNode
}) {
  const isCartSidebarOpen = useCartSidebar()

  return (
    <>
        {isCartSidebarOpen ? (
          <div className='flex min-h-screen'>
             <div className='flex-1 overflow-hidden'>
                  {children}

             </div>
             <CartSidebar />
          </div>
        ) : (
          <div>{children}</div>
        )}
        <Toaster />
    </ >
    
  )
}