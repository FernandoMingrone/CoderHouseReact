import ItemList from "./ItemList"
// import { useParams } from "react-router-dom"
import { useEffect, useState  } from "react"
import { Container } from "react-bootstrap"


const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
 
    
    const getItemsAsync = () =>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then((res)=>{setItems(res)
        })
        .finally(()=>{setLoading(false)});
    }

     useEffect(() => {
         setLoading(true)
        getItemsAsync();
        
    
    },[]);
    return ( 
        <>
            <div>
                {loading ? (<div className="d-flex justify-content-center align-items-center" style={{ height: "88vh" }}>
                                <div className="spinner-border text-secondary justify-content-center" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>) 
                        : <ItemList items={items} />}
                
            </div>
        </>

     );
}
 
export default ItemListContainer;