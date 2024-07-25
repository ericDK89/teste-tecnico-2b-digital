import Showcase from '@/app/components/product/Showcase';
import {JSX, ReactNode} from 'react';
import '../../styles/globals.css';

/**
 * Product layout component.
 *
 * @param {Readonly<{ children: ReactNode; }>} props - The component props.
 * @return {JSX.Element} The rendered layout.
 */
export default function ProductLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <div>
      {children}
      <Showcase />
    </div>
  );
}
