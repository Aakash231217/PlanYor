import React, { useState } from "react";
import './inputSearch.css';

function SearchBar(){
    const [val,setVal]=useState('')
    const data=[
        "Kashmir",
        "Kerala",
        "Ladakh",
        "Uttarakhand",
        "Jaisalmer",
        "Goa",
        "Kedarnath"
    ]
    return(
        <div className="main">
            <input list="data" onChange={(e)=>setVal(e.target.value)} placeholder="Search" />
            <datalist id="data">
                {/* <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option> */}
                
                {data.map((op)=><option>{op}</option>)}
            </datalist>
            {val==="Kashmir" ? <h1><a href="https://kashmirtrips.netlify.app">Kashmir</a></h1>:(val==="Kerala")?<h1><a href="https://keralatrips.netlify.app">Kerala</a></h1>:val==="Uttarakhand" ? <h1><a href="https://kashmirtrips.netlify.app">Kedarkantha</a></h1>:<button>Search here</button>}
        </div>
    );
}
export default SearchBar;

