

import {Card, Button} from "react-bootstrap";

const Cards = (props) =>{
    return(
        <Card style={{ width: '17rem', border:"1px solid white", backgroundColor: "#582995", borderRadius:"10px"}}>
            <Card.Img variant="top" src={props.src} style={{borderRadius:"10px", border:"1px solid white"}} />
            <Card.Body>
                <Card.Title style={{color:"antiquewhite"}}>{props.title}</Card.Title>
                <Card.Text style={{color:"white"}}>
                    {props.text}
                </Card.Text>
                <Button variant="success" style={{border:"1px solid white"}}>Купити</Button>
            </Card.Body>
        </Card>
    );
}

export default Cards