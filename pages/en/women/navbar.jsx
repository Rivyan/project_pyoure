import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="/women">pYoure Women</Navbar.Brand>
        <Nav className="m-auto">
          <Link href="/women/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Link href="/women/portfolio" passHref>
            <Nav.Link>Portfolio</Nav.Link>
          </Link>
          <Link href="/women/prices" passHref>
            <Nav.Link>Prices</Nav.Link>
          </Link>
          <Link href="/women/contact" passHref>
            <Nav.Link>Contact</Nav.Link>
          </Link>
        </Nav>
        <Nav className="m-right">
          <Link href="/moments" passHref>
            <Nav.Link>Moments</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
