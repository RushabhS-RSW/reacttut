import React from 'react';

const Img = (probs) => {
    const url = `https://source.unsplash.com/400x300/?${probs.img}`;
    return (
        <> 
        {probs.img && <img src={url} />}
        </>
    )
}
export default Img;