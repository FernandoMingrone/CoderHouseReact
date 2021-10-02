import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

const ItemCount = ({aumentar, contador, restar}) => {


    return ( 
        <>
            <Container>
                <p className="mb-0 mt-3">Cantidad: {contador}</p>
                <Button size="sm"  onClick={aumentar}>+</Button>
                <Button size="sm" className=" m-2" onClick={restar}>-</Button>
                <Button size="sm" className="px-3">COMPRAR</Button>
            </Container>
        </>
     );
}
 
export default ItemCount;