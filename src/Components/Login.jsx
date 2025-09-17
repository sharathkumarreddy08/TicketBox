import { Card, Container } from "react-bootstrap";
import LoginImage from '../assets/login.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login(){
const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('userEmail',email)
        navigate('/'); 
    };
    return(
        <div className="auth-container">
            <Container>
                <Row>
                    <Col className="img-container">
                      <img src={LoginImage} width={450} height={450}  />
                    </Col>
                    <Col className="auth-inner-container">
                    <Card style={{width:'25rem',padding:25}}>
                        <Card.Body>
                                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>    
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="login-btn" onClick={handleLogin}>
        Login
      </Button>
      </Form>
      <div style={{display:'flex',justifyContent:'center',marginTop:25}}>New here? please 
         <Card.Link href="/signup" style={{marginLeft:10}}>sign up</Card.Link></div>
           </Card.Body>
        </Card>
       </Col>
       </Row>
      </Container>
     </div>
    )
}