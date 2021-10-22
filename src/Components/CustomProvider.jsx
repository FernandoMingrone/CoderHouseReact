import { useState, createContext, useContext } from "react";

export const contexto = createContext()

const { Provider } = contexto; // Consumer no se usa tanto ahora, hay otra forma de consumir el contexto
                               //ya que solo se podria usar en formato jsx
                               //En vez del consumer se usa el hook useContext 

export const useCarrito = () => {
    return useContext(contexto)
}

const CustomProvider = ({children}) => {

        const [carrito, setCarrito] = useState([])
        console.log(carrito)
        const agregarProducto = (item) => {
            setCarrito([item])
        }

        const eliminarProducto = (id) => {
            console.log(id)
        }

        const vaciarCarrito = () => {
            setCarrito([])
        }

        const isInCarrito = (item) => {
            
        }
        // const cambiarCarrito = (nuevoCarrito) => {
        //     setCarrito(nuevoCarrito)
        // }

        const valor_del_contexto = {
            carrito,
            agregarProducto,
            eliminarProducto,
            vaciarCarrito
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

    

