import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {


//TRAERME EL CONTEXTO
//TRAER EL HOOK PARA LEER EL CONTEXTO
//DE TODO EL CONTEXTO SOLO ME SIRVE EL AGREGAR PRODUCTO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//PERO EN EL WIDGET Y EN EL CART SI ME VAN A FUNCIONAR LAS OTRAS FUNCIONES
//EN ESOS VOY A TENER QUE SACAR EL CARRITO PARA SABER CUANTAS UNIDADES Y TODO ESO, RECORRER EL ARRAY Y MOSTRARLO EN PANTALLA
//VOY A TENER QUE USAR EL CONTEXTO PERO NO CAMBIARLO.
//QUEDO EL COMO SE LEE EL CONTEXTO

//REVISAR EL REPO DEL PROFE


    const onAdd = (cantidad) => {
        console.log("item detail")
        console.log(item)
        console.log(cantidad)
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
                <ItemCount  onAdd={onAdd}/>
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