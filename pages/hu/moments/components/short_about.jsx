import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./short_about.module.scss";

export default function ShortAbout() {
  return (
    <section id="momentsShortAbout">
      <div>
        <Container fluid className={styles.aboutContainer}>
          <Row>
            <Col className={styles.titleRow}>
              <h1>Rólam</h1>
            </Col>
          </Row>
          <Row className={styles.aboutRow}>
            <Col xs={12} md={5} l={4} align="center">
              <Image
                className={styles.aboutImage}
                src="/viki_about.jpg"
                alt="Markus Viktoria profil foto"
                rounded
                fluid
              />
            </Col>
            <Col xs={12} md={7} l={8}>
              <p className={styles.aboutText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vel pharetra dolor, at facilisis diam. Nam nec justo
                sodales, dignissim enim ut, tempus neque. Mauris congue mi eget
                sem tincidunt, sed imperdiet ante accumsan. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Fusce eu posuere ex. Proin ut massa sit amet enim
                egestas mollis malesuada eget leo. Phasellus at purus ac metus
                pharetra porta et ullamcorper justo. Nam cursus congue ultrices.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
