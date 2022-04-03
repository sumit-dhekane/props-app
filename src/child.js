import React from "react";

function Child(props){

    return(
        <React.Fragment>

            <h1>{props.key1}</h1>
            <h2>{props.key2}</h2>
            
                {props.key3.map((element,index)=>(
                    <h1 key={index}>{element}</h1>
                ))}
            <h3>{props.key4}</h3>
            <button onClick={()=>{props.key5("Reactjs","nodejs","mongodb")}}>clickme</button>

        </React.Fragment>
    )
}
export default Child;