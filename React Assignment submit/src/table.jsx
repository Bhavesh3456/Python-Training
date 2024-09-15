import { useState } from "react"

function Testing() {
    const [a, seta] = useState("")
    const s = ["Kevin", "yes", "ok"]
    const fact = s.filter((v) => {
        return v.toLowerCase().includes(a.toLowerCase())
    })
    return (
        <>
            <input type="text" onChange={(e) => { seta(e.target.value) }} />
            {fact.map((v, i) => (
                <table border={3} key={i}>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{v}</td>
                            <td>kevin@gmail.com</td>
                        </tr>
                        {/* <tr>
                            <td>2</td>
                            <td>{v[1]}</td>
                            <td>kevin@gmail.com</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{v[2]}</td>
                            <td>kevin@gmail.com</td>
                        </tr> */}
                    </tbody>
                </table>

            ))}
        </>
    )
}
export default Testing