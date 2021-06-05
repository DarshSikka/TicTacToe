import React, { useState } from 'react'
function ThemeChoice(props){
    const [cur, setCur]=useState(false)
    return(
        <div><label>Toggle theme:</label><input type="checkbox" checked={cur} onChange={e=>{setCur(e.target.checked);props.change(e.target.checked)}}/></div>
    )
}
export default ThemeChoice