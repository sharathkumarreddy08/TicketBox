import axios from 'axios';
import  { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MOVIE_API ='https://api.themoviedb.org/3/movie/now_playing?api_key=74aaa6405736388c157d6552303ee3ba';
const Image_API ='https://image.tmdb.org/t/p/w500/';

export default function Home(){
    const navigate =useNavigate();
const [movies,setMovies] =useState([]);

    useEffect(()=>{
        const user =localStorage.getItem('userEmail');
        if(!user){
            navigate('/login')
        }
    },[])


    useEffect(()=>{
        axios.get(MOVIE_API).then((resp)=>{
            console.log(resp.data.results);
            setMovies(resp.data.results);
        })
    },[])
    const handleClick = (movie)=>{
       navigate('/movie/'+ movie.id, {state:
        {
            title: movie.title,
         overview: movie.overview,
        poster_path: movie.poster_path

    }});
    }

    return(
        <div style={{padding:15,display:'flex',flexWrap:'wrap'}}>
            {movies.map(movie => {
                return(
                    <div key={movie.id}>
                <Card onClick={()=> handleClick(movie)} style={{width:'24rem',padding:20,height:'auto' ,overflow:'hidden',margin:10}}>
                    <Card.Img src={Image_API + movie.poster_path}  width={80}></Card.Img>
                     <Card.Title>{movie.title}</Card.Title>
                </Card>
                </div>
                )
            })}
        </div>
    )
}