import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Image_API = 'https://image.tmdb.org/t/p/w500';
const Timings =["10:30 AM","3:00PM","6:00PM","9:00PM"];

export default function Movie() {
    const navigate =useNavigate();
    const location = useLocation();
    // Safely access state and provide fallback values
    const { title, overview, poster_path } = location.state;
    const [latLng,setLatLng] =useState({});
    const [theatres,setTheatres] = useState([]);

   useEffect(()=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position)=>{
            setLatLng({
                lat:position.coords.latitude,
                lng:position.coords.longitude
            });
        })
    }
   },[])
    useEffect(()=>{
           //console.log(latLng);
           if(Object.keys(latLng).length > 0){
        // if (latLng.lat && latLng.lng) {
          //  const geoAPI=`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.03624137908818,15.828720650000001,30000&bias=proximity:78.03624137908818,15.828720650000001&limit=20&apiKey=22401ce249b94fe89d805d697ab8e189`;
           const geoAPI =`https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:78.4740613,17.360589,10000&bias=proximity:78.4740613,17.360589&limit=20&apiKey=22401ce249b94fe89d805d697ab8e189`;
          axios.get(geoAPI).then(res =>{
            console.log(res.data.features)
            const featuresArr =res.data.features;
            const names =[];
            featuresArr.forEach((feature) =>{
                    if (feature.properties && feature.properties.name) {
                        names.push(feature.properties.name);
                    }

        });
        setTheatres(names);
    }).catch(err => {
                console.log("Geoapify API error:", err);
            });
           }
    },[latLng])

    return (
        <div>
            <Row>
                <Col>
                    <div style={{ padding: 70 }}>

         <img style={{ borderRadius: 8, marginBottom: 24 }}
                src={Image_API + poster_path} height={250} width={200}  />
                        <h4>{title}</h4>
                        <div>
                            {overview}
                        </div>
                    </div>
                </Col>
                <Col>
                <div style={{ padding: 50 }}>
                  {theatres.length > 0 ? (
                            theatres.map((theatre, idx) => (
                                <div key={idx} style={{ marginBottom: 16 }}>
                                    <div>{theatre}</div>
                                    {Timings.map((time, tIdx) => (
                                        <Button onClick={()=>{
                                            navigate ('/select', {state: {title:title}})
                                        }} key={tIdx} style={{ margin: 5 }}>{time}</Button>
                                    ))}
                                </div>
                            ))
                        ) : (
                            <div>No theatres found nearby.</div>
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
}