import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"


const { Body, Img, Footer, Link, Text, Title } = Card

const CustomCard = () => {
    return ( 
        <Card>
            <Img src="http://placehold.it/300x200" alt="" />
            <Body>
                <Title>Hongos</Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo veniam incidunt nostrum, quo in tempora?
                </Text>
            </Body>
            <Footer>
                <Button variant="secondary">Ver detalle</Button>
            </Footer>
        </Card>
     );
}
 
export default CustomCard;