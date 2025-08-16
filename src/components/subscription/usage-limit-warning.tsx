import { AlertTriangle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface UsageLimitWarningProps {
  feature: string
  currentUsage: number
  limit: number
  upgradeUrl?: string
}

export default function UsageLimitWarning({ 
  feature, 
  currentUsage, 
  limit, 
  upgradeUrl = '/pricing' 
}: UsageLimitWarningProps) {
  const usagePercentage = (currentUsage / limit) * 100
  const isNearLimit = usagePercentage >= 80
  const isAtLimit = currentUsage >= limit

  if (!isNearLimit) return null

  return (
    <div className={`rounded-lg border p-4 mb-6 ${
      isAtLimit 
        ? 'bg-red-50 border-red-200' 
        : 'bg-yellow-50 border-yellow-200'
    }`}>
      <div className="flex items-start space-x-3">
        <AlertTriangle className={`h-5 w-5 mt-0.5 ${
          isAtLimit ? 'text-red-600' : 'text-yellow-600'
        }`} />
        <div className="flex-1">
          <h3 className={`font-medium ${
            isAtLimit ? 'text-red-900' : 'text-yellow-900'
          }`}>
            {isAtLimit ? `${feature} Limit Reached` : `Approaching ${feature} Limit`}
          </h3>
          <p className={`text-sm mt-1 ${
            isAtLimit ? 'text-red-700' : 'text-yellow-700'
          }`}>
            You've used {currentUsage} of {limit} {feature.toLowerCase()} this month 
            ({Math.round(usagePercentage)}%).
            {isAtLimit && ' Upgrade to continue using this feature.'}
          </p>
          <div className="mt-3">
            <Link href={upgradeUrl}>
              <Button 
                size="sm" 
                className={
                  isAtLimit 
                    ? 'bg-red-600 hover:bg-red-700' 
                    : 'bg-yellow-600 hover:bg-yellow-700'
                }
              >
                Upgrade Plan
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

