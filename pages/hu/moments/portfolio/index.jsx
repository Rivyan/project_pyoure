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
          <Col xs={12} lg={(6, { order: 1 })} className={styles.textContainer}>
            <h3>Kültéri és stúdió terhes fotózás</h3>
            <p>
              Terhesség. Micsoda kaland, egy új élet kezdete! Semmi sem olyan
              mint előtte, minden meg fog változni, sőt akár már meg is
              változott. Bár az ebben az áldott állapotban töltött idő hosszúnak
              tűnik, egy szempillantás alatt elszáll. De együtt megörökíthetjük,
              így időtállová tehetjük. Együtt meg tudjuk mutatni a gyönyörűségét
              ennek az áldott állapotnak!
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
          <Col xs={12} lg={(6, { order: 2 })} className={styles.textContainer}>
            <h3>Kültéri és stúdió család, és gyermek fotózás</h3>
            <p>
              A családunk a legfontosabb dolog az életünkben. Onnantól, hogy
              megszületnek majd felnőnek és kirepülnek a fészekből, a gyerekeink
              az életünk középpontját adják, az origót, ami körül forog minden.
              Mégis, olyan gyorsan történik mindez. Az egyik pillanatban még
              aprók és mindenben ránk vannak hagyatkozva, a következőben pedig
              már kész felnőttek, akiknek van saját életük. Bár mindig emlékezni
              fogunk ezek az élményekre, az emlékek az idő haladtával el tudnak
              halványulni. Ezért készítünk fotókat. A segítségemmel a lehető
              legjobb képeket tudjuk elkészteni, így időtállóvá tenni ezeket a
              pillanatokat!
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
