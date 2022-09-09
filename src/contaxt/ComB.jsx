import  React, { useContext } from 'react';
import ComC from './ComC';
import { Name } from './Contaxt';

const ComB = () => {
    const name =  useContext(Name);
    return <h1>My name is {name.fname} {name.lname}. From B City is {name.city}</h1>
};

export default ComB;