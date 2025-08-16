'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
import {
  BarChart3,
  Users,
  Settings,
  Shield,
  Activity,
  Menu,
  X,
  Crown
} from 'lucide-react'
import { Button } from '../ui/button'
import { LogoutButton } from '../auth/logout-button'
import { Badge } from '../ui/badge'
import { useState } from 'react'

interface AdminLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Admin Dashboard', href: '/admin', icon: BarChart3 },
  { name: 'User Management', href: '/admin/users', icon: Users },
  { name: 'System Analytics', href: '/admin/analytics', icon: Activity },
  { name: 'Admin Settings', href: '/admin/settings', icon: Settings },
]

const quickLinks = [
  { name: 'Main Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Analytics', href: '/analytics', icon: Activity },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden",
        sidebarOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white">
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">Admin Panel</span>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-red-100 text-red-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      isActive ? "text-red-500" : "text-gray-400 group-hover:text-gray-500"
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Quick Links
              </p>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200">
          <div className="flex h-16 items-center px-4 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <Crown className="h-4 w-4 text-white" />
              </div>
              <span className="ml-2 text-lg font-semibold text-gray-900">Admin Panel</span>
              <Badge className="ml-2 bg-red-100 text-red-800 border-red-200">Admin</Badge>
            </div>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md",
                    isActive
                      ? "bg-red-100 text-red-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      isActive ? "text-red-500" : "text-gray-400 group-hover:text-gray-500"
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Quick Links
              </p>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-4 w-4 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-red-300 rounded-full flex items-center justify-center">
                <Crown className="h-4 w-4 text-red-700" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Rune W. Monrad</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 flex h-16 bg-white border-b border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden ml-4"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 justify-between px-4 lg:px-6">
            <div className="flex flex-1 items-center">
              <Badge className="bg-red-100 text-red-800 border-red-200">
                <Shield className="h-3 w-3 mr-1" />
                Admin Mode
              </Badge>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-2">
                <LogoutButton />
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 member-page">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

