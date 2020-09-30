import styles from "./index.module.css";
import Forwarding_image from "./fordwarding_img";
import { Container, Row, Col } from "react-bootstrap";
import Header from "next/head";

export default function Home() {
  return (
    <div className={styles.background}>
      <Header></Header>
      <Container fluid>
        <Row className={styles.titlerow}>
          <Col>
            <div className={styles.title}>
              <h1>pYoure</h1>
              <p>Photography</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.imageRow}>
          <Col>
            <Forwarding_image
              divClass={styles.container}
              class={styles.momentsButton}
              address="./moments"
              name="Moments"
            />
          </Col>
          <Col>
            <Forwarding_image
              divClass={styles.container}
              class={styles.womenButton}
              address="./women"
              name="Women"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
