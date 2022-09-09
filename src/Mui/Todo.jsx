import { Button, Card, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React, { useState } from 'react';
import TodoList from './TodoList';
import './todo.css';

const Todo = () => {
    const [todo, setTodo] = useState("");
    const [list ,setList] = useState([]);
    const eventList = (event) => {
        setTodo(event.target.value);
    }
    const List = () =>{
        setList((pv)=>{
            return [...pv,todo]
        });
        setTodo("");
    }
    return (
        <Container maxWidth="sm">
            <Grid>
                <Grid xs={4}>
                    <Card sx={{mt:15, p:5}}>
                        <center>
                            <h1>Todo List</h1>
                            <Grid container spacing={0} >
                                <Grid xs={10}>
                                    <TextField id="outlined-basic" value={todo} onChange={eventList} label="Todo" variant="outlined"/>
                                </Grid>
                                <Grid xs={2}>
                                    <Button className='btn' onClick={List}><AddCircleOutlineIcon/></Button>
                                </Grid>
                            </Grid><hr/>
                                <ol>
                                    {
                                        list.map((val,index)=>{
                                            return <TodoList key={index} data={val}/>;
                                        })
                                    }
                                </ol>
                        </center>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Todo;