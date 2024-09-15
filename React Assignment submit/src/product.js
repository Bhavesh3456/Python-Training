function Qty() {
    function Sum(){
        let s1=document.getElementById("s1")
        let t4=document.getElementById("t4")
        let s2=document.getElementById("s2")
        let s3=document.getElementById("s3")
        let total=document.getElementById("total")
        t4.innerText=s1.value*45
        s3.innerText=s2.value*45
        total.innerHTML=Number(t4.innerText)+Number(s3.innerText)

        

    }
    return (
        <div>
            <table border={3} >
                <tr>
                    <td>product</td>
                    <td>Qty</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td>Audi</td>
                    <td>
                        <select onChange={Sum} id="s1">
                            <option value="" hidden>select qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                    <td>45</td>
                    <td id="t4"></td>
                </tr>
                <tr>
                    <td>Mercedese</td>
                    <td>
                        <select onChange={Sum} id="s2">
                            <option value="" hidden>select qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </td>
                    <td>45</td>
                    <td id="s3"></td>
                </tr>
                <tr>
                    <td colSpan={2}>total price</td>
                    <td colSpan={2} id="total"></td>
                </tr>
            </table>

        </div>
    )
}
export default Qty