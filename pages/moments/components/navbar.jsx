import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.css";

export default function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Link href="/moments" passHref>
          <Navbar.Brand href="/moments" className={styles.logo}>
            pYOUre Moments
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link href="/moments/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/moments/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
            <Link href="/moments/prices" passHref>
              <Nav.Link>Prices</Nav.Link>
            </Link>
            <Link href="/moments/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
          <Nav className="m-right">
            <Link href="/women" passHref>
              <Nav.Link>Women</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
