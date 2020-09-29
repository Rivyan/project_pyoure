import styles from "./index.module.css";
import Link from "next/link";

export default () => {
  return (
    <div>
      <h1>Welcome to Moments/Index</h1>
      <ul>
        <li>
          <Link href="/moments/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/moments/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/moments/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/moments/prices">
            <a>Prices</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
