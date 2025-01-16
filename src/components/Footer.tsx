import { Navbar, Container } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary mt-auto">
          <Container style={{ maxWidth: "none" }}>
            <Navbar.Text>Your ultimate LeetCode companion for problem-solving.</Navbar.Text>
            <Navbar.Text>Created with ❤️ - Yi Xuan</Navbar.Text>
          </Container>
        </Navbar>
    );
  }