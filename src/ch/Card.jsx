import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';
import './card.css';

const Card = (probs) => {
    return (
        <Grid item xs={4}>
            <div className="card">
                <div className="card-body">
                    <center>
                        <h1>{probs.title}</h1>
                        <p>{probs.desc}</p>
                    </center>
                </div>
            </div>
        </Grid>
    )
}
export default Card;