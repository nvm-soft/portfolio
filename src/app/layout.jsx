import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Nvm Soft',
    default: 'Nvm Soft - Software development firm based on Bangladesh',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-primary text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
