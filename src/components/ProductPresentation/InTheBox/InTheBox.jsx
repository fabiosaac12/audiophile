import { useSelectedProduct } from '../../../context/SelectedProduct';
import classes from './InTheBox.module.scss';

export const InTheBox = () => {
  const { selectedProduct } = useSelectedProduct();

  return (
    <>
      <div className="h2">In the box</div>
      {selectedProduct.inTheBox.map((item) => (
        <div className={`p ${classes.item}`}>
          <span>{item.quantity}x</span> {item.name}
        </div>
      ))}
    </>
  );
};
