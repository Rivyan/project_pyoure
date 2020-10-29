import { Col, Container, Row } from "react-bootstrap";
import Layout from "../layout";
import SmallCarousel from "./components/small_carousel";
import styles from "./index.module.scss";

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
    "/moments_gallery/gallery_img_4.png",
    "/moments_gallery/gallery_img_6.png",
  ];

  return (
    <Layout>
      <Container className={styles.portfolioContainer} fluid>
        <Row className={styles.portfolioRow}>
          {/* Family photos */}
          <Col xs={12} lg={(6, { order: 1 })} className={styles.textContainer}>
            <h3>Outdoors and Studio Pregnancy Photography</h3>
            <p>
              Pregnancy. Such an adventure, the beginning of a new life and a
              new adventure. So many things will change, or changed already. And
              even though spending 9 months in this blessed state seems to be a
              long time, it will fly away in the blink of an eye. But we can
              memorise it, make this moment an eternal one. Together, we can
              show the world the beauty of this blessing!
            </p>
          </Col>
          <Col
            xs={12}
            lg={(6, { order: 2 })}
            className={styles.carouselContainer}
          >
            <SmallCarousel
              className={styles.smallCarousel}
              images={pregnantPhotos}
            />
          </Col>
        </Row>
        <Row className={styles.portfolioRow}>
          {/* Pregnancy photos */}
          <Col xs={12} lg={(6, { order: 2 })} className={styles.textContainer}>
            <h3>Outdoors and Studio Family Photography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tempus massa ut pulvinar congue. Curabitur mattis et ligula id
              scelerisque. Maecenas malesuada vel ligula eu cursus. Suspendisse
              congue risus ut neque posuere tincidunt. Morbi porttitor neque
              diam, ut convallis felis iaculis sagittis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Proin quis diam cursus
              arcu gravida mattis eu non orci. Fusce metus nisl, cursus non
              dapibus sit amet, molestie ac risus.
            </p>
          </Col>
          <Col
            xs={12}
            lg={(6, { order: 1 })}
            className={styles.carouselContainer}
          >
            <SmallCarousel
              className={styles.smallCarousel}
              images={familyPhotos}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
