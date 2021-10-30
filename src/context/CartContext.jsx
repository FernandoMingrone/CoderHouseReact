import { createContext, useEffect, useState } from "react";


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem("carrito")) || []

const CartProvider = ( {children} ) => {

     const [carrito, setCarrito] = useState(init)
  console.log(carrito)

  
  const addToCart = (item) => {
    setCarrito([...carrito, item])
  }
  
  const removeItem = (ItemId) => {
    const newCart = carrito.filter( (prod) => prod.id !== ItemId)
    setCarrito ( newCart )
  }

  const calcularCantidad = () => {
    return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0)
  } 

  const vaciarCarrito = () => {
    setCarrito([])
  }
  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
  }, [carrito])
    return (
        <CartContext.Provider value={ { 
        carrito,
        addToCart,
        removeItem,
        calcularCantidad,
        vaciarCarrito} }> 
            {children}
        </CartContext.Provider>
        
      );
}
 
export default CartProvider;