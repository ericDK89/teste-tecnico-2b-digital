import {Product} from '@/app/(pages)/(home)/page';
import {JSX} from 'react';
import Card from '../Card';
import styles from './styles.module.css';

type ShowcaseProps = {
    title: string
    products: Product[]
}

/**
 * Renders the Showcase component.
 *
 * @param {ShowcaseProps} props - The props for the Showcase component.
 * @return {JSX.Element} The rendered Showcase component.
 */
export default function Showcase({
  title,
  products,
}: ShowcaseProps): JSX.Element {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.context}>
        {products.map((product: Product) => {
          return (
            <Card
              key={product.id}
              images={product.images}
              installmentPrice={product.installmentPrice}
              price={product.price}
              tags={product.tags}
              title={product.name}
              numberOfInstallments={product.numberOfInstallments}
              oldPrice={product.oldPrice}
              promotionOffer={product.promotionOffer}
              sizes={product.sizes}
            />
          );
        })}
      </div>
    </section>
  );
}
