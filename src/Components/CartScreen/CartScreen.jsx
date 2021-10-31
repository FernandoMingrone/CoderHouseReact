import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";


const CartScreen = () => {
    
    const { carrito, removeItem, vaciarCarrito } = useContext(CartContext)
    
    //ME FALTA ARMAR BIEN EL CartScreen para que muestre bien todo, la cantidad y los precios

    return ( 
        <>
            <div className="container my-5">
                <h2>Resumen de compra</h2>
                {carrito.map( (item) => ( 
                        <div className="card" style={{width: '18rem'}}>
                            <img className="card-img-top w-50 m-5" src={item.image} alt="imagen_producto" />
                            <li class="list-group-item">{item.title}</li>
                            <li class="list-group-item">Cantidad: {item.cantidad}</li>
                            <li class="list-group-item">Precio: {item.price * item.cantidad}</li>
                            <button className= "btn btn-danger" onClick={() => removeItem(item.id)}>
                                <BsTrash />
                                </button>
                            <hr/>
                        </div >
                ))
                }
                <hr/>
                {carrito.length > 0 ? (<button className="btn bg-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>) : (<Link to="/"><button className="btn bg-danger">Seguir comprando</button></Link>)}
                
            </div>
        </>
);
    }
export default CartScreen;
