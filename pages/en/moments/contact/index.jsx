import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import styles from "./index.module.scss";
import Footer from "../footer";

export default function Contact() {
  return (
    <div>
      <Navigation />
      <Container className={styles.contactContainer}>
        <Row>
          <Col>
            <h1>HOW TO CONTACT ME</h1>
            <p>
              Please uf the contact form to email me directly with any queries.
            </p>
            <p>If you prefer to phone, call me on + 36 30 1234567</p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control as="textarea" rows="1" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control as="textarea" rows="1" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
