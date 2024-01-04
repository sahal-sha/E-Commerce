import React,{useState} from "react";
import  Card  from "react-bootstrap/Card";
import  CardGroup  from "react-bootstrap/CardGroup";
import {Items} from '../../../Items';
import { Button } from "react-bootstrap";
import  Modal  from "react-bootstrap/Modal";


const Dinning = ({ nav }) =>{
    const [items,setItems] = useState(Items)
    const DinninghallItems = items.filter((item)=>item.type === 'Dinning' || item.type === 'Light');
    return(
        <div>
            <h3 style={{ color: "silver"}}>DINNING</h3>
            <div className="container">
                <div className="row">
                    {
                      DinninghallItems.map((item)=>(
                        <CardGroup className="col-6 col-md-3">
                            <Card className="m-2 mt-4 md-3">
                                <Card.Img style={{ maxHeight: "12rem"}} src={item.Image} />
                                <Card.Body>
                                    <Card.Text>{item.ProductName}</Card.Text>
                                    <Card.Text>Price:{item.Price}₹</Card.Text>
                                    <Button variant="secondary" style={{margin:"2px"}} onClick={()=> nav(`/Viewproduct/${item.Id}`)}>View Product</Button>


                                </Card.Body>
                            </Card>
                        </CardGroup>
                      ))  
                    }
                </div>
            </div>
        </div>
    )
}

export default Dinning