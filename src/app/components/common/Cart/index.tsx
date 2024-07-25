'use client';

import {Minus, Plus} from '@phosphor-icons/react';
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
    <>
      <div className={`${styles.overlay} ${isCartOpen && styles.show}`} />
      <form className={`${styles.container} ${isCartOpen ? styles.open : ''}`}>
        <button
          className={styles['close-cart-button']}
          onClick={handleCloseCart}>
          <Image
            src='/images/icons/close.png'
            width={9}
            height={9}
            alt='Fechar carrinho'
          />
        </button>

        <div className={styles.context}>
          <h2 className={styles.title}>Meu Carrinho</h2>

          <ul className={styles.list}>
            <li className={styles.item}>
              <Image
                src='/images/products/showcase/T-Shirt-Preta.png'
                alt='Produto'
                width={90}
                height={90}
              />
              <div>
                <div className={styles['product-main']}>
                  <div>
                    <p className={styles.name}>
                    T-shirt Unissex 2b Yourself Preta Estampa Grafismo
                    </p>
                    <p className={styles.size}>Tamanho: 44</p>
                  </div>

                  <button className={styles['trash-button']}>
                    <Image
                      src='/images/icons/trash.png'
                      width={16}
                      height={16}
                      alt='Deletar produto'
                    />
                  </button>
                </div>

                <footer className={styles['product-footer']}>
                  <div className={styles.quantity}>
                    <button className={styles['remove-button']}>
                      <Minus size={12} weight='bold' />
                    </button>
                    <span>1</span>
                    <button className={styles['add-button']}>
                      <Plus size={14} weight='bold' />
                    </button>
                  </div>

                  <div className={styles['prices-box']}>
                    <p className={styles['old-price']}>R$ 152,00</p>
                    <p className={styles.price}>R$ 99,00</p>
                  </div>
                </footer>
              </div>
            </li>
          </ul>

          <footer className={styles['cart-footer']}>
            <div className={styles['sub-total']}>
              <span>Subtotal</span>
              <p className={styles['sub-total-price']}>R$ 168,70</p>
            </div>

            <button
              type='submit'
              className={styles['checkout-button']}>
            Finalizar Compra
            </button>
          </footer>
        </div>
      </form>
    </>
  );
}
