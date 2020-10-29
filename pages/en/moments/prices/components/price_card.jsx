import { Card } from "react-bootstrap";
import styles from "./price_card.module.scss";

export default function PriceCard(props) {
  return (
    <Card
      className={"text-left ${styles.cardContainer}"}
      style={{ width: "30rem" }}
    >
      <Card.Img className={styles.cardImage} variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardBody}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Session Length: 2 hours</small>
      </Card.Footer>
    </Card>
  );
}
