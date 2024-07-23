import Image from 'next/image';
import {JSX} from 'react';
import Tag from '../Tag';
import styles from './styles.module.css';

type CardProps = {
    tags: string[];
    title: string;
    oldPrice?: number;
    price: number;
    numberOfInstallments?: number;
    installmentPrice?: number;
    promotionOffer?: number;
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
  tags,
  title,
  oldPrice,
  price,
  numberOfInstallments,
  installmentPrice,
  images,
  promotionOffer,
}: CardProps): JSX.Element {
  console.log(images.showcase);

  return (
    <div className={styles.container}>
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
      />

      <h3 className={styles.title}>{title}</h3>
      <div className={styles['price-box']}>
        {oldPrice && <span className={styles['old-price']}>{oldPrice}</span>}
        <strong className={styles.price}>{price}</strong>
      </div>
      <p className={styles.installments}>
        Em até {numberOfInstallments}x de
        <span> {installmentPrice}</span>
      </p>
    </div>
  );
}
