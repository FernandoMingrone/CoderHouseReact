import CustomNav from "./CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { FaShoppingCart } from "react-icons/fa" 
import { Link } from "react-router-dom"

const {Brand,Toggle,Collapse} = Navbar 

const Header = () => {
    return ( 
        <Navbar as="header" expand="sm" bg="info" variant="light">
            <Container fluid={true} className="justify-content-around">
                <Brand>
                    <Link to="/">
                        <h1>FUNGI</h1>
                    </ Link>
                </Brand>
                <Toggle />
                <Collapse>
                    <FaShoppingCart className="m-3"/>
                    <CustomNav />
                </Collapse>
            </Container>
        </Navbar>

     );
}

export default Header;