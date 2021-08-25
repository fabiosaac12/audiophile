import { useMenu } from './context/useMenu';
import classes from './Menu.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Menu = () => {
  const { handleHide, visible } = useMenu();

  return (
    <>
      <div
        className={`${visible && classes.visible} ${classes.backdrop}`}
        onClick={handleHide}
      />
      <div className={`${visible && classes.visible} ${classes.container}`}>
        <AiOutlineShoppingCart
          className={`textButton ${classes.shoppingCarButton}`}
        />
        <div className={`textButton ${classes.item}`}>Home</div>
        <div className={classes.separator} />
        <div className={`textButton ${classes.item}`}>Headphones</div>
        <div className={classes.separator} />
        <div className={`textButton ${classes.item}`}>Speakers</div>
        <div className={classes.separator} />
        <div className={`textButton ${classes.item}`}>Earphones</div>
      </div>
    </>
  );
};
