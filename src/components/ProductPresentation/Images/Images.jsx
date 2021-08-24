import { useSelectedProduct } from '../../../context/SelectedProduct';
import classes from './Images.module.scss';

export const Images = () => {
  const { selectedProduct } = useSelectedProduct();

  return (
    <div className={classes.container}>
      <div className={classes.firstImage}>
        <img alt="first" src={selectedProduct.images[0]} />
      </div>
      <div className={classes.secondImage}>
        <img alt="second" src={selectedProduct.images[1]} />
      </div>
      <div className={classes.thirdImage}>
        <img alt="third" src={selectedProduct.images[2]} />
      </div>
    </div>
  );
};
