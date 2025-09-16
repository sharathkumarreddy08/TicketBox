import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { Row,Col, Button} from "react-bootstrap";


export default function SelectSeat(){
    const location =useLocation();
const { title } = location.state || {};
const [seatsMatrix,setSeatsMatrix]=useState([]);
const [selectedSeats,setSelectedSeats]=useState([]);
const navigate =useNavigate();
const createSeats =()=>{
    let totalRows=5;
    let numberOfSeatsInaRow =8;
    let tempSeats =[];
    let row=0;
    let ch ='A';
    while(row <totalRows){
        let col =1;
        let rowArr =[];
        while (col <= numberOfSeatsInaRow){
            rowArr.push(ch+col);
            col++;
        }
        tempSeats.push(rowArr);
        row++;
        ch =String.fromCharCode(ch.charCodeAt(0) +1)
    }
    setSeatsMatrix(tempSeats)
}
const handleSelect = (newSeats)=>{
 setSelectedSeats([...selectedSeats,newSeats]);
}

useEffect(()=>{
    createSeats();
},[])

    return(
        <div style={{padding:45}}>
             <div>
                <h3 className="d-inline-block">{title}</h3>
                <div style={{marginLeft:120}} className="d-inline-block">screen this time</div>
             </div>
             <div style={{marginTop:35}}>
                {
                    seatsMatrix.map((seatsArr,rowIndex)=>{
                        return(
                            <Row key={`row-${rowIndex}`} style={{marginBottom:20}}>
                                { seatsArr.map((seat)=>{
                                    let isSelected = selectedSeats.indexOf(seat) > -1;
                                        return <Col key={seat} style={{marginRight:80}}>
                                        <Button  style={{backgroundColor: isSelected ? 'green' : 'red',border:'none'}} 
                                        onClick={()=>handleSelect(seat)}>{seat}</Button>
                                        </Col>
                                    })
                                }
                            </Row>
                        )
                    })
                }
             </div>
             <div style={{marginTop:40}}>
                {
                selectedSeats.length > 0 ?
                <div>
                    {selectedSeats.map((seat)=>{
                        return <span key={seat} style={{marginRight:7}}>{seat}</span>
                    })}
                    seat selected
                     <div>
                        <h4>Total : Rs.{selectedSeats.length *200}</h4>
                        <Button onClick={()=> navigate('/sucess')}>Checkout</Button>
                     </div>

                     </div> :
                     <div>no seat selected</div>
                }
             </div>


            </div>
    )
}