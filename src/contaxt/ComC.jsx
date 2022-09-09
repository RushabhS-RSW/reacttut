import  React from 'react';
import { Name } from './Contaxt';

const ComC = () => {
    return (
        <>
            <Name.Consumer>
                {(name) =>{

                    return <h1>My name is {name.fname} {name.lname}. City is {name.city}</h1>
                    } 
                }
            </Name.Consumer>
        </>
    );
};

export default ComC;