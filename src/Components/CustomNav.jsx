import Nav from "react-bootstrap/Nav"
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const {Link, Item} = Nav

const CustomNav = () => {
    return ( 
        <Nav>
            <Item className="d-flex justify-content-end">
                <Link to="">Categoria 1</Link>
                <Link to="">Categoria 1</Link>
                {/* <ShoppingCartIcon /> */}
            </Item>
        </Nav>
     );
}
 
export default CustomNav;