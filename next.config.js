const path = require('path')

module.exports = { 
  eslint: { 
    ignoreDuringBuilds: true 
  }, 
  // Removed output: "export" to enable server-side rendering for full Next.js functionality
  // Removed trailingSlash: true to fix Vercel deployment 404 issues
  images: { 
    unoptimized: true 
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/lib': path.resolve(__dirname, 'src/lib'),
      '@/app': path.resolve(__dirname, 'src/app'),
    }
    return config
  }
}
