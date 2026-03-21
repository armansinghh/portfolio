import type { Metadata } from 'next';

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://armansingh.me'),

  title: {
    default: 'Arman Singh — Full Stack Developer',
    template: '%s | Arman Singh',
  },

  description:
    'Arman Singh — full stack developer building modern web apps, UI systems, and experimenting with AI.',

  keywords: [
    'Arman Singh',
    'Portfolio',
    'Full Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Web Developer',
  ],

  authors: [{ name: 'Arman Singh' }],
  creator: 'Arman Singh',

  openGraph: {
    title: 'Arman Singh — Developer',
    description: 'Explore projects and work by Arman Singh',
    url: 'https://armansingh.me',
    siteName: 'Arman Singh Portfolio',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Arman Singh — Developer',
    description: 'Explore projects and work by Arman Singh',
  },
};