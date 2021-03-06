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
              Our families are the most important things in our life. From being
              born to reaching adulthood and leaving the nest, our children are
              the origo, the center of each and every day. Yet, all of this
              happens so fast. In one moment they are so little, and in the next
              one they are small adults, going on and about their own lifes. We
              will always have the memories being together, as as closed knit
              unit. But memories can fade over the years. This is the reason why
              we take photos of everything. With my help, we can take the best
              possible picture, to make everlasting memories of these years, of
              these moments.
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
