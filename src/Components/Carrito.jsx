import { useContext } from "react";
import CustomProvider from "./CustomProvider";


const Carrito = () => {
    
    const [carrito, setCarrito] = useContext(CustomProvider)
    
    return ( 
        <>
            {carrito.map((item) =>{
                return (
                    <ul class="list-group">
                        <li class="list-group-item">{item.image}</li>
                        <li class="list-group-item">{item.title}</li>
                        <li class="list-group-item">{item.price}</li>
                    </ul>
                )
            })}
        </>
     );
    }
 
export default Carrito;
