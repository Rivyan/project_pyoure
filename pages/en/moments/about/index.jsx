import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import styles from "./index.module.scss";
import Footer from "../footer";

export default function About() {
  return (
    <div>
      <Navigation />
      <Container fluid className={styles.aboutContainer}>
        <Row>
          <Col>
            <p className={styles.aboutTitle}>
              "Azért fényképezünk, mert nem tudunk beletörődni, hogy minden
              elmúlik, hogy lehetetlen megismételni egy már átélt pillanatot.
              Egyhangú háborút vívunk saját halálunk fenyegető réme ellen, és az
              idő ellen, amely másfajta és kevésbé értékes lényekké: felnőttekké
              változtatja a gyereket. Azért fényképezünk, mert tudjuk magunkról,
              hogy felejtünk. Elfelejtjük a hetet, a napot, az órát; elfelejtjük
              azt a pillanatot, amikor a legboldogabbak voltunk." (Michelle
              Richmond)
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} s={8} md={4} l={3} align="center">
            <img
              className={styles.profilePhoto}
              src="/viki_about.jpg"
              alt="Viki profile photo"
            />
          </Col>
          <Col>
            <div className={styles.aboutText}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                lobortis eleifend pellentesque. Proin efficitur sed tellus vel
                rhoncus. Pellentesque non massa eget enim semper iaculis quis
                hendrerit magna. Duis eget libero ligula. Sed viverra euismod
                ante eu maximus. In non ornare tortor, et iaculis erat. Ut justo
                elit, accumsan id lectus et, feugiat congue massa. Fusce
                imperdiet fringilla rhoncus. Quisque non tellus non turpis
                pharetra pretium. Nulla hendrerit pellentesque lorem et auctor.
                Ut fermentum varius interdum. Nulla elementum tincidunt mauris,
                sagittis venenatis quam bibendum vitae. Ut consectetur vehicula
                sem ac molestie. Nam dapibus, ligula id molestie aliquet, mi
                eros egestas magna, a mattis nulla dui eu neque. Donec sit amet
                ipsum eleifend diam feugiat elementum. Suspendisse nec
                vestibulum quam, sed imperdiet dolor. Suspendisse eget
                scelerisque massa. Donec scelerisque orci nec porttitor
                bibendum. Sed ex ex, elementum sed ornare eget, fringilla ut
                nunc.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
