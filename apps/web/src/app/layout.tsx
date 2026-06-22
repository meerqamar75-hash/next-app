import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
 title: { template: '%s | My Store', default: 'My Store' },
 description: 'A full-stack e-commerce store',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang='en' suppressHydrationWarning>
 <body className={inter.className}>
 <nav className='h-16 border-b flex items-center px-6 gap-6'>
 <a href='/' className='font-bold text-lg'>My Store</a>
 <a href='/products'>Products</a>
 <a href='/cart'>Cart</a>
 </nav>
 <main className='container mx-auto px-6 py-8'>{children}</main>
 </body>
 </html>
 );
}