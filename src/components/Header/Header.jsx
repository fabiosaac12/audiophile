import { images } from '../../assets';
import classes from './Header.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Header = () => (
  <div className={`container ${classes.container}`}>
    <img src={images.logo} className={classes.logo} alt="logo" />
    <div className={classes.navigation}>
      <span className={'textButton'}>Home</span>
      <span className={'textButton'}>Headphones</span>
      <span className={'textButton'}>Speakers</span>
      <span className={'textButton'}>Earphones</span>
    </div>
    <div className={`${classes.shoppingButton} textButton`}>
      <AiOutlineShoppingCart className={classes.shoppingCarIcon} />
    </div>
  </div>
);
