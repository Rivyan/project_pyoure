import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import Layout from "../layout";
import styles from "./index.module.scss";

export default function Contact(props) {
  const [contact, setContact] = React.useState({
    user_fname: "",
    user_lname: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const sendMessage = (event) => {
    event.preventDefault();

    let template_params = {
      reply_to: "andras0622@gmail.com",
      user_fname: contact.user_fname,
      user_lname: contact.user_lname,
      user_email: contact.user_email,
      message: contact.message,
    };

    emailjs
      .send(props.serviceID, props.templateID, template_params, props.userID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <Container className={styles.contactContainer}>
        <Row>
          <Col className={styles.contactInfo} xs={12} md={6}>
            <h1>Hogyan tudsz kapcsolatba lépni velem?</h1>
            <p>
              Kérlek használd az alábbi lehetőséget, amivel közvetlen e-mailt
              tudsz nekem küldeni.
            </p>
            <p>
              Amennyiben inkább telefonon érnél el, ezt a + 36 30 1234567 számon
              teheted meg.
            </p>
          </Col>
          <Col className={styles.contactForm} xs={12} md={6}>
            <Form onSubmit={sendMessage}>
              <Form.Group>
                <Form.Label>Email cím</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="példa@email.com"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Családnév</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  name="user_lname"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Keresztnév</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  name="user_fname"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Üzenet</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  name="message"
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Küld
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const userID = process.env.USER_ID;
  const templateID = process.env.TEMPLATE_ID;
  const serviceID = process.env.SERVICE_ID;
  return {
    props: {
      userID,
      templateID,
      serviceID,
    },
  };
}
