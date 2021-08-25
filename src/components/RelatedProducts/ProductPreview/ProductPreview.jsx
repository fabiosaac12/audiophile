import classes from './ProductPreview.module.scss';

export const ProductPreview = ({ product, className }) => (
  <div className={`${classes.container} ${className}`}>
    <div className={classes.imageContainer}>
      <img src={product.image} alt={product.name} />
    </div>
    <div className="h3">{product.name}</div>
    <div className="button">See product</div>
  </div>
);
