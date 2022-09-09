import { Button, Grid } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import React, { useState } from "react";

const TodoList = (probs) => {
    const [line, setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <li>
            <Grid container spacing={0}>
                <Grid xs={10} sx={{mt:1}}>
                    <span style={{ textDecoration: line? 'line-through':'none'}}>{probs.data}</span>
                </Grid>
                <Grid xs={2}>
                    <Button onClick={cutIt} style={{ color: 'red'}}><RemoveCircleIcon/></Button>
                </Grid>
            </Grid>
        </li>
    );
};

export default TodoList;