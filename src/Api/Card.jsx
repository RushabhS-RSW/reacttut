import React    from 'react';

const Card = (probs) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body text-center">
                    <img class="card-img-top" src={probs.avatar} style={{width:'50px', height:'50px', borderRadius:'50px'}} alt="Card image cap" />
                        <h1>{probs.fname} {probs.lname}</h1>
                        <a href ={`mailto:${probs.email}`}>{probs.email}</a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;