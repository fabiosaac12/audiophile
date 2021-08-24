import { useEffect, useState } from 'react';
import { SelectedProductContext } from './SelectedProductContext';

const _selectedProduct = {
  new: true,
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacie of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  price: '2,999',
  available: 19,
  features: [
    "Featuring a genuine leather head strap and premium earcups these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intultive controls designed for any situation. Wheter you're taking a business call or just in your own personal space, The auto on/off and pause features ensure that you'll never miss a beat.",
    'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you to enjoy yout audio in peace. Buy quickly interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
  ],
  inTheBox: [
    {
      quantity: 1,
      name: 'Headphone Unit',
    },
    {
      quantity: 2,
      name: 'Replacement Earcups',
    },
    {
      quantity: 1,
      name: 'User Manual',
    },
    {
      quantity: 1,
      name: '3.5mm 5m Audio Cable',
    },
    {
      quantity: 1,
      name: 'Travel Bag',
    },
  ],
};

const _relatedProducts = [
  {
    name: 'XX99 Mark I',
    image: null,
  },
  {
    name: 'XX59',
    image: null,
  },
  {
    name: 'ZX9 Speaker',
    image: null,
  },
  {
    name: 'Headphones',
    image: null,
  },
  {
    name: 'Speakers',
    image: null,
  },
  {
    name: 'Hearphones',
    image: null,
  },
];

export const SelectedProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(_selectedProduct);
  const [relatedProducts, setRelatedProducts] = useState();

  useEffect(() => {
    setRelatedProducts(_relatedProducts);
  }, [selectedProduct]);

  const contextValue = {
    setSelectedProduct,
    selectedProduct,
    relatedProducts,
  };

  return (
    <SelectedProductContext.Provider value={contextValue}>
      {children}
    </SelectedProductContext.Provider>
  );
};
