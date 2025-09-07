'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Something went wrong!</h2>
        <p className="text-white/90 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try again
          </button>
          <Link 
            href="/en"
            className="btn-secondary"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
