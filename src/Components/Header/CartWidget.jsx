import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa" 
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {

const {calcularCantidad} = useContext(CartContext)

    return ( 
        <div>
            <FaShoppingCart className="m-3" size="25px" color="white" />
            <span className="text-light" size="50px">{calcularCantidad()}</span>

        </div>
     );
}
 
export default CartWidget;