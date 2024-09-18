import React from "react";
import winimg from './images/guessgif.gif'
import './winpage.css'
let Winpage=()=>{
    return(
        <>
<body>
    <div>
    <img src={winimg} alt="ima" width="300px" height="300px"/> 
    <h1 className="winhead" id="h1">YOU WIN</h1>
    </div>
</body>
        </>
    )
}
export default Winpage;