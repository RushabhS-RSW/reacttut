import React, { useEffect, useState } from "react";

const App = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    useEffect(() => {
        document.title = `Click here ${num} times`;
    });
    return (
        <>
            <button onClick={()=>{setNum(num + 1)}}> Click me {num}</button>
            <button onClick={()=>{setNums(nums + 1)}}> Click me {nums}</button>
        </>
    )
};

export default App;