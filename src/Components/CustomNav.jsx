import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

const {Item} = Nav

const CustomNav = () => {
    return ( 
        <Nav>
            <Item className="d-flex justify-content-end">
                <Link to="/categoria/1">Categoria 1</Link>
                <Link to="/categoria/2">Categoria 2</Link>

            </Item>
        </Nav>
     );
}
 
export default CustomNav;