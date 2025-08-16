'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear authentication state
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userEmail')
    
    // Clear cookie
    document.cookie = 'isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    
    // Redirect to login
    router.push('/auth/login')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="flex items-center space-x-2"
    >
      <LogOut className="h-4 w-4" />
      <span>Sign Out</span>
    </Button>
  )
}

