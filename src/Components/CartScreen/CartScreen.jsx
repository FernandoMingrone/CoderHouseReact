import { prettyDOM } from "@testing-library/dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartScreen = () => {
    
    const { carrito } = useContext(CartContext)
    
    return ( 
        <>
            <div className="container my-5">
                <h2>Resumen de compra</h2>
                {carrito.map( (item) => ( 
                        <ul class="list-group">
                            <li class="list-group-item">{item.image}</li>
                            <li class="list-group-item">{item.title}</li>
                            <li class="list-group-item">{item.price}</li>
                        </ul>
                ))
                }
            </div>
        </>
);
    }
export default CartScreen;
