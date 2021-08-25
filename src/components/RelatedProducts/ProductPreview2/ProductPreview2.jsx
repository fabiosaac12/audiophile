import classes from './ProductPreview2.module.scss';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const ProductPreview2 = ({ product, className }) => (
  <div className={`${classes.container} ${className}`}>
    <img src={product.image} alt={product.name} className={classes.image} />
    <div className="h4">{product.name}</div>
    <div className="p textButton">
      SHOP <MdKeyboardArrowRight className={classes.icon} />
    </div>
  </div>
);
