import Link from "next/link";
import { Button } from "react-bootstrap";

export default function Forwarding_image(props) {
  return (
    <div className={props.divClass}>
      <Link href={props.address}>
        <Button className={props.class} variant="outline-dark">
          <a>{props.name}</a>
        </Button>
      </Link>
    </div>
  );
}
