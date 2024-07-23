'use server';

import bannerPrincipal from '@/app/assets/banners/banner-principal.png';
import Banners from '@/app/components/home/Banners';
import Showcase from '@/app/components/home/Showcase';
import {brl} from '@/app/utils/currency';
import Image from 'next/image';
import {JSX} from 'react';
import styles from './styles.module.css';

export type Product = {
    id: number,
    name: string,
    price: number,
    images: {
        showcase: string,
        productPage: string
    },
    promotionOffer?: number,
    oldPrice?: number,
    numberOfInstallments?: number,
    installmentPrice?: number,
    category: 'unmissableOffers' | 'bestSales' | 'releases',
    categoryId: 1 | 2 | 3,
    tags: string[]
}

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export default async function Home(): Promise<JSX.Element> {
  const res = await fetch('http://localhost:5432/products', {
    method: 'GET',
    next: {
      revalidate: 1, // 24 hours
      tags: ['products'],
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });

  const data = await res.json();

  const releases: Product[] = data
      .filter((product: Product) => product.category === 'releases')
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
        };
      });

  const bestSales: Product[] = data
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
        };
      });

  const unmissableOffers: Product[] = data
      .filter((product: Product) => product.category === 'unmissableOffers')
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
        };
      });


  return (
    <>
      <div>
        <div>
          <Image
            // * necessário importar de forma estática pelo 'assets'
            // * para definir o width e height de forma responsiva
            src={bannerPrincipal}
            alt='2bStore'
            title='2bStore'
            style={{width: '100%', height: 'auto'}}
          />
        </div>

        <main className={styles.container}>
          <Showcase products={releases} title='Lançamentos' />
          <Showcase products={bestSales} title='Os Mais Vendidos' />
          <Banners />
          <Showcase products={unmissableOffers} title='Ofertas Imperdíveis' />
        </main>
      </div>
    </>
  );
}
