import  React, { createContext } from 'react';
import ComA from "./ComA";
import ComC from './ComC';

const Name = createContext();

const data = {
    fname: "Rushabh",
    lname: "Sorathiya",
    city: "Rajkot",
};
const Contaxt = () => {
    return (
        <>
            <Name.Provider value={data}>  
                <ComA />
            </Name.Provider>
        </>
    );
};

export default Contaxt;
export {Name};