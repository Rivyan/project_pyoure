import { Col, Container, Row, Image } from "react-bootstrap";
import Layout from "../layout";
import styles from "./index.module.scss";

export default function About() {
  return (
    <Layout>
      <Container fluid className={styles.aboutContainer}>
        <Row>
          <Col>
            <p className={styles.aboutQuote}>
              “We take pictures because we can't accept that everything passes,
              we can't accept that the repetition of a moment is an
              impossibility. We wage a monotonous war against our own impending
              deaths, against time that turns children into that other, lesser
              species: adults. We take pictures because we know we will forget.
              We will forget the week, the day, the hour. We will forget when we
              were happiest. We take pictures out of pride, a desire to have the
              best of ourselve preserved. We fear that we will die and others
              will not know we lived.”
            </p>
          </Col>
        </Row>
        <Row>
          <h1 className={styles.aboutTitle}>
            Hello there, my name is Viktoria Markus, a family, children and
            women photographer.
          </h1>
          <Col xs={12} s={8} md={4} l={3} align="center">
            <Image
              className={styles.profilePhoto}
              src="/viki_about.jpg"
              alt="Viki profile photo"
              rounded
              fluid
            />
          </Col>
          <Col>
            <div className={styles.aboutText}>
              <p>
                Family and children photography came to my life naturally. After
                my daughters were born, I wanted to take better and better
                photos of them. For this reason, I bought a reflex camera and
                started taking classes and doing workshops. Each followed
                another, and soon I got my photographer certificate. At this
                point, I took photos of everybody in my vicinity: family,
                friends, even in my kids kindergarten. Nowadays I usually give
                photos to people as gifts, since the best way to see time flying
                by is to watch our children and the only way to stop it for a
                second is to take a quick snap of them. This way, I can give
                eternal memories to grandparents, families, since it will be
                tremendous joy to take out these photos in the future to come.
                Taking photos of children and families became one of my
                favourite things to do. But in the meantime, I found another
                challenge: immortalising the beauty of women, and soon it became
                my other one. Just for a few hour, anybody can take a break from
                their jobs or their families, but all of these women agree in
                one thing: it was an adventure and an unbelievable experience. A
                few hours, which was just about them. Watching them as they see
                themselves in professional makeup for the first time, looking at
                their faces when they take a glimpse on the screen of the photos
                we made together, not believing that they are the ones on these
                images… Just pure bliss, every time, giving me goosebumps. Every
                time they told me that the photo session was the equivalent of a
                therapy. And it has to be the case, since I have the same
                feeling each and every time… Come, and lets eternalise a few
                memories together!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
