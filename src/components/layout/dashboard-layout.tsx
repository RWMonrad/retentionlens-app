'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  TrendingUp,
  Target,
  AlertTriangle,
  HelpCircle,
  Menu,
  X,
  Crown
} from 'lucide-react'
import { Button } from '../ui/button'
import { LogoutButton } from '../auth/logout-button'
import { isAdmin } from '../../lib/auth'
import { useState, useEffect } from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  { name: 'Customers', href: '/customers', icon: Users },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Benchmarking', href: '/benchmarking', icon: Target },
  { name: 'Metrics', href: '/metrics', icon: BarChart3 },
  { name: 'Alerts', href: '/alerts', icon: AlertTriangle },
  { name: 'Settings', href: '/settings', icon: Settings },
]

const publicNavigation = [
  { name: 'Hovedside', href: '/', icon: HelpCircle },
  { name: 'Priser', href: '/pricing', icon: HelpCircle },
  { name: 'Support', href: '/help', icon: HelpCircle },
]

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [userIsAdmin, setUserIsAdmin] = useState(false)

  useEffect(() => {
    setUserIsAdmin(isAdmin())
  }, [])

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
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/logo_retentionlens.png"
                alt="RetentionLens"
                className="h-24 w-auto cursor-pointer"
              />
            </Link>
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
                    "group flex items-center px-2 py-2 text-sm font-light rounded-md",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Offentlige Sider
              </p>
              {publicNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
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
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <img
                src="/logo_retentionlens.png"
                alt="RetentionLens"
                className="h-24 w-auto cursor-pointer"
              />
            </Link>
          </div>
          <nav className="flex-1 space-y-1 px-2 py-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-2 py-2 text-sm font-light rounded-md",
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      isActive ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500"
                    )}
                  />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Offentlige Sider
              </p>
              {publicNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-2 py-2 text-sm font-light rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">U</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">User</p>
                <p className="text-xs text-gray-500">user@company.com</p>
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
            <div className="flex flex-1">
              {/* Search could go here */}
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <Button variant="ghost" size="sm">
                <HelpCircle className="h-5 w-5" />
              </Button>
              {userIsAdmin && (
                <Link href="/admin" className="ml-2">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 border-red-200 text-red-700 hover:bg-red-50">
                    <Crown className="h-4 w-4" />
                    <span>Admin Panel</span>
                  </Button>
                </Link>
              )}
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

