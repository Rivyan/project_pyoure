import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Footer from "../footer";
import styles from "./index.module.scss";
import SmallCarousel from "./components/small_carousel";

export default function Portfolio() {
  const familyPhotos = [
    "/moments_gallery/gallery_img_11.png",
    "/moments_gallery/gallery_img_12.png",
    "/moments_gallery/gallery_img_2.png",
    "/moments_gallery/gallery_img_1.png",
  ];

  const pregnantPhotos = [
    "/moments_gallery/gallery_img_3.png",
    "/moments_gallery/gallery_img_5.png",
    "/moments_gallery/gallery_img_8.png",
    "/moments_gallery/gallery_img_6.png",
  ];

  return (
    <div>
      <Navigation />
      <Container>
        {/* Family photos */}
        <Row>
          <Col xs={12} md={8} className={styles.textContainer}>
            FAMILYLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur tempus massa ut pulvinar congue. Curabitur mattis et
            ligula id scelerisque. Maecenas malesuada vel ligula eu cursus.
            Suspendisse congue risus ut neque posuere tincidunt. Morbi porttitor
            neque diam, ut convallis felis iaculis sagittis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Proin quis diam
            cursus arcu gravida mattis eu non orci. Fusce metus nisl, cursus non
            dapibus sit amet, molestie ac risus.
          </Col>
          <Col xs={12} md={4} className={styles.carouselContainer}>
            <SmallCarousel
              className={styles.smallCarousel}
              images={familyPhotos}
            />
          </Col>
        </Row>
        <Row>
          {/* Pregnancy photos */}
          <Col xs={12} md={8} className={styles.textContainer}>
            PREGNANTLorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur tempus massa ut pulvinar congue. Curabitur mattis et
            ligula id scelerisque. Maecenas malesuada vel ligula eu cursus.
            Suspendisse congue risus ut neque posuere tincidunt. Morbi porttitor
            neque diam, ut convallis felis iaculis sagittis. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Proin quis diam
            cursus arcu gravida mattis eu non orci. Fusce metus nisl, cursus non
            dapibus sit amet, molestie ac risus.
          </Col>
          <Col xs={12} md={4} className={styles.carouselContainer}>
            <SmallCarousel
              className={styles.smallCarousel}
              images={pregnantPhotos}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
