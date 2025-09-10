// Performance optimization utilities

export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return

  // Preload critical images
  const criticalImages = [
    '/favicon.webp',
    '/icon.webp',
    '/adaptive-icon.webp'
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    link.type = 'image/webp'
    document.head.appendChild(link)
  })
}

export const deferNonCriticalScripts = () => {
  if (typeof window === 'undefined') return

  // Defer non-critical scripts until after page load
  const scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {
    if (script.getAttribute('data-defer') === 'true') {
      script.defer = true
    }
  })
}

export const optimizeImages = () => {
  if (typeof window === 'undefined') return

  // Lazy load images that are not in viewport
  const images = document.querySelectorAll('img[data-src]')
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }
}

export const preloadNextPage = (href: string) => {
  if (typeof window === 'undefined') return

  // Preload next page resources on hover
  const link = document.createElement('link')
  link.rel = 'prefetch'
  link.href = href
  document.head.appendChild(link)
}

export const optimizeWebVitals = () => {
  if (typeof window === 'undefined') return

  // Optimize CLS by reserving space for dynamic content
  const dynamicElements = document.querySelectorAll('[data-dynamic-height]')
  dynamicElements.forEach(element => {
    const height = element.getAttribute('data-dynamic-height')
    if (height) {
      (element as HTMLElement).style.minHeight = height
    }
  })
}

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  if (typeof window === 'undefined') return

  // Run optimizations after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources()
      deferNonCriticalScripts()
      optimizeImages()
      optimizeWebVitals()
    })
  } else {
    preloadCriticalResources()
    deferNonCriticalScripts()
    optimizeImages()
    optimizeWebVitals()
  }
}
