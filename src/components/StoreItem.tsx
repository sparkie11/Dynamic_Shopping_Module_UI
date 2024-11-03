import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"

type StoreItemProps = {
    id : number,
    name : string,
    price : number,
    imgUrl : string 
}

export  function StoreItem({id, name, price, imgUrl} : StoreItemProps) {
    const quantity= 2;
  return (
    <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height={"200px"} style={{objectFit:'cover'}} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text >{formatCurrency(price)}</Card.Text>
            <div className="mt-auto">
                {quantity === 0 ?( <Button className="w-100">Add to cart</Button> ) : <div className="d-flex align-items-center flex-column" style={{gap:'.5rem'}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}><Button>-</Button><div > <span className="fs-3">{quantity}</span> in cart</div> <Button>+</Button></div><Button variant="danger" size="sm">Remove</Button>
                </div>}

            </div>
        </Card.Body>
        {/* <Card.Footer>
            <small className="text-muted">ID: {id}</small>
        </Card.Footer> */}
    </Card>
  )
}
