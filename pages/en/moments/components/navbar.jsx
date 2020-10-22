import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.scss";

export default function NavigationBar() {
  return (
    <>
      <Navbar className={styles.navBar} collapseOnSelect expand="lg">
        <Link href="/en/moments" passHref>
          <Navbar.Brand className={styles.logo}>pYOUre Moments</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link href="/en/moments/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
            <Link href="/en/moments/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
            <Link href="/en/moments/prices" passHref>
              <Nav.Link>Prices</Nav.Link>
            </Link>
            <Link href="/en/moments/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
          <Nav className="m-right">
            <Link href="en/women" passHref>
              <Nav.Link>Women</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
