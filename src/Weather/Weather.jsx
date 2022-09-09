import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    useEffect(() => {
        async function data() {
            let res, error;
            try{
                res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=01b096896570783cf92aafab6584c3ce`);
            }catch(err)
            {
                error = "Data not found";
            }
            if(res && error == null)
            {
                console.log(res);
                setWeather(res.data.main.temp);
            }
            else{
                setWeather("Not Found");
            }
        }
        data();
    },[city]);
    useEffect(() => {
        axios.get('https://ipapi.co/json/').then((res)=>{
            if(res.status === 200){
                setCity(res.data.city);
            }
        })
    },[]);
    return (
        <>
            <center>
                <div className="search_bar">
                    <input type="text" name="search" onChange={(event)=>{setCity(event.target.value)}} value={city} className="search" id="" />
                </div>
                <div className="mt-5">
                    Temp:{((weather)/9).toFixed(0)}°C
                </div>
            </center>
        </>
    );
}

export default Weather;