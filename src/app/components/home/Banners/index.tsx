import Image from 'next/image';
import {JSX} from 'react';
import styles from './styles.module.css';

/**
 * Renders the Banners component.
 * @return {JSX.Element} The rendered Banners component.
 */
export default function Banners(): JSX.Element {
  return (
    <section className={styles.container}>
      <Image
        src='/images/banners/banner-camisetas.png'
        alt='Camisetas'
        title='Camisetas'
        width={291}
        height={350}
      />
      <Image
        src='/images/banners/banner-canecas.png'
        alt='Canecas'
        title='Canecas'
        width={291}
        height={350}
      />
      <Image
        src='/images/banners/banner-squeeze.png'
        alt='Squeeze'
        title='Squeeze'
        width={291}
        height={350}
      />
      <Image
        src='/images/banners/banner-bottons.png'
        alt='Bottons'
        title='Bottons'
        width={291}
        height={350}
      />
    </section>
  );
}
