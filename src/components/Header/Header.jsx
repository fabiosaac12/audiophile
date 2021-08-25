import { images } from '../../assets';
import classes from './Header.module.scss';
import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';
import { useMenu } from '../Menu/context/useMenu';

export const Header = () => {
  const menu = useMenu();

  return (
    <div className={`container ${classes.container}`}>
      <img src={images.logo} className={classes.logo} alt="logo" />
      <div className={`${classes.navigation} smDownInvisible`}>
        <span className={'textButton'}>Home</span>
        <span className={'textButton'}>Headphones</span>
        <span className={'textButton'}>Speakers</span>
        <span className={'textButton'}>Earphones</span>
      </div>
      <div className={`${classes.button} textButton`}>
        <AiOutlineShoppingCart
          className={`smDownInvisible ${classes.buttonIcon}`}
        />
        <AiOutlineMenu
          onClick={menu.handleShow}
          className={`mdUpInvisible ${classes.buttonIcon}`}
        />
      </div>
    </div>
  );
};
