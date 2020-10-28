import { Col, Image } from "react-bootstrap";
import styles from "./gallery_image.module.scss";

export default function GalleryImage(props) {
  return (
    <Col className={styles.imageCol}>
      <div className={styles.smallImgZoomContainer}>
        <Image
          onClick={() => {
            props.clickHandle(props.imageID);
          }}
          className={styles.smallImage}
          src={props.imageSrc}
          rounded
          fluid
        />
      </div>
    </Col>
  );
}
