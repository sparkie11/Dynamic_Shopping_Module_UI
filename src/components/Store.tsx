import storeItems from "../data/items.json";
import { Col, Row } from "react-bootstrap";

export function Store(){
    return (

        <>
    <h1> store </h1>

    <Row>
        {storeItems.map(item =>  (
        <Col>
        {JSON.stringify(item)}
        </Col>

))}
    </Row>

    

    
    </>
    )

}