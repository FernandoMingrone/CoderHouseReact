import { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"


const ItemCount = ({initial = 1, handleAgregar}) => {

    const [cantidad, setCantidad] = useState(initial)
    const [stock] = useState(5) //stock de ejemplo

    

    const aumentar = () => {
    setCantidad(cantidad + 1)
    cantidad >= stock  ? setCantidad(cantidad + 0) : setCantidad(cantidad + 1)
    }

    const restar = () => {
        if (cantidad > 1) {
    setCantidad(cantidad - 1)
    }
}

    const confirm = () => {
        handleAgregar(cantidad)
    }

    return ( 
        <>
                <Container>
                    <p className="mb-0 mt-3">Cantidad: {cantidad}</p>
                    <Button size="sm" onClick={restar}>-</Button>
                    <Button size="sm" className=" m-2" onClick={aumentar}>+</Button>
                    <Button size="sm" className="px-3" onClick={confirm}>Agregar al carrito</Button>
                </Container>
        </>
     );
}
 
export default ItemCount;