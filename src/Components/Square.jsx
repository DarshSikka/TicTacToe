import React,{useState, useEffect} from 'react';
const Square=(props)=>{
    const identity=props.num;
    const [miniState, setMiniState]=useState(" ")
    const [trueFalseState, setTrueFalseState]=useState(props.n);
    const [styleState, setStyleState]=useState({})
    const themes={tru:["blue", "linear-gradient(lightblue, #db820d)"], fals:["yellow", "linear-gradient(yellow, peachpuff)"]}
    useEffect(()=>{
        if(props.stats[identity]===""){
            setMiniState("");
            setStyleState({})
        }
         else{
             setMiniState(props.stats[identity]===true?"X":"O");
             let chooseStyle=props.theme?0:1;
             setStyleState({background:props.stats[identity]===true?themes["tru"][chooseStyle]:themes["fals"][chooseStyle]})
         }}
        );
    return(
        <button style={styleState} className="square"onClick={()=>{
            if(!props.over){
            if(props.stats[identity]===""){
            props.click(identity);
            setTrueFalseState(props.n);
            setMiniState(props.n===true?"X":"O");
        }}}}>{miniState}</button>
    )
}
export default Square