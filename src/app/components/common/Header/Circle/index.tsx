import {useCart} from '@/app/hooks/useCart';
import {JSX} from 'react';
import styles from './styles.module.css';

/**
 * Renders a circle component.
 *
 * @return {JSX.Element} The rendered Circle component.
 */
export default function Circle(): JSX.Element {
  const {cart} = useCart();

  return <div className={styles.circle}>{cart.length}</div>;
}
