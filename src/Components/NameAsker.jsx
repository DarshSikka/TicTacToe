import React, { useState } from 'react'
const NameAsker=(props)=>{
    const [X,setX]=useState("");
    const [O, setO]=useState("");
    return(
        <div class="Input Holder">
        <input className="name"placeholder="Who is X"type="text" value={X} onChange={(e)=>setX(e.target.value)} /> &nbsp;&nbsp;&nbsp;&nbsp;
        <input className="name"placeholder="Who is O"type="text" value={O} onChange={(ev)=>setO(ev.target.value)} /><br />
        <button id="bottomButton"onClick={()=>{props.appClick(X, O)}}>Set/Update Names</button>
        </div>
    )
}
export default NameAsker;