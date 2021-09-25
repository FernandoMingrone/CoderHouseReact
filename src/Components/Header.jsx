import CustomNav from "./CustomNav"
import Navbar from "react-bootstrap/Navbar"
import Container from 'react-bootstrap/Container'
import { FaShoppingCart } from "react-icons/fa" 
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const {Brand,Toggle,Collapse} = Navbar 

const Header = () => {
    return ( 
        <Navbar as="header" expand="sm" bg="info" variant="light">
            <Container fluid className="justify-content-around">
                <Brand>
                    <h1>FUNGI</h1>
                </Brand>
                <Toggle />
                <Collapse>
                    {/* <ShoppingCartIcon /> */}
                    <FaShoppingCart />
                    <CustomNav />
                </Collapse>
            </Container>
        </Navbar>

     );
}

export default Header;