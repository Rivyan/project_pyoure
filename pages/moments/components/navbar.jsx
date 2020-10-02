import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="/moments">pYoure Moments</Navbar.Brand>
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
      </Navbar>
    </div>
  );
}
