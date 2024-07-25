import {Product} from '@/app/(pages)/(home)/page';
import {brl} from '@/app/utils/currency';
import {JSX} from 'react';
import Card from '../../home/Card';
import styles from './styles.module.css';

/**
 * Renders the Showcase component.
 * @return {JSX.Element} representing the Showcase component.
 */
export default async function Showcase(): Promise<JSX.Element> {
  const res = await fetch('https://teste-tecnico-2b-digital-ldiq-jna5wr382-ericdk89s-projects.vercel.app/products', {
    method: 'GET',
    next: {
      revalidate: 24 * 60 * 60, // 24 hours
      tags: ['products'],
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Request-Headers': 'access-control-allow-origin',
    },
  });

  const data = await res.json();

  const products: Product[] = data
      .filter((product: Product) => product.category === 'bestSales')
      .map((product: Product) => {
        const formattedPrice = brl(product.price);
        const formattedOldPrice = brl(product.oldPrice);
        const formattedInstallmentPrice = brl(product.installmentPrice);

        return {
          id: product.id,
          name: product.name,
          price: formattedPrice,
          images: product.images,
          promotionOffer: product.promotionOffer,
          oldPrice: formattedOldPrice,
          numberOfInstallments: product.numberOfInstallments,
          installmentPrice: formattedInstallmentPrice,
          category: product.category,
          categoryId: product.categoryId,
          tags: product.tags,
          sizes: product.sizes,
        };
      });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Os mais vendidos</h2>

      <div className={styles.context}>
        {products.map((product: Product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
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
