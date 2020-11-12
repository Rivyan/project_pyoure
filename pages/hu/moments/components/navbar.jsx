import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.scss";

export default function NavigationBar() {
  return (
    <>
      <Navbar className={styles.navBar} collapseOnSelect expand="md">
        <Link href="/hu/moments" passHref>
          <Navbar.Brand className={styles.logo}>pYOUre moments</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link href="/hu/moments/portfolio" passHref>
              <Nav.Link>Portfólió</Nav.Link>
            </Link>
            <Link href="/hu/moments/prices" passHref>
              <Nav.Link>Árak</Nav.Link>
            </Link>
            <Link href="/hu/moments/contact" passHref>
              <Nav.Link>Kapcsolat</Nav.Link>
            </Link>
            <Link href="/hu/moments/blog" passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>
          </Nav>
          <Nav className="m-right">
            <Link href="/hu/women" passHref>
              <Nav.Link>Women</Nav.Link>
            </Link>
            <Link href="/en/moments" passHref>
              <Nav.Link>ENG</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
