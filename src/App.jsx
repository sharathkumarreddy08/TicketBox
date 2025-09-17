import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movie from './Components/Movie';
import SelectSeat from './Components/SelectSeat';
import Sucess from './Components/Sucess';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';


function App() {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const userEmail=localStorage.getItem('userEmail');
    if(userEmail){
      setUser(userEmail);
    }
  },[user])

  const handleLogout =()=>{
    localStorage.removeItem('userEmail');
    // setUser(null);
     navigate('/login')//login
  }
  return(
    <div>
         <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
               <h3 className='d-inline-block'> Ticket Box</h3>
          </Navbar.Brand>
           {user && <Button onClick={()=>handleLogout()} className='logout-btn'>Logout</Button>}
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/movie/:id' element={<Movie/>}/>
        <Route path='/select' element={<SelectSeat/>}/>
        <Route path='/sucess' element={<Sucess/>}/>




      </Routes>
    </div>

  )
}
export default App;