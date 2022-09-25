import Carousel from "./Carousel.jsx";
import classes from '../../style/componentCss/Carousel.module.css';

export default function CarouselContainer() {
  return (
    <section className={classes.section}>
      <Carousel className={classes.container}>
        <ul className={classes.list}>
          <li className={classes.item}>
            item 1
          </li>
          <li className={classes.item}>
          item 2
          </li>
          <li className={classes.item}>
            item 3
          </li>
          <li className={classes.item}>
            item 4
          </li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.item}>
            item 5
          </li>
          <li className={classes.item}>
            item 6
          </li>
          <li className={classes.item}>
            item 7
          </li>
          <li className={classes.item}>
            item 8
          </li>
        </ul>
        <ul className={classes.list}>
          <li className={classes.item}>
            item 9
          </li>
          <li className={classes.item}>
          item 10
          </li>
          <li className={classes.item}>
            item 11
          </li>
          <li className={classes.item}>
            item 12
          </li>
        </ul>
      </Carousel>
    </section>
  )
}
