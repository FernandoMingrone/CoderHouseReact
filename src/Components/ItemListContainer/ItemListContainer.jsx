import ItemList from "./ItemList"
import { useContext, useEffect, useState  } from "react"
import { UIContext } from "../../context/UIContext"


const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const {loading, setLoading} = useContext(UIContext)
 
    
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