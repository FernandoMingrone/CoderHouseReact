import CustomNav from "./CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { FaShoppingCart } from "react-icons/fa" 
import { Link } from "react-router-dom"

const {Brand,Toggle,Collapse} = Navbar 

const Header = () => {
    return ( 
        <Navbar as="header" expand="sm" bg="info" variant="light">
            <Container fluid={true} className="d-flex justify-content-between">
                <Brand>
                    <Link to="/">
                        <h1>FUNGI</h1>
                    </ Link>
                </Brand>
                <div>
                    <Toggle />
                    <Collapse>
                        <CustomNav />
                        <FaShoppingCart className="m-3" size="25px" />
                    </Collapse>
                </div>
            </Container>
        </Navbar>

     );
}

export default Header;