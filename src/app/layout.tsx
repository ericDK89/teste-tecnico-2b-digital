import type {Metadata} from 'next';
import {Urbanist} from 'next/font/google';
import {JSX, ReactNode} from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import './styles/globals.css';

// eslint-disable-next-line new-cap
const urbanist = Urbanist({subsets: ['latin']});

export const metadata: Metadata = {
  title: '2bStore',
  description: 'A 2bstore é a sua loja de moda online que traz uma seleção ' +
    'incrível de produtos para todos os estilos e personalidades. ',
};

/**
 * Root layout component.
 *
 * @param {Readonly<{ children: ReactNode; }>} props - The component props.
 * @return {JSX.Element} The rendered layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <body className={urbanist.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
