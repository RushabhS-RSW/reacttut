import React, { useState } from 'react';
import './search.css';
import Img from './Img';

const Search = () => {
    const [search, setSearch] = useState("");
    return (
        <>
            <center>
                <div className="search_bar">
                    <input type="text" name="search" onChange={(event)=>{setSearch(event.target.value)}} value={search} className="search" id="" />
                </div>
                <div className="mt-5">
                    <Img img={search}/>
                </div>
            </center>
        </>
    );
};

export default Search;