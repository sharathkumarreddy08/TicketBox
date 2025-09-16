import { Card, Container } from "react-bootstrap";
import LoginImage from '../assets/login.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
  const [email,setEmail] =useState('');
  const navigate=useNavigate();

const handleSubmit =() =>{
  localStorage.setItem('userEmail',email);
  
  navigate('/home')
}

    return(
        <div className="auth-container">
            <Container>
                <Row>
                    <Col className="img-container">
                      <img src={LoginImage} width={450} height={450}  />
                    </Col>
                    <Col className="auth-inner-container">
                    <Card style={{width:'25rem',padding:10}}>
                        <Card.Body>
                                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  
        onChange={(e) =>setEmail(e.target.value)}
        value={email}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>confirm Password</Form.Label>
        <Form.Control type="password" placeholder=" confirm Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="login-btn" onClick={handleSubmit}>
        sign up
      </Button>
      </Form>
      <div style={{display:'flex',justifyContent:'center',marginTop:10}}>Already have an account? please <Card.Link href="login" style={{marginLeft:10}}>login</Card.Link> </div>
           </Card.Body>
        </Card>
       </Col>
       </Row>
      </Container>
     </div>  
      
    )
}