import { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"


const ItemCount = ({initial = 1, onAdd}) => {

    const [contador, setContador] = useState(initial)
    const [stock, setStock] = useState(5) //stock de ejemplo


    const aumentar = () => {
    setContador(contador + 1)
    contador >= stock ? setContador(contador + 0) : setContador(contador + 1)
    }

    const restar = () => {
    setContador(contador - 1)
    }

    const confirm = () => { 
        onAdd(contador) 
    }
    return ( 
        <>
                <Container>
                    <p className="mb-0 mt-3">Cantidad: {contador}</p>
                    <Button size="sm" onClick={restar}>-</Button>
                    <Button size="sm" className=" m-2" onClick={aumentar}>+</Button>
                    <Button size="sm" className="px-3" onClick={confirm}>Agregar al carrito</Button>
                </Container>
        </>
     );
}
 
export default ItemCount;