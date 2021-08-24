import { useState } from 'react';
import { useSelectedProduct } from '../../../../context/SelectedProduct';
import classes from './AddToCart.module.scss';

export const AddToCart = () => {
  const { selectedProduct } = useSelectedProduct();
  const [quantity, setQuantity] = useState(0);

  const addOne = () =>
    setQuantity((quantity) =>
      quantity === selectedProduct.available ? quantity : quantity + 1
    );
  const removeOne = () =>
    setQuantity((quantity) => (quantity < 1 ? 0 : quantity - 1));

  return (
    <div className={classes.container}>
      <div className={classes.quantityInput}>
        <span
          className={`${classes.sign} ${quantity < 1 ? 'invisible' : ''}`}
          onClick={removeOne}
        >
          -
        </span>
        <span className={classes.quantity}>{quantity}</span>
        <span className={classes.sign} onClick={addOne}>
          +
        </span>
      </div>
      <div className={'button'}>Add to cart</div>
    </div>
  );
};
