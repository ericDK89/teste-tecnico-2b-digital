import Image from 'next/image';
import {JSX} from 'react';
import styles from './styles.module.css';

/**
 * Footer component.
 * @return {JSX.Element} The rendered JSX element.
 */
export default function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <div>
        <h2 className={styles.agency}>© 2024 Agência 2B Digital</h2>
        <p
          className={styles.address}>
            Avenida Ibirapuera, 2315 - Moema, São Paulo
        </p>
        <p
          className={styles.about}>
            Loja fictícia desenvolvida para fins de estudos e testes
        </p>
      </div>

      <Image
        src='/images/logo/logotipo-footer.png'
        alt='2bdigital'
        title='2bdigital'
        width={158}
        height={40}
      />
    </footer>
  );
}
