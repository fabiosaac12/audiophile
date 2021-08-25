import { useSelectedProduct } from '../../context/SelectedProduct';
import { ProductPreview } from './ProductPreview/ProductPreview';
import { ProductPreview2 } from './ProductPreview2/ProductPreview2';
import classes from './RelatedProducts.module.scss';

export const RelatedProducts = () => {
  const { relatedProducts } = useSelectedProduct();

  return relatedProducts ? (
    <div className={classes.container}>
      <div className="h2">You may also like</div>
      <div className={classes.gridContainer}>
        <ProductPreview
          product={relatedProducts[0]}
          className={classes.first}
        ></ProductPreview>
        <ProductPreview
          product={relatedProducts[1]}
          className={classes.second}
        ></ProductPreview>
        <ProductPreview
          product={relatedProducts[2]}
          className={classes.third}
        ></ProductPreview>
        <ProductPreview2
          product={relatedProducts[3]}
          className={classes.fourth}
        ></ProductPreview2>
        <ProductPreview2
          product={relatedProducts[4]}
          className={classes.fifth}
        ></ProductPreview2>
        <ProductPreview2
          product={relatedProducts[5]}
          className={classes.sixth}
        ></ProductPreview2>
      </div>
    </div>
  ) : null;
};
