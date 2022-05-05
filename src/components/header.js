import React, {useState} from 'react'
import heade from './smth.json'

export default function Header(props){
    const [isPressed, setState] = useState(false);
    let newPost = React.createRef();
    let add = () => {
        let text = newPost.current.value;
        alert(text);
    }
    if(isPressed){
        return(
        <header>
            {heade.map((postdetail, index) => {
                return <div>
                    <h1>{postdetail.string}</h1>
                    <textarea ref={newPost}></textarea>
                    <button onClick={add}>press me</button>
                    </div>
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