import {JSX, ReactNode} from 'react';
import styles from './styles.module.css';

type TagProps = {
    children: ReactNode
    isOffer?: boolean
}

/**
 * Renders a tag component.
 *
 * @param {TagProps} props - The tag component props.
 * @return {JSX.Element} The rendered tag component.
 */
export default function Tag({children, isOffer}: TagProps): JSX.Element {
  return (
    <li
      className={styles.container}
      data-isoffer={isOffer}>
      <p>{children}</p>
    </li>
  );
}
