import classes from './StoreResume.module.scss';

export const StoreResume = () => (
  <div className={classes.container}>
    <div className={classes.textContainer}>
      <div className={`h1 ${classes.title}`}>
        Bringing you the <span>best</span> audio gear
      </div>
      <div className="p">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accesories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </div>
    </div>
    <div className={classes.imageContainer}>
      <img
        src="https://cache.desktopnexus.com/thumbseg/95/95988-bigthumbnail.jpg"
        alt="storeImage"
      />
    </div>
  </div>
);
