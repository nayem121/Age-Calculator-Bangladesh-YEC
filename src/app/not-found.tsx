import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-white/90 mb-8">
          The page you are looking for doesn't exist.
        </p>
        <Link 
          href="/en"
          className="btn-primary"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
