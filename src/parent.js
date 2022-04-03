
import React, { useState }  from "react";
import Child from "./child";

function Parent(){

    const [num,setNum]= useState(100);
    const [name,setName]= useState("summit vasanta dhekane");
    const [varone,setVarone]= useState([10,20,30,40,50]);
    const [vartwo,setVartwo]= useState(true)

        const fun_one =function(arg1,arg2,arg3){

            setName("Rahul Dhekane")
              
             console.log(arg1,arg2,arg3);

       }
    return(
        <React.Fragment>
          <Child key1={num}
                 key2={name}
                 key3={varone}
                 key4={vartwo}
                 key5={fun_one}></Child>
                 <button onDoubleClick={fun_one}>onDoubleClick</button>
        </React.Fragment>
    )
}
export default Parent;