import styled from "styled-components";
import Fruit from './th.jpeg';
import Galaxy from './th (1).jpeg';
import Salad from './salad.jpeg';
import Oppo from './OPPO.jpeg';
import Iphone from './Iphone16.jpeg';
import Reno9 from './Opporeno9.jpeg'
const Gr = styled.input`
padding:2px 90px 2px 5px;

`
const Ty = styled.div`
display:flex;
column-gap:5px;
background-color:green;
justify-content:space-around;
padding:5px;
`
const Title=styled.h1`
color:white;
`
const Nav=styled.nav`
display:flex;
column-gap:15px ;
margin:5px 0px;
`
const Sec=styled.section`
display:flex;
justify-content:center;
padding:20px;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,52,0.7562674728094363) 20%, rgba(0,212,255,1) 100%);
`
const Main=styled.main`
display:flex;
column-gap:15px;
`
const Para=styled.main`
color:black;
font-size:19px;
margin:20px 0px;
&&:hover{
color:grey;
cursor:pointer;
}
`
const Per=styled.p`
color:black;
font-size:15px;
margin:25px 10px;
&&:hover{
color:grey;
cursor:pointer;
}

`
const Goal=styled.div`
display:flex;
column-gap:20px;

`
const Back=styled.div`
border:1px solid black;
background-color:lightblue;

`

function Shop() {
    return (
        <div>
            <Ty>
                <Title>Shoppingsite</Title>
                <Gr placeholder="search"></Gr>
                <Nav>
                    <a href="" style={{color:"white",textDecoration:"none"}}>Home</a>
                    <a href="" style={{color:"white",textDecoration:"none"}}>About</a>
                    <a href="" style={{color:"white",textDecoration:"none"}}>Service</a>
                    <a href="" style={{color:"white",textDecoration:"none"}}>Contact</a>
                </Nav>

            </Ty>
            <Sec>
                <img src={Fruit} alt="" height={200} width={400}/>
                <p style={{color:"white",fontSize:"23px",fontWeight:"800",marginTop:"50px"}}>Grocery Deals <br />20% off</p>
            </Sec>
            <Main>
                <Para>Our Products</Para>
                <Per>Fruits</Per>
                <Per>Mobile</Per>

            </Main>
            <Goal>
                <Back>
                    <img src={Galaxy} alt="" height={200} width={200} />
                    <h1 style={{color:"goldenrod",textAlign:"center"}}>GalaxyS23</h1>
                    <h1 style={{textAlign:"center"}}>Price</h1>
                    <p style={{color:"red"}}><strike>20,000</strike> <span style={{color:"black"}}>15000</span></p>
                </Back>
                <Back>
                    <img src={Salad} alt="" height={200} width={200} />
                    <h1 style={{textAlign:"center",color:"red"}}>Salad</h1>
                    <h1 style={{textAlign:"center"}}>Price</h1>
                    <p style={{color:"red"}}><strike>300</strike> <span style={{color:"black"}}>100</span></p>
                </Back>
                <Back>
                    <img src={Oppo} alt="" height={200} width={200} />
                    <h1 style={{textAlign:"center",color:"green"}}>Oppo</h1>
                    <h1 style={{textAlign:"center"}}>Price</h1>
                    <p style={{color:"red"}}><strike>15,000</strike> <span style={{color:"black"}}>10000</span></p>
                </Back>
                <Back>
                    <img src={Iphone} alt="" height={200} width={200} />
                    <h1 style={{textAlign:"center",color:"white"}}>Iphone</h1>
                    <h1 style={{textAlign:"center"}}>Price</h1>
                    <p style={{color:"red"}}><strike>120,000</strike> <span style={{color:"black"}}>90000</span></p>
                </Back>
                <Back>
                    <img src={Reno9} alt="" height={200} width={200} />
                    <h1 style={{color:"green" ,fontWeight:"800"}}>Oppo-Reno8</h1>
                    <h1 style={{textAlign:"center"}}>Price</h1>
                    <p style={{color:"red"}}><strike>10,000</strike> <span style={{color:"black"}}>5000</span></p>
                </Back>
            </Goal>



        </div>
    )
}
export default Shop
