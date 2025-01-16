import Link from "next/link";
import Image from "next/image";
import nextConfig from '../../next.config';
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container style={{ maxWidth: "none" }}>
        <Navbar.Brand as={Link} href="/">
          <Image
            alt="Logo"
            src={`${nextConfig.basePath}/apple-touch-icon.png`}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Leetcode Tools
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Number
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
