import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ( {item} ) => {

//1) itemDetail recibe del contexto addToCart
//2) itemDetail crea handleAgregar y usa addToCart pasandole por props el item y su data
//3) itemDetail le manda handleAgregar por props a ItemCount
//3) itemCount toma la cantidad por medio parametro de la funcion handleAgregar
//3) itemDetail recibe la cantidad por medio del parametro de handleAgregar (stateUpLifting)

    const { addToCart } = useContext(CartContext)
    
    console.log(item)
    
    const handleAgregar = (cantidad) => {

        console.log(cantidad)
        
        const newItem = {
            id: item.id,
            image : item.image,
            price : item.price,
            title : item.title,
            category : item.category,
            description : item.description,
            cantidad,
        }

        if (cantidad > 0) {
            addToCart(newItem)
        }
    }

    return ( 
        <div className="col d-flex justify-content-center m-4">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={item.image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        {item.description}
                        {item.category} - $ {item.price}</p>
                        <Link className="btn btn-secondary fs-6"  to={"/item/"+item.id}>info</Link>
                <ItemCount handleAgregar={handleAgregar}/>
                </div>
            </div>
        </div>
        );
}
    
export default ItemDetail;

        // <Card className="w-75" style={{minWidth: 200, height: 800}}>
        //     <Img src={imagen} alt={title} style={{minWidth: 200, height: 800}}/>
        //     <Body>
        //         <Title>{title}</Title>
        //         <Text>
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam incidunt nostrum, quo in tempora?
        //         </Text>
        //         <ItemCount initial="9" contador={contador} aumentar={aumentar} restar={restar} stock={stock}/>
        //     </Body>
        //     <Footer>
        //         <Button variant="secondary">Ver detalle</Button>
        //     </Footer>
        // </Card>



//TRAERME EL CONTEXTO
//TRAER EL HOOK PARA LEER EL CONTEXTO



//DE TODO EL CONTEXTO SOLO ME SIRVE EL AGREGAR PRODUCTO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PERO EN EL WIDGET Y EN EL CART SI ME VAN A FUNCIONAR LAS OTRAS FUNCIONES
//EN ESOS VOY A TENER QUE SACAR EL CARRITO PARA SABER CUANTAS UNIDADES Y TODO ESO, RECORRER EL ARRAY Y MOSTRARLO EN PANTALLA
//VOY A TENER QUE USAR EL CONTEXTO PERO NO CAMBIARLO.
//QUEDO EL COMO SE LEE EL CONTEXTO

//REVISAR EL REPO DEL PROFE