import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.scss";

export default function IndexCarousel() {
  return (
    <section id="momentsCarousel">
      <div>
        <Carousel
          autoPlay={true}
          interval={5000}
          controls={false}
          fade={true}
          className={styles.carouselDiv}
        >
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/moments_carousel/carousel_img_1.png"
              alt="first moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/moments_carousel/carousel_img_2.png"
              alt="second moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/moments_carousel/carousel_img_3.png"
              alt="third moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/moments_carousel/carousel_img_4.png"
              alt="fourth moments image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={styles.carouselImage}
              src="/moments_carousel/carousel_img_5.png"
              alt="fifth moments image"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
