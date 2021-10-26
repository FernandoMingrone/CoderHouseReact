import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartScreen = () => {
    
    const { carrito } = useContext(CartContext)
    
    //ME FALTA ARMAR BIEN EL CartScreen para que muestre bien todo, la cantidad y los precios

    return ( 
        <>
            <div className="container my-5">
                <h2>Resumen de compra</h2>
                {carrito.map( (item) => ( 
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top w-25" src={item.image} alt="imagen_producto" />
                            <li class="list-group-item">{item.title}</li>
                            <li class="list-group-item">{item.price}</li>
                        </div >
                ))
                }
            </div>
        </>
);
    }
export default CartScreen;
