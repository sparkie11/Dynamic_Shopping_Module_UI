import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id : number,
    name : string,
    price : number,
    imgUrl : string 
}

export  function StoreItem({id, name, price, imgUrl} : StoreItemProps) {
    const { getItemQuantity,increaseCartQuantity,decreaseCartQuantity, removeFromCart } = useShoppingCart ();
    const quantity= getItemQuantity(id);
  return (
    <Card key={id} className="h-100">
        <Card.Img variant="top" src={imgUrl} height={"200px"} style={{objectFit:'cover'}} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text >{formatCurrency(price)}</Card.Text>
            <div className="mt-auto">
                {quantity === 0 ?( <Button className="w-100" onClick={()=> increaseCartQuantity(id)}>Add to cart</Button> ) : <div className="d-flex align-items-center flex-column" style={{gap:'.5rem'}}>
                    <div className="d-flex align-items-center justify-content-center" style={{gap:'.5rem'}}><Button onClick={()=>decreaseCartQuantity(id)}>-</Button><div > <span className="fs-3">{quantity}</span> in cart</div> <Button  onClick={()=> increaseCartQuantity(id)}>+</Button></div><Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>Remove</Button>
                </div>}

            </div>
        </Card.Body>
        {/* <Card.Footer>
            <small className="text-muted">ID: {id}</small>
        </Card.Footer> */}
    </Card>
  )
}
