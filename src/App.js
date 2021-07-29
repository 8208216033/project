import React, { useState } from "react";

function App()
{//let name="cdac";//stateless
  let [name]=useState("cdac");//string variable
  let[counter]=useState(100);
  //let counter=100;
  //let increment=()=>{
   // alert("i am alert");
 // };
 //boolean
 let[active]=useState(true);
 let [list]=useState(["delhi"]);//Arrays of list
 let [std1]=useState({name:"rahul"});//object literals
  return(
    <div>
      <h1>Declare stateful variable</h1>
     <h1>{name}</h1>
     <h1>{counter}</h1>
     <h1>boolean::{active +""}</h1> 
     <h1>list:{list}</h1>
     <h1>object{std1.name}</h1>
    </div>
  );
}
    





export default App;
