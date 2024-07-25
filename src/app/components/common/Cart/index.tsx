'use client';

import {useCart} from '@/app/hooks/useCart';
import {brl} from '@/app/utils/currency';
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
  const {
    cart,
    total,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
  };

  const handleIncreaseQuantity = (id: string) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id: string) => {
    decreaseQuantity(id);
  };

  return (
    <>
      <div className={`${styles.overlay} ${isCartOpen && styles.show}`} />
      <form className={`${styles.container} ${isCartOpen ? styles.open : ''}`}>
        <button
          type='button'
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

          {cart.length === 0 && (
            <div className={styles['empty-cart-container']}>
              <p className={styles['empty-cart-title']}>
                Sua sacola está vazia!
              </p>
              <p className={styles['empty-cart-text']}>
                Continue navegando em nossa loja
                para descobrir promoções e os
                melhores produtos!
              </p>

              <button type='button'
                onClick={handleCloseCart}
              >
                Continuar comprando
              </button>
            </div>
          )}

          <ul className={styles.list}>
            {cart.map((product) => {
              return (
                <li className={styles.item} key={product.id}>
                  <Image
                    src={product.images.showcase}
                    alt='Produto'
                    width={90}
                    height={90}
                  />
                  <div>
                    <div className={styles['product-main']}>
                      <div>
                        <p className={styles.name}>{product.name}</p>
                        <p className={styles.size}>Tamanho: 44</p>
                      </div>

                      <button
                        className={styles['trash-button']}
                        onClick={() => handleRemoveFromCart(product.id)}
                      >
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
                        <button
                          type='button'
                          className={styles['remove-button']}
                          onClick={() => handleDecreaseQuantity(product.id)}
                        >
                          <Minus size={12} weight='bold' />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          type='button'
                          className={styles['add-button']}
                          onClick={() => handleIncreaseQuantity(product.id)}
                        >
                          <Plus size={14} weight='bold' />
                        </button>
                      </div>

                      <div className={styles['prices-box']}>
                        {product.oldPrice && (
                          <p className={styles['old-price']}>
                            {brl(product.oldPrice)}
                          </p>
                        )}
                        <p className={styles.price}>{brl(product.price)}</p>
                      </div>
                    </footer>
                  </div>
                </li>
              );
            })}
          </ul>

          {cart.length > 0 && (
            <footer className={styles['cart-footer']}>
              <div className={styles['sub-total']}>
                <span>Subtotal</span>
                <p className={styles['sub-total-price']}>{brl(total)}</p>
              </div>

              <button
                type='submit'
                className={styles['checkout-button']}
                onClick={() => {
                  clearCart();
                }}
              >
                Finalizar Compra
              </button>
            </footer>
          )}
        </div>
      </form>
    </>
  );
}
