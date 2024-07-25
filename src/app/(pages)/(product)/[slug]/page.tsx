import Description from '@/app/components/product/Description';
import Showcase from '@/app/components/product/Showcase';
import Image from 'next/image';
import {JSX} from 'react';
import styles from './styles.module.css';

/**
 * Renders the product page.
 * @return {JSX.Element} The product page component.
 */
export default function Product(): JSX.Element {
  return (
    <>
      <main className={styles.container}>
        <div className={styles['images-box']}>
          <div>
            <ul className={styles['list-images']}>
              <li>
                <Image
                  src='/images/products/showcase/T-Shirt-Preta.png'
                  alt='T-Shirt-Preta'
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src='/images/products/showcase/T-Shirt-Preta.png'
                  alt='T-Shirt-Preta'
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>

              <li>
                <Image
                  src='/images/products/showcase/T-Shirt-Preta.png'
                  alt='T-Shirt-Preta'
                  width={64}
                  height={64}
                  quality={50}
                />
              </li>
            </ul>
          </div>

          <Image
            src='/images/products/product-page/T-Shirt-Preta.png'
            alt='T-Shirt-Preta'
            width={500}
            height={500}
            quality={100}
          />
        </div>

        <aside className={styles.context}>
          <div className={styles.about}>
            <h1>T-Shirt Unissex 2b Yourself Preta Estampa Grafismo</h1>
            <p>Ref.: 2B2022TIB</p>
          </div>

          <div className={styles['price-box']}>
            <span className={styles['old-price']}>R$ 99,90</span>
            <p className={styles.price}>R$ 99,00</p>
            <p className={styles.installment}>
                Em até 3x de
              <span> R$ 33,00</span>
            </p>
          </div>

          <div>
            <div className={styles.size}>
              <p>Tamanho</p>
              <span>Selecione</span>
            </div>

            <div className={styles['size-options']}>
              <ul>
                <li><button>P</button></li>
                <li><button>M</button></li>
                <li><button>G</button></li>
                <li><button>GG</button></li>
                <li><button>XG</button></li>
              </ul>
            </div>

            <div>
              <button className={styles['add-to-cart']}>
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
      <Showcase />
    </>
  );
}
