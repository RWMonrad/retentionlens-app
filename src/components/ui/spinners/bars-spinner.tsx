import { cn } from '../../../lib/utils'

interface BarsSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function BarsSpinner({ size = 'md', className }: BarsSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  }

  const barClasses = {
    sm: 'w-0.5',
    md: 'w-1',
    lg: 'w-1.5'
  }

  return (
    <div className={cn('flex items-center justify-center space-x-1', sizeClasses[size], className)}>
      <div className={cn('bg-current animate-pulse', barClasses[size], 'h-full')} style={{ animationDelay: '0ms', animationDuration: '1200ms' }} />
      <div className={cn('bg-current animate-pulse', barClasses[size], 'h-full')} style={{ animationDelay: '200ms', animationDuration: '1200ms' }} />
      <div className={cn('bg-current animate-pulse', barClasses[size], 'h-full')} style={{ animationDelay: '400ms', animationDuration: '1200ms' }} />
      <div className={cn('bg-current animate-pulse', barClasses[size], 'h-full')} style={{ animationDelay: '600ms', animationDuration: '1200ms' }} />
      <div className={cn('bg-current animate-pulse', barClasses[size], 'h-full')} style={{ animationDelay: '800ms', animationDuration: '1200ms' }} />
    </div>
  )
}

// Alternative bars spinner with bounce animation
export function BarsSpinnerHeight({ size = 'md', className }: BarsSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  const barClasses = {
    sm: 'w-0.5',
    md: 'w-1', 
    lg: 'w-1.5'
  }

  return (
    <div className={cn('flex items-end justify-center space-x-1', sizeClasses[size], className)}>
      <div className={cn('bg-current animate-bounce', barClasses[size], 'h-1/4')} style={{ animationDelay: '0ms' }} />
      <div className={cn('bg-current animate-bounce', barClasses[size], 'h-1/2')} style={{ animationDelay: '200ms' }} />
      <div className={cn('bg-current animate-bounce', barClasses[size], 'h-full')} style={{ animationDelay: '400ms' }} />
      <div className={cn('bg-current animate-bounce', barClasses[size], 'h-1/2')} style={{ animationDelay: '600ms' }} />
      <div className={cn('bg-current animate-bounce', barClasses[size], 'h-1/4')} style={{ animationDelay: '800ms' }} />
    </div>
  )
}

// Simple bars spinner for loading states
export function LoadingBars({ size = 'md', className }: BarsSpinnerProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-7 h-7'
  }

  return (
    <div className={cn('flex items-center justify-center space-x-0.5', sizeClasses[size], className)}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="bg-current w-0.5 h-full animate-pulse"
          style={{
            animationDelay: `${i * 150}ms`,
            animationDuration: '1000ms'
          }}
        />
      ))}
    </div>
  )
}

