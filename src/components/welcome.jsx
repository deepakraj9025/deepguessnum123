import React ,{useEffect, useState } from 'react';
import "./welcome.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuestion}from '@fortawesome/free-solid-svg-icons';
import App from '../App';
import { Link } from 'react-router-dom';

let Welcomepage=()=>{
    
const [color,setColor]=useState('white')
const colors=['red','pink','green']

useEffect(()=>{
    const interval=setInterval(()=>{
        const randomcolor=Math.floor(Math.random()*colors.length)
        setColor(colors[randomcolor])
    },500)
    return ()=> clearInterval(interval)
},[])
;



    return(
        <>
        <body>
          <div className='whole'>  
        <FontAwesomeIcon className='question' icon={faQuestion} />
    <h1 className='head'>Guess The Number</h1>
    <Link to={ '/start'}><button className="but" style={{backgroundColor:color}}>WELCOME</button></Link>
    </div>
    </body>
        </>
    )
}
export default Welcomepage;

