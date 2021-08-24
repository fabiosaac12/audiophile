import { useSelectedProduct } from '../../../context/SelectedProduct';
import classes from './Resume.module.scss';

export const Resume = () => {
  const { selectedProduct } = useSelectedProduct();

  return (
    <>
      {selectedProduct.new && (
        <div className={classes.newText}>New Product</div>
      )}
      <div className="h1">{selectedProduct.name}</div>
      <div className="p">{selectedProduct.description}</div>
      <div className={classes.priceText}>{selectedProduct.price}</div>
    </>
  );
};
