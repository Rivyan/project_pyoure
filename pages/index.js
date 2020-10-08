import styles from "./index.module.css";
import Forwarding_image from "./forwarding_img";
import { Container, Row, Col } from "react-bootstrap";
import Header from "next/head";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

export default function Home() {
  const [momentsBackground, setMomentsBackground] = React.useState(false);
  const [womenBackground, setWomenBackground] = React.useState(false);
  let divClass = cx({
    background: true,
    momentsBackground: momentsBackground,
    womenBackground: womenBackground,
  });
  function momentsHover(e) {
    setMomentsBackground(e);
  }
  function womenHover(e) {
    setWomenBackground(e);
  }

  return (
    <div className={divClass}>
      <Header>
        <title>pYoure Photography</title>
      </Header>
      {/* Main container for the title and the buttons for the sub sites */}
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.title}>
              <p>pYoure</p>
              <p>Photography</p>
            </div>
          </Col>
        </Row>
        <Row className={styles.buttonRow}>
          <Col>
            {/* Moments button */}
            <Forwarding_image
              hoverFunction={momentsHover}
              address="./moments"
              name="Moments"
            />
          </Col>
          <Col>
            {/*  Women button */}
            <Forwarding_image
              hoverFunction={womenHover}
              address="./women"
              name="Women"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
