import styles from "./index.module.css";
import Link from "next/link";

export default () => {
  return (
    <div>
      <h1>Welcome to Women/Index</h1>
      <ul>
        <li>
          <Link href="/women/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/women/contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/women/portfolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/women/prices">
            <a>Prices</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
