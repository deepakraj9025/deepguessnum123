import React from "react";
import "./loss.css";
import loseimg from './images/sadgif.gif';
let Losepage=()=>{
return(   
 <>   
<body>
<div>
<img src={loseimg} width="300px" height="300px"/> 
<h1 id="loseh1">YOU LOSE</h1>

</div>
</body>
</> 
)
}
export default Losepage;