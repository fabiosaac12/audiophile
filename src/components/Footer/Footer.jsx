import { images } from '../../assets';
import classes from './Footer.module.scss';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

export const Footer = () => (
  <div className={`container ${classes.container}`}>
    <div className={classes.line} />
    <div className={classes.flexContainer}>
      <img src={images.logo} className={classes.logo} alt="logo" />
      <div className={`${classes.navigation} smDownInvisible`}>
        <span className={'textButton'}>Home</span>
        <span className={'textButton'}>Headphones</span>
        <span className={'textButton'}>Speakers</span>
        <span className={'textButton'}>Earphones</span>
      </div>
    </div>
    <div className={classes.flexContainer}>
      <div className={`${classes.text} ${classes.description}`}>
        Audiophile es an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility- we're open 7 days a week.
      </div>
      <div className={classes.networksContainer}>
        <AiFillFacebook className={'textButton'} />
        <AiOutlineTwitter className={'textButton'} />
        <AiOutlineInstagram className={'textButton'} />
      </div>
    </div>
    <div className={`${classes.text} ${classes.copyright}`}>
      Copyright 2021. All Rights Reserved
    </div>
  </div>
);
