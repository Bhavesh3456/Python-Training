import React, { useEffect, useState } from 'react'

function Makesearch() {
    const d = [
        { id: 1, fruit: "Apple" },
        { id: 2, fruit: "Banana" },
        { id: 3, fruit: "Mango" },
        { id: 4, fruit: "Pineapple" }
    ]
    const [name, setName] = useState("")
    const [list, setList] = useState(d)
    useEffect(() => {
        const h = d.filter((v) => {
            return v.fruit.toLowerCase().includes(name.toLowerCase())
        })
        setList(h)

    }, [name])
    return (
        <div>
            <input type="text" name="" id="" onChange={(e) => { setName(e.target.value) }} />
            {list.map((v) => (
                <ul key={v.id}>
                    <li>{v.fruit}</li>
                </ul>
            ))}

        </div>
    )
}

export default Makesearch
