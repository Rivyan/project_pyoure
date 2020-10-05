import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.css";

export default function IndexCarousel() {
  return (
    <div className={styles.carouselDiv}>
      {/* Moments Carousel */}
      <Carousel
        // className="carousel-fade"
        autoPlay={true}
        interval={3000}
        controls={false}
        fade={true}
      >
        {/* First Item */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="moments_carousel/test_img_1.jpg"
            alt="first moments image"
          />
        </Carousel.Item>
        {/* Second Item */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="moments_carousel/test_img_2.jpg"
            alt="second moments image"
          />
        </Carousel.Item>
        {/* Third item */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="moments_carousel/test_img_3.jpg"
            alt="third moments image"
          />
        </Carousel.Item>
        {/* Fourth item */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="moments_carousel/test_img_4.jpg"
            alt="fourth moments image"
          />
        </Carousel.Item>
        {/* Fifth item */}
        <Carousel.Item>
          <img
            className={styles.carouselImage}
            src="moments_carousel/test_img_5.jpg"
            alt="fifth moments image"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
