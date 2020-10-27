import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import styles from "./index.module.scss";
import Footer from "../footer";
import emailjs from "emailjs-com";

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
    <div>
      <Navigation />
      <Container className={styles.contactContainer}>
        <Row>
          <Col className={styles.contactInfo} xs={12} md={6}>
            <h1>HOW TO CONTACT ME</h1>
            <p>
              Please use the contact form to email me directly with any queries.
            </p>
            <p>If you prefer to phone, call me on + 36 30 1234567</p>
          </Col>
          <Col className={styles.contactForm} xs={12} md={6}>
            <Form onSubmit={sendMessage}>
              <Form.Group>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="user_email"
                  placeholder="name@example.com"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  name="user_fname"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="1"
                  name="user_lname"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  name="message"
                  onChange={handleChange}
                />
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
