import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Registration() {
    const [Log, setLog] = useState([])
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const nav=useNavigate()
    useEffect(() => {
        fetch("http://localhost:3043/see")
            .then((res) => res.json())
            .then((data) => {
                return setLog(data)
            })

    }, [])
    function mysubmit(){
       const f= Log.find(v=>v.email==Email && v.password == Password)
       if(f){
        nav('/Products')

       }
       else{
        alert("Email and Password are not matched")
       }
    }
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Log in
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <form action=""  id="form" onSubmit={mysubmit}>

                                    <div>
                                        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>

                                    <div>
                                        <input type="password" placeholder="Set Password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>

                                    <div className="btn_box">
                                        <input type="submit"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
export default Registration