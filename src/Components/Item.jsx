// import Card from "react-bootstrap/Card"
// import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"



// const { Body, Img, Footer, Text, Title } = Card

const Item = ({aumentar, contador, restar, stock, title, image, id, category, price, description}) => {

    return ( 
        <div className="col">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                        {category} - {price}</p>
                    <Link className="btn btn-primary" to={"/producto/"+id}>VER</Link>
                
                </div>
            </div>
        </div>
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
     );
}
//   <ItemCount initial="9" contador={contador} aumentar={aumentar} restar={restar} stock={stock}/> 
export default Item;