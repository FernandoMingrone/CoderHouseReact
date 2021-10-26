import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Container from 'react-bootstrap/Container'
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { CartContext } from "./context/CartContext"
import { useEffect, useState } from "react"
import CartScreen from "./Components/CartScreen/CartScreen"


const init = JSON.parse(localStorage.getItem("carrito")) || []

function App() {


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
  
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    
  }, [carrito])

  return (
    <>
      <CartContext.Provider value={ { 
        carrito,
        addToCart,
        removeItem,
        calcularCantidad
      }
        }>
        <BrowserRouter>
          <Header />
          <Container fluid>
              <Switch> 
                <Route exact path="/" component={ItemListContainer}/>

                <Route path="/categoria/:id" component={ItemListContainer}/>

                <Route path="/item/:id" component={ItemDetailContainer}/>

                <Route path="/cart" component={CartScreen}/>

              </Switch>
            <Footer />
          </Container>
        </BrowserRouter>
      </CartContext.Provider>

    </> 
  );
}

export default App;