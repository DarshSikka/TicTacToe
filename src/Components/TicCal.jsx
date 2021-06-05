const winCal=(boardStats)=>{
    const wins=[[0, 1, 2], [0, 3, 6], [3, 4, 5], [6, 7, 8], [1, 4, 7], [2, 5, 8],  [2, 4, 6], [0, 4, 8]];
    const xcontrol=[];
    const ocontrol=[];
    const allchecker=(control, lines)=>lines.every(c=>control.includes(c));
    for(let n=0;n<boardStats.length;n++){
        if(boardStats[n]===true){
            xcontrol.push(n);
        }
        else if(boardStats[n]===false){
            ocontrol.push(n);
        }
    }
    let ans;
    wins.forEach((e)=>{
        if(allchecker(xcontrol, e)){
            ans="X";
        }
        else if(allchecker(ocontrol, e)){
            ans="O";
        }
    });
    if(ans){
    return ans;
    }
    if(ocontrol.length+xcontrol.length===9){
        return "Draw"
    }
    else{
        return undefined;
    }
}
export default winCal;