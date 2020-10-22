import { Col } from "react-bootstrap";
import styles from "./gallery_image.module.scss";

export default function GalleryImage(props) {
  return (
    <Col>
      <div className={styles.smallImgZoomContainer}>
        <img
          onClick={() => {
            props.clickHandle(props.imageID);
          }}
          className={styles.smallImage}
          src={props.imageSrc}
        />
      </div>
    </Col>
  );
}
