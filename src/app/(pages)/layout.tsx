'use client';

import {JSX, ReactNode} from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import {CartProvider} from '../context/CartContext';
import '../styles/globals.css';

/**
 * Main layout component.
 *
 * @param {Readonly<{ children: ReactNode; }>} props - The component props.
 * @return {JSX.Element} The rendered layout.
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <div>
      <CartProvider>
        <Header />
        {children}
        <Footer />
      </CartProvider>
    </div>
  );
}
