import classes from './ProductPresentation.module.scss';
import { images } from '../../assets';
import { Resume } from './Resume';
import { AddToCart } from './Resume/AddToCart/AddToCart';
import { Features } from './Features';
import { InTheBox } from './InTheBox/InTheBox';

export const ProductPresentation = () => {
  return (
    <>
      <div className={classes.overviewContainer}>
        <div className={classes.imageContainer}>
          <img src={images.headphones1} alt="product" />
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
    </>
  );
};
