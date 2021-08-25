import { useEffect, useState } from 'react';
import { SelectedProductContext } from './SelectedProductContext';
import { images } from '../../assets';

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
  mainImage: images.headphones1,
  images: [
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThYjzjzw-ffoMIJZ660-8Z2DQ6qM3koJvZvg&usqp=CAU',
    'https://cdn11.bigcommerce.com/s-k11cg5mzh9/content/pdp_images/2685_6165.jpg',
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
    image: images.related1,
  },
  {
    name: 'XX59',
    image: images.related3,
  },
  {
    name: 'ZX9 Speaker',
    image: images.related2,
  },
  {
    name: 'Headphones',
    image: images.related4,
  },
  {
    name: 'Speakers',
    image: images.related5,
  },
  {
    name: 'Earphones',
    image: images.related6,
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
