import styles from "./forwarding_img.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Forwarding_image(props) {
  return (
    <div>
      <Link
        href={props.address}
        onMouseEnter={() => props.hoverFunction(true)}
        onMouseLeave={() => props.hoverFunction(false)}
      >
        <a className={styles.link}>{props.name}</a>
      </Link>
    </div>
  );
}
