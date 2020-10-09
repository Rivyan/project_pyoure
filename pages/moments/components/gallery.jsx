import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import styles from "./gallery.module.scss";
import GalleryImage from "./gallery_image";

export default function Gallery(props) {
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
    <section id="moments_gallery">
      <div>
        <Container fluid className={styles.galleryContainer}>
          <Row>
            <Col className={styles.titleRow}>
              <h1>Gallery</h1>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={2} lg={2} xl={3} align="center">
            {/* Array to render the GalleryImage component in the gallery for each image in the public/moments_gallery folder */}
            {[...Array(props.imagesCount)].map((e, i) => (
              <GalleryImage
                key={"moments_gallery/test_img_" + (i + 1) + ".jpg"}
                imageID={i + 1}
                imageSrc={"moments_gallery/test_img_" + (i + 1) + ".jpg"}
                clickHandle={openLightBoxOnSlide}
              />
            ))}
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
    </section>
  );
}
