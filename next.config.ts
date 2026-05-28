const nextConfig = {
  serverExternalPackages: ['notion-client'],
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
    {
      source: '/api/(.*)',
      headers: [
        { key: 'X-Robots-Tag', value: 'noindex' },
      ],
    },
  ],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.discordapp.com' }],
  },
};

export default nextConfig;