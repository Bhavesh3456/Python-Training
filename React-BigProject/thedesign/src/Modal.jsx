import React, { useEffect, useRef } from 'react'

function Show({r,children}) {
    const d=useRef()
    
    useEffect(()=>{
        const w=d.current
        if(!r){
            w.showModal()
        }
        else{
            return;
        }
        return()=>{
            w.close()
        }

    },[r])
    
  return (
    <div>
        <dialog ref={d}>{children}</dialog>
      
    </div>
  )
}

export default Show
