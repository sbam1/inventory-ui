import {Container, Nav, Navbar} from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="primary" variant="light">
            <Container>
                <Navbar.Brand href="/dashboard">DashBoard</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/inventory">Inventory</Nav.Link>
                    <Nav.Link href="/order">Order</Nav.Link>
                    <Nav.Link href="/employee">Employee</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
