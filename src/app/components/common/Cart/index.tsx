'use client';

import {X} from '@phosphor-icons/react';
import Image from 'next/image';
import {JSX} from 'react';
import styles from './styles.module.css';

type CartProps = {
    isCartOpen: boolean;
    handleCloseCart: () => void;
};


/**
 * Renders the Cart component.
 *
 * @param {boolean} isCartOpen - Indicates whether the cart is open or not.
 * @param {Function} handleCloseCart - Function to handle closing the cart.
 * @return {JSX.Element} The rendered Cart component.
 */
export default function Cart({
  isCartOpen,
  handleCloseCart,
}: CartProps): JSX.Element {
  return (
    <form className={`${styles.container} ${isCartOpen ? styles.open : ''}`}>
      <button className={styles['close-cart-button']} onClick={handleCloseCart}>
        <X size={24} />
      </button>

      <div className={styles.context}>
        <h2>Meu Carrinho</h2>

        <ul>
          <li>
            <Image
              src='/images/products/showcase/T-Shirt-Preta.png'
              alt='Produto'
              width={50}
              height={50}
            />
            <div>
              <p>T-shirt Unissex 2b Yourself Preta Estampa Grafismo</p>
              <p>Tamanho: 44</p>
              <p>R$ 99,00</p>
            </div>
          </li>
        </ul>

        <div className={styles['sub-total']}>
          <p>Subtotal: R$ 168,70</p>
        </div>

        <button
          type='submit'
          className={styles['checkout-button']}>
            Finalizar Compra
        </button>
      </div>
    </form>
  );
}
