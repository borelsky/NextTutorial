import { Metadata } from 'next';

// handling metadata for Customers only
export const metadata: Metadata = {
  title: 'Customers',
};
export default function Page() {
  return <p>Customers Page</p>;
}
