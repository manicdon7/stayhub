import '@/app/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import ClientBody from '@/app/ClientBody';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StayHub | Find Unique Accommodations',
  description: 'Discover and book unique accommodations around the world on StayHub.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientBody>
          <Toaster position="top-center" />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
        </ClientBody>
      </body>
    </html>
  );
}
