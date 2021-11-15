import React from 'react'
const onClickBtn1 = ()=>
{
 console.log("Savitri, a 70-year-old woman who is unhappy with her life, accuses God for her problems. When she gets her photograph clicked at a studio, she is transformed into a beautiful 24-year-old girl")
}
const onClickBtn2 = (a,b,c)=>
{
    console.log(`${a}-${b}-${c}`)
    
}


export default function Movie(props) {
    
    return (
        
        <div>
            <h2>{props.title}</h2>
            <h3>{props.director}</h3>
            <h4>{props.posters}</h4>
            <button onClick={onClickBtn1}>click here</button>
            <button onClick={()=>
            
               {onClickBtn2(20,44,55)}}>click here2</button>
        </div>
    )
}
