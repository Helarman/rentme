'use client';

import { usePathname, useSearchParams } from 'next/navigation';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Economy',
    value: 'Economy',
  },
  {
    label: 'Standart',
    value: 'Standart',
  },
  {
    label: 'SUV',
    value: 'SUV'
  },
  {
    label: 'Premium',
    value: 'Premium'
  },
  {
    label: 'Luxury',
    value: 'Luxury'
  },
  {
    label: 'Truck',
    value: 'Truck'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
      <div>
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            selected={category === item.label}
          />
        ))}
      </div>
  );
}
 
export default Categories;