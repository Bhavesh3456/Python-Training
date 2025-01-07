import { useState } from "react"
import Show from "../Modal"
import { useDispatch } from "react-redux"
import { adding } from "../reducer"
import { Link } from "react-router-dom"

function Products() {
    const [first, setFirst] = useState(true)
    const d = [
        { id: 1, name: "Mens watch", price: 300, img: '/images/a-1.jpg' },
        { id: 2, name: "Mens watch", price: 400, img: '/images/a-2.jpg' },
        { id: 3, name: "Mens watch", price: 400, img: '/images/w1.png' },
        
    ]
    
    const dispatch=useDispatch()
    
    

    return (
        <>
            <Show r={first}>
                <div className="text">
                    <h6>
                        Men's Watch
                    </h6>
                    <h5>
                        <span>$</span> 300
                    </h5>
                </div>
                <button onClick={() => { setFirst(true) }}>okay</button>

            </Show>
            {d.map((v) => (
                <div key={v.id}>
                    <div>
                        <section className="product_section ">
                            <div className="container">
                                <div className="product_heading">
                                    <h2>
                                        Top Sale Watches
                                    </h2>
                                </div>
                                <div className="product_container">
                                    <div className="box">
                                        <div className="box-content">
                                            <div className="img-box">
                                                <img src={v.img} onClick={() => { setFirst(false) }}  />
                                            </div>
                                            <div className="detail-box">
                                                <div className="text">
                                                    <h6>
                                                        Men's Watch
                                                    </h6>
                                                    <h5>
                                                        <span>{v.price}</span> 
                                                       
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
                                            <Link to='/cart'  onClick={()=>{dispatch(adding(v))}}>
                                                Add To Cart
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-content">
                                            <div className="img-box">
                                                <img src={v.img} onClick={() => { setFirst(false) }}  />
                                            </div>
                                            <div className="detail-box">
                                                <div className="text">
                                                    <h6>
                                                        Men's Watch
                                                    </h6>
                                                    <h5>
                                                        <span>{v.price}</span> 
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
                                            <Link to='/cart'  onClick={()=>{dispatch(adding(v))}}>
                                                Add To Cart
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="box-content">
                                            <div className="img-box">
                                                <img src={v.img} onClick={() => { setFirst(false) }}  />
                                            </div>
                                            <div className="detail-box">
                                                <div className="text">
                                                    <h6>
                                                        Men's Watch
                                                    </h6>
                                                    <h5>
                                                        <span>{v.price}</span> 
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
                                            <Link to='/cart'  onClick={()=>{dispatch(adding(v))}}>
                                                Add To Cart
                                            </Link>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </section>
                    </div>
                   
                </div>
            ))}


        </>
    )
}
export default Products