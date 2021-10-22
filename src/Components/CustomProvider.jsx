import { useState, createContext } from "react";

export const contexto = createContext()

const { Provider } = contexto;


const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {

    }

    const eliminarProducto = (producto) => {
        
    }

    const vaciarCarrito = (producto) => {
        
    }

    const isInCarrito = (producto) => {
        
    }
    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    const valor_del_contexto = {
        nombre,
        cambiarNombre
    }



    return (
        <>
            <Provider value={valor_del_contexto}>
                {children}
            </Provider>


        </>
      );
}
 
export default CustomProvider;

    

