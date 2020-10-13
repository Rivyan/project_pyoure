import styles from "./forwarding_img.module.scss";
import Link from "next/link";

export default function Forwarding_image(props) {
  return (
    <div>
      <Link href={props.address}>
        <a
          className={styles.link}
          onMouseEnter={() => props.hoverFunction(true)}
          onMouseLeave={() => props.hoverFunction(false)}
        >
          {props.name}
        </a>
      </Link>
    </div>
  );
}
