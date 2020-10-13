import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import Footer from "../footer";
import styles from "./index.module.scss";

export default function Portfolio() {
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
