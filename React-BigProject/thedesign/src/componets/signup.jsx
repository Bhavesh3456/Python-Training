
import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Signin({bypass}) {
    const nav = useNavigate()
    const [yname,setname]=useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
   
    function mysubmit(event) {
        event.preventDefault()
        let name = document.getElementById("name")
        let span = document.getElementById("s1")
        let span2 = document.getElementById("s2")
        let phone = document.getElementById("phone")

        let g = /^[a-zA-Z]{4,}$/
        let j = /^\d{10}$/
        if (name.value == "") {
            span.style.color = "red"
            span.innerText = "This Field is Necessary"
                             

        }
        else if (!(g.test(name.value))) {
            span.innerText = "Please Fill this field properly"
            span.style.color = "red"

        }
        else if (!(j.test(phone.value))) {
            span2.innerText = "Please Fill this field properly"
            span2.style.color = "red"

        }

        else {
            nav('/')
            const data = { email, password }
            fetch("http://localhost:3002/see", {
                method: "post",
                body: JSON.stringify(data)
            })
            bypass(yname)
            




        }






    }

    return (
        <>
           
            <section className="contact_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Sign Up
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <form action="" onSubmit={mysubmit} id="form">
                                    <div>
                                        <input type="text" placeholder="Your Name" id="name" onChange={(e)=>{setname(e.target.value)}} />
                                        <span id="s1"></span>
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Phone Number" id="phone" />
                                        <span id="s2"></span>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                                    </div>
                                    <div>
                                        <input type="password" placeholder="Set Password" onChange={(e) => { setPassword(e.target.value) }} />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
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
export default Signin