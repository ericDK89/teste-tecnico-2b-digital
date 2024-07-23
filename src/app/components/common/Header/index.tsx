import Image from 'next/image';
import Link from 'next/link';
import {JSX} from 'react';
import Circle from '../../home/Circle';
import styles from './styles.module.css';

/**
 * Renders the header component.
 *
 * @return {JSX.Element} JSX element representing the header.
 */
export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles['free-shipping-bar']}>
        <p>
          <strong>Frete Grátis </strong>
          para compras a partir de R$ 199!
        </p>
      </div>

      <nav className={styles['nav-bar']}>
        <Image
          src='/images/logo/logotipo-header.png'
          width={140}
          height={32}
          alt='2bStore'
          title='2bStore'
          quality={50}
        />

        <ul className={styles.list}>
          <li>
            <Link href='#'>Masculino</Link>
          </li>
          <li>
            <Link href='#'>Feminino</Link>
          </li>
          <li>
            <Link href='#'>Plus Size</Link>
          </li>
          <li>
            <Link href='#'>Juvenil</Link>
          </li>
          <li>
            <Link href='#'>Infantil</Link>
          </li>
          <li>
            <Link href='#'>Acessórios</Link>
          </li>
          <li className={styles.offers}>
            <Link href='#'>Ofertas</Link>
          </li>
        </ul>

        <div className={styles.cart}>
          <Image
            src='/images/icons/cart.png'
            alt='Carrinho'
            title='Carrinho'
            width={19}
            height={24}
          />
          <Circle amount={0} />
        </div>
      </nav>
    </header>
  );
}
