import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.scss";

export default function IndexCarousel() {
  return (
    <section id="momentsCarousel">
      <div>
        <Carousel
          autoPlay={true}
          interval={3000}
          controls={false}
          fade={true}
          className={styles.carouselDiv}
        >
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="moments_carousel/test_img_1.jpg"
              alt="first moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="moments_carousel/test_img_2.jpg"
              alt="second moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="moments_carousel/test_img_3.jpg"
              alt="third moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="moments_carousel/test_img_4.jpg"
              alt="fourth moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="moments_carousel/test_img_5.jpg"
              alt="fifth moments image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
