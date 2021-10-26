import CustomNav from "../NavBar/CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const {Brand,Toggle,Collapse} = Navbar 

const Header = () => {
    return ( 
        <Navbar as="header" className="bg-dark" expand="sm" variant="">
            <Container fluid={true} className="d-flex justify-content-between">
                <Brand>
                    <Link to="/" className="text-decoration-none">
                        <h1 className="text-white">FUNGI</h1>
                    </ Link>
                </Brand>
                <div>
                    <Toggle />
                    <Collapse>
                        <CustomNav />
                        <Link to="/cart">
                            <CartWidget />
                        </Link>
                    </Collapse>
                </div>
            </Container>
        </Navbar>

     );
}

export default Header;