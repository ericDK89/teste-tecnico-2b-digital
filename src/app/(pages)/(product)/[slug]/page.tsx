'use client';

import Description from '@/app/components/product/Description';
import {ProductProps} from '@/app/context/CartContext';
import {useCart} from '@/app/hooks/useCart';
import {brl} from '@/app/utils/currency';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {JSX} from 'react';
import styles from './styles.module.css';

type IProduct = {
    data: ProductProps
}

/**
 * Renders a product component.
 *
 * @return {JSX.Element} The rendered product component.
 */
export default function Product(): JSX.Element {
  const router = useRouter();

  const item = localStorage.getItem('product') ?? null;
  const {data}: IProduct = item ? JSON.parse(item) : null;

  if (!data) {
    router.push('/');
  }

  const {addToCart} = useCart();

  const handleAddProduct = () => {
    addToCart(data);
  };

  return (
    <>
      <main className={styles.container}>
        <div className={styles['images-box']}>
          <div>
            <ul className={styles['list-images']}>
              <li>
                <Image
                  src={data.images.showcase}
                  alt={data.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src={data.images.showcase}
                  alt={data.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src={data.images.showcase}
                  alt={data.name}
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>
            </ul>
          </div>

          <Image
            src={data.images.productPage}
            alt={data.name}
            title={data.name}
            width={500}
            height={500}
            quality={100}
          />
        </div>

        <aside className={styles.context}>
          <div className={styles.about}>
            <h1>{data.name}</h1>
            <p>Ref.: 2B2022TIB</p>
          </div>

          <div className={styles['price-box']}>
            {data.promotionOffer && (
              <span className={styles['old-price']}>{brl(data.oldPrice)}</span>
            )}
            <p className={styles.price}>{brl(data.price)}</p>
            {data.installmentPrice && (
              <p className={styles.installment}>
                Em até {data.numberOfInstallments}x de
                <span> {brl(data.installmentPrice)}</span>
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
                {data.sizes.map((size: string) => {
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
                <div className={styles['freight-option']} data-option-one>
                  <p>Frete Expresse</p>
                  <span>2 à 6 dias</span>
                </div>

                <p className={styles['freight-price']}>R$ 15,00</p>
              </div>

              <div className={styles['freight-box']}>
                <div className={styles['freight-option']} data-option-two>
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
