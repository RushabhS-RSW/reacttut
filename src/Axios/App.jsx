import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState();
    const [name, setName ] = useState();
    useEffect(() => {
            async function getData(){
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                setName(res.data.name);
            }
            getData();
    },[num]);
    
    return (
        <>
        <h1>your name is {name}</h1>
        <h1>Your Select Value is {num}</h1>
            <select value={num} onChange={(event) => {setNum(event.target.value);}}>
                    <option value="1"> 1 </option>
                    <option value="25"> 25 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
            </select>
        </>
    );
};

export default App;