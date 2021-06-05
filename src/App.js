import React, { useState } from 'react';
import Board from './Components/Board';
import NameAsker from './Components/NameAsker';
import ThemeChoice from './Components/ThemeChoice'
const App=()=>{
    const [Xname, setXname]=useState("");
    const [Oname, setOname]=useState("");
    const [th, setTh]=useState(false);
    const appClick=(x, o)=>{
        setXname(x);
        setOname(o);
    }
    return(
        <React.Fragment>
            <center>
                <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                <text className="up">T</text><text className="down">I</text><text className="up">C&nbsp;&nbsp;</text>
            <text className="up">T</text><text className="down">A</text><text className="up">C&nbsp;&nbsp;</text>
            <text className="up">T</text><text className="down">O</text><text className="up">E</text></div>
            <ThemeChoice change={e=>setTh(e)}/>
            <NameAsker appClick={appClick} />
            </center>
            <Board theme={th}status={["", "", "", "", "","","","",""]} xname={Xname} oname={Oname}/>
        </React.Fragment> 
    )
}
export default App;