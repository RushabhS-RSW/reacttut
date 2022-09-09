import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AccordionData = (probs) => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h5 onClick={() => setShow(!show)}>{probs.que}</h5>
            { show && <p>{probs.ans}</p>}
            <hr/>
        </>
    )
};

export default AccordionData;