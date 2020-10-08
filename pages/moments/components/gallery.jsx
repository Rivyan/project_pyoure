import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import styles from "./gallery.module.scss";
// import fs from "fs";
// import path from "path";

function Gallery({ arrayOfImages }) {
  // console.log(arrayOfImages);

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
      <Container fluid className={styles.galleryContainer}>
        <Row>
          <Col className={styles.titleRow}>
            <h1>Gallery</h1>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={2} lg={2} xl={3} align="center">
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(1)}
                className={styles.smallImage}
                src="moments_gallery/test_img_1.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(2)}
                className={styles.smallImage}
                src="moments_gallery/test_img_2.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(3)}
                className={styles.smallImage}
                src="moments_gallery/test_img_3.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(4)}
                className={styles.smallImage}
                src="moments_gallery/test_img_4.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(5)}
                className={styles.smallImage}
                src="moments_gallery/test_img_5.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(6)}
                className={styles.smallImage}
                src="moments_gallery/test_img_6.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(7)}
                className={styles.smallImage}
                src="moments_gallery/test_img_7.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(8)}
                className={styles.smallImage}
                src="moments_gallery/test_img_8.jpg"
              />
            </div>
          </Col>
          <Col>
            <div className={styles.smallImgZoomContainer}>
              <img
                onClick={() => openLightBoxOnSlide(9)}
                className={styles.smallImage}
                src="moments_gallery/test_img_9.jpg"
              />
            </div>
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

// TODO: Find a way to count the number of images in the public/moments_gallery folder

// export async function getStaticProps() {
//   // const dirPath = path.join(process.cwd(), "/moments_gallery/");
//   const dirPath = path.join(process.env.PUBLIC_URL, "/moments_gallery");
//   const images = fs.readdirSync(dirPath);

//   const arrayOfImages = arrayOfImages || [];

//   images.forEach(function (image) {
//     arrayOfImages.push(image);
//   });

//   return {
//     props: {
//       arrayOfImages,
//     },
//   };
// }

export default Gallery;
