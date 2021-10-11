import Row from "react-bootstrap/Row"
import Item from "./Item"



const ItemList = ({ items, restar, aumentar, contador }) => {


    return ( 
        <main className="p-5">
            <Row>
                        
                {items.length>0 && items.map((item, pos) => {
                        return <Item key={pos} id={item.id} category={item.category} price={item.price} title={item.title} image={item.image} contador={contador} aumentar={aumentar} 
                            restar={restar}
                            stock={item.stock}/>
                
                })
                } 
            </Row>
        </main>
    )
}

export default ItemList;