import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ItemCount from "./ItemCount"



const { Body, Img, Footer, Text, Title } = Card

const Item = ({aumentar, contador, restar, stock, title, imagen}) => {

    return ( 
        <Card className="w-75" style={{minWidth: 200, height: 800}}>
            <Img src={imagen} alt={title} style={{minWidth: 200, height: 800}}/>
            <Body>
                <Title>{title}</Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam incidunt nostrum, quo in tempora?
                </Text>
                <ItemCount initial="9" contador={contador} aumentar={aumentar} restar={restar} stock={stock}/>
            </Body>
            <Footer>
                <Button variant="secondary">Ver detalle</Button>
            </Footer>
        </Card>
     );
}
 
export default Item;