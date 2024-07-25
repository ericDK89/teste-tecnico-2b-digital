'use client';

import {createSlug} from '@/app/utils/createSlug';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import {JSX} from 'react';
import Tag from '../Tag';
import styles from './styles.module.css';

type CardProps = {
    id: number;
    tags: string[];
    title: string;
    oldPrice?: number;
    price: number;
    numberOfInstallments?: number;
    installmentPrice?: number;
    promotionOffer?: number;
    sizes: string[],
    images: {
        showcase: string;
        productPage: string;
    };
};

/**
 * Card component.
 *
 * @param {CardProps} props - The props for the Card component.
 * @return {JSX.Element} The rendered Card component.
 */
export default function Card({
  id,
  tags,
  title,
  oldPrice,
  price,
  numberOfInstallments,
  installmentPrice,
  images,
  promotionOffer,
  sizes,
}: CardProps): JSX.Element {
  const router = useRouter();

  const handleGoToProduct = async () => {
    try {
      const res = await fetch(`https://teste-tecnico-2b-digital-ldiq-jna5wr382-ericdk89s-projects.vercel.app/products/${id}`);

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      localStorage.setItem('product', JSON.stringify(data));
      console.log(data);
      console.log('slug', createSlug(data.name));
      router.push(`/${createSlug(data.name)}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container} onClick={handleGoToProduct}>
      <ul className={styles.list}>
        {promotionOffer && <Tag isOffer>{promotionOffer}%</Tag>}
        {tags.map((tag: string) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </ul>

      <Image
        src={images.showcase}
        alt={title}
        title={title}
        width={275}
        height={275}
        className={styles.image}
      />

      <ul className={styles.sizes}>
        {sizes.map((size: string) => {
          return <li key={size}>{size}</li>;
        })}
      </ul>

      <h3 className={styles.title}>{title}</h3>

      <div className={styles['price-box']}>
        {oldPrice && <span className={styles['old-price']}>{oldPrice}</span>}
        <strong className={styles.price}>{price}</strong>
      </div>

      <p className={styles.installments}>
        Em até {numberOfInstallments}x de
        <span> {installmentPrice}</span>
      </p>

      <div className={styles['buy-box']}>
        <button className={styles['buy-button']} type='button'>
            Comprar
        </button>
      </div>
    </div>
  );
}
