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
            {[...Array(props.imagesCount)].map((e, i) => (
              <GalleryImage
                key={"/moments_gallery/gallery_img_" + (i + 1) + ".png"}
                imageID={i + 1}
                imageSrc={"/moments_gallery/gallery_img_" + (i + 1) + ".png"}
                clickHandle={openLightBoxOnSlide}
              />
            ))}
          </Row>
        </Container>
        <FsLightbox
          toggler={lightboxController.toggler}
          slide={lightboxController.slide}
          sources={[
            "/moments_gallery/gallery_img_1.png",
            "/moments_gallery/gallery_img_2.png",
            "/moments_gallery/gallery_img_3.png",
            "/moments_gallery/gallery_img_4.png",
            "/moments_gallery/gallery_img_5.png",
            "/moments_gallery/gallery_img_6.png",
            "/moments_gallery/gallery_img_7.png",
            "/moments_gallery/gallery_img_8.png",
            "/moments_gallery/gallery_img_9.png",
            "/moments_gallery/gallery_img_10.png",
            "/moments_gallery/gallery_img_11.png",
            "/moments_gallery/gallery_img_12.png",
            "/moments_gallery/gallery_img_13.png",
            "/moments_gallery/gallery_img_14.png",
            "/moments_gallery/gallery_img_15.png",
          ]}
        />
      </div>
    </section>
  );
}
