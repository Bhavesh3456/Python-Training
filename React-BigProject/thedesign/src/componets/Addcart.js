import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../reducer'

function Addcart() {
    const { cart } = useSelector(xyz => xyz.user)


    const dispatch = useDispatch()
    console.log(cart);
   
    const data=cart?.reduce((v,f)=> v+f.price,0)
    const [total,settotal]=useState(0)
    useEffect(()=>{
        settotal(data)
    },[cart])
   
    const deleting = (yes) => {
        console.log(yes);

        dispatch(remove({ id: yes }))
    

    }
  
   
    const [user, setuser] = useState(data)
    const [using,setusing]=useState(user)
    function handlechange(){
        const u=setusing(using*user)
        setuser(u)
        
      
    }
    
    
   

    return (
        <div>

            {cart?.map((v) => (

                <div key={v.id} style={{ backgroundColor: "wheat" }}>

                    <div className="box">
                        <div className="box-content">
                            <div className="img-box">
                                <img src={v.img} alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="text">
                                    <h6>
                                        Men's Watch
                                    </h6>
                                    <h5>
                                        <span id='sp1'>{v.price}</span>
                                        <select id='s1' onChange={handlechange} >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                        </select>
                                    </h5>
                                </div>
                                <div className="like">
                                    <h6>
                                        Like
                                    </h6>
                                    <div className="star_container">
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                        <i className="fa fa-star" aria-hidden="true" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <button style={{ color: "white", backgroundColor: "red", padding: "5px" }} onClick={() => { deleting(v.id) }} >
                                Remove From Cart
                            </button>
                        </div>
                    </div>


                </div>
            ))}
            <h1>total : {total}</h1>


        </div>
    )
}

export default Addcart
