import { Button,Card,Col} from 'react-bootstrap';
import React,{useState}from 'react';
import "./Togglecomps.css";


 export const Togglecomps = () => {
     const [colorName,setcolorName]=useState("orange");
    return (
        <div>
            
            <Card>
                <img src="background.jpeg" alt=""></img>
           <Col>
                <h2>PickUpBiz</h2>
                </Col>
                <p><b>These are the contents</b></p>
                <span style={{color:colorName}}>
                    <h1>PDAC Course</h1>
                </span>
                <Col>
                <Button className="pqr" onClick={()=>
                colorName ==="Blue" ? setcolorName  ("orange") : setcolorName("Blue")
                }>Default</Button>
                </Col>
                <Col>
                <Button className="pqr" onClick={()=>
                 setcolorName  ("red") 
                }>red</Button>
                </Col>
                <Col>
                 <Button className="pqr" onClick={()=>
                 setcolorName  ("Green") 
                }>Green</Button>
                </Col>
                <Col>
                 <Button className="pqr"onClick={()=>
                 setcolorName  ("Yellow") 
                }>Yellow</Button>
                </Col>
            </Card>
            
        </div>
    );
};

