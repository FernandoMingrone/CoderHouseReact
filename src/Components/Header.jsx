import CustomNav from "./CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { FaShoppingCart } from "react-icons/fa" 
import { Link } from "react-router-dom"

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
                        <FaShoppingCart className="m-3" size="25px" color="white" />
                    </Collapse>
                </div>
            </Container>
        </Navbar>

     );
}

export default Header;