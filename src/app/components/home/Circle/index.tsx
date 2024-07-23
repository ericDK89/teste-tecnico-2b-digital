import {JSX} from 'react';
import styles from './styles.module.css';

type CircleProps = {
    amount: number
}

/**
 * Renders a circle component.
 *
 * @param {CircleProps} props - The props for the Circle component.
 * @return {JSX.Element} The rendered Circle component.
 */
export default function Circle({amount}: CircleProps): JSX.Element {
  return <div className={styles.circle}>{amount}</div>;
}
