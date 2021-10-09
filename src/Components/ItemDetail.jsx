import { useState, useEffect } from "react"

// import Card from "react-bootstrap/Card"
// import Button from "react-bootstrap/Button"
// import ItemCount from "./ItemCount"



// const { Body, Img, Footer, Text, Title } = Card

const ItemDetail = (props) => {

    const [identificador] = props.match.params.id;
    const [items, setItems] = useState({})

        const getItemsAsync = () =>{
        fetch("https://fakestoreapi.com/products"+identificador)
        .then(res=>res.json())
        .then((resp)=>{
            console.log(resp);
            setItems(resp)
        });
    }
    // new Promise(resolve => 
    //     setTimeout(
    //         () => resolve({items: items_data}),
    //         2000 
    //     )
    
    // );
    
    useEffect(() => {
        getItemsAsync();
        
        // getItemsAsync().then(result => {
        //     setItems(result.items);
        // })
    },[])
    

    return ( 
        <div className="col">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={items.image} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">
                        {items.description}
                        {items.category} - {items.price}</p>
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