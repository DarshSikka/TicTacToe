import React, {useState, useEffect} from 'react';
import Square from './Square';
import winCal from './TicCal';
const Board=(props)=>{
    const [history, setHistory]=useState(["[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]"]);
    const [nextTurn, setNextTurn]=useState(true);
    const [status, setStatus]=useState(props.status);
    const [scorex, setScorex]=useState(0)
    const [scoreo, setScoreo]=useState(0)
    const[winner, setWinner]=useState("");
    const [fancytheme, setFancytheme]=useState(true);
    console.log(status[0]);
    useEffect(
        ()=>{
          let valids=0;
          status.map(ele=>{
              if(ele===true || ele===false){
                  valids++;
              }
          });
          setNextTurn(valids%2===0);
          setFancytheme(props.theme);
        })
    const onClickEvent=(i)=>{
        
        if(nextTurn){
            setNextTurn(false);
            status[i]=nextTurn;
            setStatus(status);
            setHistory(history.concat(JSON.stringify(status)));
            console.log(history);
            if(winCal(status)==="X"){
                setWinner(`${props.xname===""?"X":props.xname} wins`);
                setHistory(["[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]"])
                setScorex(scorex+1)
            }
            else if(winCal(status)==="Draw"){
                setHistory(["[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]"])
                setWinner(`Game Drawn`);
            }
            return(nextTurn);
        }
        else{
            setNextTurn(true);
            status[i]=nextTurn;
            setStatus(status);

            setHistory(history.concat(JSON.stringify(status)));
            console.log(history);
            if(winCal(status)==="O"){
                setWinner(`${props.oname===""?"O":props.oname} wins`);
                setHistory(["[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]"])
                setScoreo(scoreo+1)
            } 
            else if(winCal(status)==="Draw"){
                setWinner("Game Drawn");
                setHistory(["[\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\"]"])
            }
            return(nextTurn);
        }
    }
    return(
        <React.Fragment>
        <div className="wrapper">
     <div className="board">
         <h1> {winner===""?`Next is ${nextTurn?props.xname===""?"X":props.xname:props.oname===""?"O":props.oname}`:winner}</h1>
         <span>
         <Square theme={fancytheme}click={onClickEvent} num="0" n={nextTurn} stats={status} over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="1" n={nextTurn} stats={status}over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="2" n={nextTurn} stats={status}over={winner===""?false:true}/>
         </span>
         <span>
         <Square theme={fancytheme}click={onClickEvent} num="3" n={nextTurn} stats={status}over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="4" n={nextTurn} stats={status}over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="5" n={nextTurn} stats={status}over={winner===""?false:true}/>
         </span>
         <span>
         <Square theme={fancytheme}click={onClickEvent} num="6" n={nextTurn} stats={status}over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="7" n={nextTurn} stats={status}over={winner===""?false:true}/>
         <Square theme={fancytheme}click={onClickEvent} num="8" n={nextTurn} stats={status}over={winner===""?false:true}/>
         </span>
         
         </div>
         <div className="history">
             <h1>Move History</h1>
             {history.map(ele=><React.Fragment><button style={{fontSize:20}}onClick={()=>{
            const toSet=JSON.parse(ele);
            if(history.length>1){
            for(let s=history.indexOf(ele);s<history.length;s++){
                history.pop()
            };}
            setHistory(history);
            setWinner("");
            setStatus(toSet);
             }}>{history.indexOf(ele)===0?<b style={{fontWeight:"300", fontSize:30}}>New Game</b>:history.indexOf(ele)}</button></React.Fragment>)}
         </div>
         </div>
         <h1>
             {props.xname===""?"X":props.xname}:{scorex}
             <br />
             {props.oname===""?"O":props.oname}:{scoreo}
             <br />
         </h1>
         </React.Fragment>
     )
}
export default Board;