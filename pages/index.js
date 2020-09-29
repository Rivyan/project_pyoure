import styles from "./index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to pYoure Photos!</h1>
      <ul>
        <li>
          <Link href="./moments">
            <a>Moments</a>
          </Link>
        </li>
        <li>
          <Link href="./women">
            <a>Women</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
