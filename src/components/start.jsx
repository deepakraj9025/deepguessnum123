import React, { useEffect, useState } from "react";
import "./start.css";
import Game from "./game";
import { Link } from "react-router-dom";
import axios from "axios";
let Startpage=()=>{
   
    const[data,setData]=useState('');
    const[minvalue,setMinvalue]=useState([])

    const handlechange=(event)=>{
        setData(event.target.value)
    };

   
    useEffect(()=> {  
      axios.get("http://127.0.0.1:3003/institute/api/guessnumgame/getData",{
          headers:{
              "Content-Type":'application/json'
          }
      }).then((res)=>{setMinvalue(res.data.getData[0].minvalue)}
        ).catch(err=>console.log(err))
     
    },[])
   
   
  
return(
    <>
  <body>
    <h2 className="gamename">Guess The Number</h2>
    
    <p className="parahead">Enter PlayerName:</p>
    <input className="in" type="text" name="name" placeholder="enter the name" 
     onChange={handlechange} value={data}/><br/>
       <Link to={'/game'} state={{username:data}}>
        <button className="sbut" >START</button>
        </Link>
   </body>
   
    </>
);

}

export default Startpage;
