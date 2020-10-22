import { Carousel } from "react-bootstrap";
import styles from "./small_carousel.module.scss";

export default function smallCarousel(props) {
  return (
    <div>
      <Carousel controls={true} className={styles.smallCarousel}>
        <Carousel.Item>
          <img src={props.images[0]} className={styles.smallCarouselImg} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={props.images[1]} className={styles.smallCarouselImg} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={props.images[2]} className={styles.smallCarouselImg} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={props.images[3]} className={styles.smallCarouselImg} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
