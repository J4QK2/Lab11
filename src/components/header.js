import React, {useState} from 'react'
import heade from './smth.json'

export default function Header(props){
    const [isPressed, setState] = useState(false);
    if(isPressed){
        return(
        <header>
            {heade.map((postdetail, index) => {
                return <div><h1>{postdetail.string}</h1></div>
            })}
        </header>
    )
    }else{
        return(
            <header>
            <button onClick={() => setState(!isPressed)}>press me</button>    
            <h1>{props.secondName}</h1>
        </header>
        )
    }
    
}