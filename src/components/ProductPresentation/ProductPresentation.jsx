import classes from './ProductPresentation.module.scss';
import { Resume } from './Resume';
import { AddToCart } from './Resume/AddToCart/AddToCart';
import { Features } from './Features';
import { InTheBox } from './InTheBox/InTheBox';
import { Images } from './Images';
import { useSelectedProduct } from '../../context/SelectedProduct';

export const ProductPresentation = () => {
  const { selectedProduct } = useSelectedProduct();

  return (
    <>
      <div className={classes.overviewContainer}>
        <div className={classes.imageContainer}>
          <img src={selectedProduct.mainImage} alt="product" />
        </div>

        <div className={classes.resumeContainer}>
          <Resume />
          <AddToCart />
        </div>
      </div>
      <div className={classes.infoContainer}>
        <div className={classes.featuresContainer}>
          <Features />
        </div>
        <div className={classes.inTheBoxContainer}>
          <InTheBox />
        </div>
      </div>
      <Images />
    </>
  );
};
