import React, { useEffect, useState } from "react";
import "./game.css";
import { useLocation} from "react-router-dom";
import img from './images/guessimg.jpg';
import axios from "axios";

function Game(props){ 
   const Location=useLocation();
    const{username}=Location.state
    // const[un,setUn]=useState(username)
    
    const[indata,setIndata]=useState({in:''});
    const [randomnum, setRandomnum] = useState(null)
    let [err,setErr]=useState({})
     let [i,setI]=useState(0)
    let [second,setSecond]=useState(0) ;
    let[minute,setMinute]=useState(0);
    let [forsec,setForsec]=useState(second);
    let [formin,setFormin]=useState(minute);

    // const histroy=unstable_HistoryRouter()

    let validation=()=>{
    let err={}
    if(indata.in==randomnum){ 
        window.location.href='/win'
  //       try{
  //           axios.post('http://127.0.0.1:3003/institute/api/guessnumgame/postData',{username:username,
  //                                                                                   time:formin+':'+forsec });
  //         console.log('username has posted')
  //    }
  //    catch(err){
  //  console.error('error posting username',err)
  //    }
   }

    else{
        if(indata.in==randomnum){
           window.location.href='/win'
  //          try{
  //           axios.post('http://127.0.0.1:3003/institute/api/guessnumgame/postData',{username:username});
  //         console.log('username has posted')
  //    }
  //    catch(err){
  //  console.error('error posting username',err)
  //    }
          
        }
        else if(i>5){
            window.location.href='/loss'
           
           }
        else{
            err.chance='Still You Have'+(5-i);
            if(indata.in>randomnum){
                err.vals='the num is Greater';
              }
              else if(indata.in<randomnum)
              {
                  err.vals='the num is Lesser'
              }
              setI(i+1)
        }

    }
        return err;
    }
    let handlechange=(e)=>{
        setIndata({...indata,[e.target.name]:e.target.value})
    }
    let handlesubmit= async (e)=>{
        e.preventDefault();
        setErr(validation(indata))
    }

    useEffect(()=>{
       
        if(Object.keys(err).length===0 && indata.in!==''){
            setIndata({
                in:''
            })
        }
    },[err])

    useEffect(()=>{
        let randomnum= Math.floor(Math.random(0)*10)
        setRandomnum(randomnum);
        console.log(randomnum)
    },[])


     let timer=()=>{
        if(second<10){
            setForsec('0'+second)
          }
          else{
            setForsec(second)
          }
          if(minute<10){
           setFormin('0'+minute)
          }
          else{
            setFormin(minute)
          }
         setSecond(second+1)
        if(second===60){
          setSecond(0)
           setMinute(minute+1)
          }
         
        
       
    }
  useEffect(()=>{
    setTimeout(timer,1000)
  },[second])
   
return(
    <>
    <body>
    <div className="profile">
    <img className="im" src={img} alt="im" width={100 } height={100} />
    <h5>{username}</h5>
    </div>

    <div className="timer">
     <span>{formin}:{forsec}</span>   
    </div>
    <div className="wholenum">
    <p className="para">Enter The Num:</p>
    <input type="text" className="inputbox" onChange={handlechange} name="in"  value={indata.in} /><br/>
    <button  className="button" onClick={handlesubmit}>Submit</button><br/>
   <h4 id="chance">{err.chance}</h4>
   <h3 id="range1">{err.vals}</h3><br/>
    </div>
    </body>
    </>
)
}
export default Game;