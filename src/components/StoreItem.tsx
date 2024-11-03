import { Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id : number,
    name : string,
    price : number,
    imgUrl : string 
}

export  function StoreItem({id, name, price, imgUrl} : StoreItemProps) {
  return (
    <Card>
        <Card.Img variant="top" src={imgUrl} height={"200px"} style={{objectFit:'cover'}} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text >{formatCurrency(price)}</Card.Text>
        </Card.Body>
        {/* <Card.Footer>
            <small className="text-muted">ID: {id}</small>
        </Card.Footer> */}
    </Card>
  )
}
