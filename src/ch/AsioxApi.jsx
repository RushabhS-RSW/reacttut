import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { Grid } from '@mui/material';

const AsioxApi = () =>{
    const [games, setGames] = useState([]);
    useEffect(() => {
        async function data(){
            const app = await axios.get('https://api.sampleapis.com/switch/games');
            console.log(app.data);
            setGames(app.data);
            return app.data;
        }
        data();
    }, []);
    const gamesData = () => {
        let content = [];
        for (let i = 0; i < games.length; i++) {
            const val = games[i];
            content.push(<Card key={i} title={val.name} desc={val.developers[0]}/>);
          }
          return content;
    }
    return (
        <>
            <Grid container spacing={2}>                
            {
                gamesData()
            }
           </Grid>
        </>
    )
}

export default AsioxApi;