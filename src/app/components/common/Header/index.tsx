'use client';

import {X} from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import {JSX, useState} from 'react';
import Circle from '../../home/Circle';
import Cart from '../Cart';
import styles from './styles.module.css';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} JSX element representing the header.
 */
export default function Header(): JSX.Element {
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpne] = useState(false);

  const handleCloseCart = () => {
    setIsCartOpne(false);
  };

  return (
    <header className={styles.container}>
      <div className={styles['free-shipping-bar']}>
        <p>
          <strong>Frete Grátis </strong>
          para compras a partir de R$ 199!
        </p>
      </div>

      <nav className={styles['nav-bar']}>
        <Image
          src='/images/logo/logotipo-header.png'
          width={140}
          height={32}
          alt='2bStore'
          title='2bStore'
          quality={50}
        />

        <div
          className={`
            ${styles.hamburger}
            ${isCategoriesMenuOpen ? styles.hidden : ''}
        `}
          onClick={() => setIsCategoriesMenuOpen(true)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <button
          className={`
                ${styles['close-categoieries-button']} 
                ${isCategoriesMenuOpen ? styles.visible : ''}
            `}
          onClick={() => setIsCategoriesMenuOpen(false)}>
          <X size={24} />
        </button>

        <ul
          className={`
          ${styles.list} 
          ${isCategoriesMenuOpen ? styles.open : ''}
        `}>
          <li>
            <Link href='#'>Masculino</Link>
          </li>
          <li>
            <Link href='#'>Feminino</Link>
          </li>
          <li>
            <Link href='#'>Plus Size</Link>
          </li>
          <li>
            <Link href='#'>Juvenil</Link>
          </li>
          <li>
            <Link href='#'>Infantil</Link>
          </li>
          <li>
            <Link href='#'>Acessórios</Link>
          </li>
          <li>
            <Link href='#'>Ofertas</Link>
          </li>
        </ul>

        <div
          className={styles.cart}
          onClick={() => setIsCartOpne(true)}
        >
          <Image
            src='/images/icons/cart.png'
            alt='Carrinho'
            title='Carrinho'
            width={19}
            height={24}
          />
          <Circle amount={0} />
        </div>
      </nav>

      <Cart isCartOpen={isCartOpen} handleCloseCart={handleCloseCart}/>
    </header>
  );
}
