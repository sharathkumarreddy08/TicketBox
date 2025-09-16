import { Row,Col } from "react-bootstrap"
import sucess from '../assets/sucess.png';
import qrcode from '../assets/qr.png';
export default function Sucess(){
    return(
        <div style={{marginTop:45}}>
            <Row>
                <Col>
                <div style={{padding:50,display:'flex', justifyContent:'center', alignItems:'center',marginLeft:130}}>
                        <div>
                        <img src={sucess} height={270}/>
                        </div>
                      <div style={{marginLeft:10}}>
                        <h5>Tickets confirmed</h5>
                        <h6>Enjoy your movie</h6>
                       </div>
                </div>
                </Col>
                <Col>
                <div style={{padding:50,display:'flex',justifyContent:'center',alignItems:'center',marginLeft:190}}>
                    <img style={{backgroundColor:"white"}} src={qrcode} height={270}/>
                </div>
                   
                
            
             </Col>

                
            </Row>
        </div>
    )
}