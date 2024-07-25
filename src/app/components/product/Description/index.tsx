import {JSX} from 'react';
import styles from './styles.module.css';

/**
 * Renders the description section.
 * @return {JSX.Element} The rendered description section.
 */
export default function Description(): JSX.Element {
  return (
    <section className={styles.container}>
      <div className={styles.context}>
        <h2 className={styles.title}>Descrição</h2>

        <p className={styles.about}>
            T-shirt Unissex 2b Yourself Preta Estampa Grafismo Manga Curta.
            Desenvolvida em meia malha de algodão super cotton, a peça conta
            com a modelagem comfort, sendo um pouco mais ampla que a
            tradicional, além disso, na parte frontal exibe estampa localizada.
            As Camisetas 2b trazem o conforto extremo, ela é mais soltinha do
            corpo com corte reto e garante um caimento diferenciado ao vestir.
            Investir nessa camiseta é investir no essencial, no básico, e
            no atemporal.
        </p>

        <p className={styles.details}>
            Descrição cor: Preta  <br />
            Peso: 0.268 <br />
            Composição: 100% <br />
            Algodao Fabricante: Hering <br />
            Mercadoria: Nacional
        </p>
      </div>
    </section>
  );
}
