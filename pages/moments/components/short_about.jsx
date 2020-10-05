import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./short-about.module.css";

export default function ShortAbout() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className={styles.welcomeRow}>
            <h1>Hello!</h1>
          </Col>
        </Row>
        <Row className={styles.aboutRow}>
          <Col>
            <Image
              className={styles.aboutImage}
              src="viki_about.jpg"
              alt="Markus Viktoria profil foto"
              rounded
            />
          </Col>
          <Col>
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
  );
}
