import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import styles from "./gallery.module.css";

export default function Gallery() {
  const [lightboxController, setLightBoxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightBoxOnSlide(number) {
    setLightBoxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div>
      <Container className={styles.galleryContainer}>
        <Row>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(1)}
              className={styles.smallImage}
              src="moments_gallery/test_img_1.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(2)}
              className={styles.smallImage}
              src="moments_gallery/test_img_2.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(3)}
              className={styles.smallImage}
              src="moments_gallery/test_img_3.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(4)}
              className={styles.smallImage}
              src="moments_gallery/test_img_4.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(5)}
              className={styles.smallImage}
              src="moments_gallery/test_img_5.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(6)}
              className={styles.smallImage}
              src="moments_gallery/test_img_6.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(7)}
              className={styles.smallImage}
              src="moments_gallery/test_img_7.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(8)}
              className={styles.smallImage}
              src="moments_gallery/test_img_8.jpg"
            />
          </Col>
          <Col>
            <img
              onClick={() => openLightBoxOnSlide(9)}
              className={styles.smallImage}
              src="moments_gallery/test_img_9.jpg"
            />
          </Col>
        </Row>
      </Container>
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={[
          "moments_gallery/test_img_1.jpg",
          "moments_gallery/test_img_2.jpg",
          "moments_gallery/test_img_3.jpg",
          "moments_gallery/test_img_4.jpg",
          "moments_gallery/test_img_5.jpg",
          "moments_gallery/test_img_6.jpg",
          "moments_gallery/test_img_7.jpg",
          "moments_gallery/test_img_8.jpg",
          "moments_gallery/test_img_9.jpg",
        ]}
      />
    </div>
  );
}
