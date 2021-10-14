import { Link } from "react-router-dom"

const ItemDetail = ({ title, image, category, price, description, id}) => {

console.log(title)
    return ( 
        <div className="col d-flex justify-content-center m-4">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {description}
                        {category} - {price}</p>
                        <Link className="btn btn-primary" to={"/item/"+id}>VER</Link>
                {/* <ItemCount initial="9" contador={contador} aumentar={aumentar} restar={restar} stock={stock}/> */}
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