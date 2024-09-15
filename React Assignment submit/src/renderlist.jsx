import { useState } from "react"

function Yes(){
    const [b,setb]=useState(false)
    const f=()=>{
        setb(!b)
    
    }
    const r=[
        {id:1,name:"apple"},
        {id:2,name:"pineapple"},
        {id:3,name:"mango"}
    ]
    
    return(
        <>
        <input type="checkbox" name="" id="" onChange={f} />Select all
        {r.map((v)=>(
            <div key={v.id}>
              
                <input type="checkbox" name="" id=""  checked={b} onChange={(e)=>{setb((b)?"1":console.log(e.target.value))}} />
                <label>{v.name}</label>
            </div>
        ))}
        </>
    )
}
export default Yes