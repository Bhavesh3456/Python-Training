// 
// import React from "react";

// function SwitchCalc() {


//    function getCalc(op)
//    {

//     let num1 =  document.getElementById('n1')
//     let num2 =  document.getElementById('n2')
//     let result =  document.getElementById('res')
//      switch(op)//+ -
//      {
//          case "+": result.innerHTML = Number(num1.value) + Number(num2.value) 
//          break;

//          case "-": result.innerHTML = Number(num1.value) - Number(num2.value) 
//          break;

//          case "*": result.innerHTML = Number(num1.value) * Number(num2.value) 
//          break;

//          case "/": result.innerHTML = Number(num1.value) / Number(num2.value) 
//          break;


//          case "%": result.innerHTML = Number(num1.value) % Number(num2.value) 
//          break;


//      }
//    }
//   return (
//     <div>
//       <div>
//         Num1: <input type="text" id="n1" />
//       </div>
//       <div>
//         Num2: <input type="text" id="n2" />
//       </div>
//       <div>
//         <b id="res"></b>
//       </div>

//       <div>
//         <button onClick={()=>{getCalc('+')}}>+</button>
//         <button onClick={()=>{getCalc('-')}}>-</button>
//         <button onClick={()=>{getCalc('*')}}>*</button>
//         <button onClick={()=>{getCalc('/')}}>/</button>
//         <button onClick={()=>{getCalc('%')}}>%</button>
//       </div>
//     </div>
//   );
// }

// export default SwitchCalc;
function Val() {

  function check() {
    let f = /^[a-z]/
    let y = /^[0-9]+$/
    let g = document.getElementById("s1")
    let r = document.getElementById("i2")
    let so = document.getElementById("s2")
    let so1 = document.getElementById("s3")

    if (g.value == "" && r.value == "") {
      so.innerText = "please fill this field properly"
      so.style.color = "red"
    }
    else if (!(f.test(g.value))){
      so.innerText = "please fill this field properly"
      so.style.color = "red"
    }
    else if(!(y.test(r.value))){
      so1.innerText="please fill this field properly"
      so1.style.color="red"
    }


    else {
      alert("ok")
    }
  }

  return (
    <div >
      <h1>Registration Form</h1>
      <label>Email</label>
      <input type="text" id="s1" />
      <span id="s2"></span><br />
      <label>password</label>
      <input type="password" id="i2"></input>
      <span id="s3"></span><br />
      <button onClick={check}>Submit</button>



    </div>
  )

}
export default Val