import { Container, Row, Col } from "react-bootstrap";
import Header from "next/head";
import classNames from "classnames/bind";
import Forwarding_image from "./forwarding_img";
import styles from "./index.module.scss";

let cx = classNames.bind(styles);

export default function Home() {
  const [momentsBackground, setMomentsBackground] = React.useState(false);
  const [womenBackground, setWomenBackground] = React.useState(false);

  function momentsHover(e) {
    setMomentsBackground(e);
  }
  function womenHover(e) {
    setWomenBackground(e);
  }

  let divClass = cx({
    background: true,
    momentsBackground: momentsBackground,
    womenBackground: womenBackground,
  });

  return (
    <div className={divClass}>
      <Header>
        <title>pYOUre Photography</title>
      </Header>
      {/* Main container for the title and the buttons for the sub sites */}
      <Container fluid>
        <Row>
          <Col>
            <div className={styles.title}>
              <p>
                pYOUre
                <br />
                Photography
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.buttonRow}>
          <Col className={styles.buttonCol}>
            <Forwarding_image
              hoverFunction={momentsHover}
              address="./en/moments"
              name="Moments"
            />
          </Col>
          <Col className={styles.buttonCol}>
            <Forwarding_image
              hoverFunction={womenHover}
              address="./en/women"
              name="Women"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
