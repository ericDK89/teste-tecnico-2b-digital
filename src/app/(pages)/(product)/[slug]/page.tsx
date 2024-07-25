'use client';

import Description from '@/app/components/product/Description';
// import {ProductProps} from '@/app/context/CartContext';
import {useCart} from '@/app/hooks/useCart';
import {brl} from '@/app/utils/currency';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {JSX} from 'react';
import styles from './styles.module.css';

// type IProduct = {
//     product: ProductProps
// }

/**
 * Renders a product component.
 *
 * @return {JSX.Element} The rendered product component.
 */
export default function Product(): JSX.Element {
  const router = useRouter();
  const {product} = useCart();

  if (!product) {
    router.push('/');
  }

  const {addToCart} = useCart();

  const handleAddProduct = () => {
    addToCart(product);
  };

  console.log(product);

  return (
    <>
      <main className={styles.container}>
        <div className={styles['images-box']}>
          <div>
            <ul className={styles['list-images']}>
              <li>
                <Image
                  src={product.images.showcase}
                  alt={product.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src={product.images.showcase}
                  alt={product.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src={product.images.showcase}
                  alt={product.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>
            </ul>
          </div>

          <Image
            src={product.images.productPage}
            alt={product.name}
            title={product.name}
            width={500}
            height={500}
            quality={100}
          />
        </div>

        <aside className={styles.context}>
          <div className={styles.about}>
            <h1>{product.name}</h1>
            <p>Ref.: 2B2022TIB</p>
          </div>

          <div className={styles['price-box']}>
            {product.promotionOffer && (
              <span className={styles['old-price']}>
                {brl(product.oldPrice)}
              </span>
            )}
            <p className={styles.price}>{brl(product.price)}</p>
            {product.installmentPrice && (
              <p className={styles.installment}>
                Em até {product.numberOfInstallments}x de
                <span> {brl(product.installmentPrice)}</span>
              </p>
            )}
          </div>

          <div>
            <div className={styles.size}>
              <p>Tamanho</p>
              <span>Selecione</span>
            </div>

            <div className={styles['size-options']}>
              <ul>
                {product.sizes.map((size: string) => {
                  return (
                    <li key={size}>
                      <button>{size}</button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <button
                className={styles['add-to-cart']}
                onClick={handleAddProduct}
              >
                Adicionar ao carrinho
              </button>
            </div>

            <p className={styles['calc-freight-paragraph']}>
                Calcular frete e prazo
            </p>

            <form className={styles.freight}>
              <input
                className={styles.cep}
                type='text'
                placeholder='00000-420'
              />
              <button type='submit'>Calcular</button>
              <button type='button'>Não sei o CEP</button>
            </form>

            <div className={styles['freight-wrapper']}>
              <div className={styles['freight-box']}>
                <div className={styles['freight-option']} product-option-one>
                  <p>Frete Expresse</p>
                  <span>2 à 6 dias</span>
                </div>

                <p className={styles['freight-price']}>R$ 15,00</p>
              </div>

              <div className={styles['freight-box']}>
                <div className={styles['freight-option']} product-option-two>
                  <p>Normal</p>
                  <span>4 à 15 dias</span>
                </div>

                <p className={styles['freight-price']}>R$ 15,00</p>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <Description />
      <div className={styles.divisor} />
    </>
  );
}
