import { useState } from "react"

function Change() {
    const [r, setr] = useState(1)
    const v=()=>{
        setr(r+1)
    }
    const s=()=>{
        setr(r-1)
    }
    return (
        <>
            <h1>{r}</h1>
            <button onClick={v}>Inc</button>
            <button onClick={s}>Dec</button>

        </>
    )
}
export default Change