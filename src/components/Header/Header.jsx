import { images } from '../../assets';
import classes from './Header.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Header = () => (
  <div className={`container ${classes.container}`}>
    <img src={images.logo} className={classes.logo} alt="logo" />
    <div className={classes.navigation}>
      <span className={classes.button}>Home</span>
      <span className={classes.button}>Headphones</span>
      <span className={classes.button}>Speakers</span>
      <span className={classes.button}>Earphones</span>
    </div>
    <div className={`${classes.shoppingButton} ${classes.button}`}>
      <AiOutlineShoppingCart className={classes.shoppingCarIcon} />
    </div>
  </div>
);
