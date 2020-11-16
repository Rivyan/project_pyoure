import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.scss";

export default function NavigationBar() {
  return (
    <>
      <Navbar className={styles.navBar} collapseOnSelect expand="md">
        <Link href="/en/moments" passHref>
          <Navbar.Brand className={styles.logo}>pYOUre moments</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link href="/en/moments/portfolio" passHref>
              <Nav.Link>Portfolio</Nav.Link>
            </Link>
            <Link href="/en/moments/prices" passHref>
              <Nav.Link>Prices</Nav.Link>
            </Link>
            <Link href="/en/moments/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
            <Link href="/en/moments/blog" passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>
          </Nav>
          <Nav className="m-right">
            <Link href="/en/women" passHref>
              <Nav.Link>Women</Nav.Link>
            </Link>
            <Link href="/hu/moments" passHref>
              <Nav.Link>
                <img className={styles.flagIcon} src="/hu_flag.jpeg" />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
