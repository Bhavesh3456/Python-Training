import React from 'react'

function Messaging({abc}) {

  return (
    <div>
        {abc?<h1 style={{backgroundColor:"green",color:"white"}}>Welcome {abc}</h1>:""}
      
    </div>
  )
}

export default Messaging
