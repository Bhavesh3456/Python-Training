import { Link } from "react-router-dom"


function Navbar(){
    
     
     
    return(
        <>
      <div>
        

  <div className="hero_area">
    {/* header section strats */}
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>
              HandTime 
            
              
            
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <Link to='/' className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="about.html"> About</Link>
              </li>
              <li className="nav-item">
                <Link to='/Products' className="nav-link" href="product.html">Products</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className="nav-link" href="product.html">About</Link>
              </li>
             
              <li className="nav-item">
                <Link to='/Contact' className="nav-link" href="contact.html">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to='/Sign' className="nav-link" href="contact.html">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to='/Log' className="nav-link" href="contact.html">Log In</Link>
              </li>
              <li className="nav-item">
                <Link to='/cart' className="nav-link" href="contact.html">Cart</Link>
              </li>
            </ul>
            <div className="user_optio_box">
              <a href>
                <i className="fa fa-user" aria-hidden="true" />
              </a>
              <a href>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    {/* end header section */}
    {/* slider section */}
    <section className="slider_section ">
      <div className="slider_bg_box">
        <img src="images/slider-bg.jpg" alt />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <Link to='/Contact' href className="btn1">
                        Contact Us
                      </Link>
                      <Link to='/About' href className="btn2">
                        About Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Contact Us
                      </a>
                      <a href className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Contact Us
                      </a>
                      <a href className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Contact Us
                      </a>
                      <a href className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7">
                  <div className="detail-box">
                    <h1>
                      Stylish Watches
                    </h1>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                    </p>
                    <div className="btn-box">
                      <a href className="btn1">
                        Contact Us
                      </a>
                      <a href className="btn2">
                        About Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to={0} className="active" />
          <li data-target="#customCarousel1" data-slide-to={1} />
          <li data-target="#customCarousel1" data-slide-to={2} />
          <li data-target="#customCarousel1" data-slide-to={3} />
          <li data-target="#customCarousel1" data-slide-to={4} />
        </ol>
      </div>
    </section>
    {/* end slider section */}
  </div>
  {/* service section */}
  <section className="service_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="images/feature-1.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="images/feature-2.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="images/feature-3.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="box ">
            <div className="img-box">
              <img src="images/feature-4.png" alt />
            </div>
            <div className="detail-box">
              <h5>
                24x7 Customer support
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end service section */}
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="img_container">
            <div className="img-box b1">
              <img src="images/a-1.jpg" alt />
            </div>
            <div className="img-box b2">
              <img src="images/a-2.jpg" alt />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box">
            <h2>
              About Our Shop
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum
              There are many variations of
              passages of Lorem Ipsum
            </p>
            <a href>
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end about section */}
  {/* product section */}
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
              <img src="images/w1.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w2.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w3.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end product section */}
  {/* product section */}
  <section className="product_section ">
    <div className="container">
      <div className="product_heading">
        <h2>
          Feature Watches
        </h2>
      </div>
      <div className="product_container">
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w4.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w5.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w6.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end product section */}
  {/* product section */}
  <section className="product_section ">
    <div className="container">
      <div className="product_heading">
        <h2>
          New Arrivals
        </h2>
      </div>
      <div className="product_container">
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w7.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w8.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div className="img-box">
              <img src="images/w9.png" alt />
            </div>
            <div className="detail-box">
              <div className="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
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
            <a href>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end product section */}
  {/* contact section */}
  <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form_container">
            <form action>
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
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
  {/* end contact section */}
  {/* client section */}
  <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>
    <div id="customCarousel2" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client.jpg" alt />
                  </div>
                  <div className="detail-box">
                    <div className="client_info">
                      <div className="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true" />
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol className="carousel-indicators">
        <li data-target="#customCarousel2" data-slide-to={0} className="active" />
        <li data-target="#customCarousel2" data-slide-to={1} />
        <li data-target="#customCarousel2" data-slide-to={2} />
      </ol>
    </div>
  </section>
  {/* end client section */}
  {/* info section */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="info_logo">
        <h2>
          HandTime
        </h2>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div className="img-box">
                <img src="images/location-white.png" width="18px" alt />
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/telephone-white.png" width="12px" alt />
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div className="img-box">
                <img src="images/envelope-white.png" width="18px" alt />
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_insta">
            <h5>
              Instagram
            </h5>
            <div className="insta_container">
              <div className="row m-0">
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w1.png" alt />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w2.png" alt />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w3.png" alt />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w4.png" alt />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w5.png" alt />
                    </div>
                  </a>
                </div>
                <div className="col-4 px-0">
                  <a href>
                    <div className="insta-box b-1">
                      <img src="images/w6.png" alt />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action>
              <input type="email" placeholder="Enter your email" />
              <button>
                Subscribe
              </button>
            </form>
            <div className="social_box">
              <a href>
                <img src="images/fb.png" alt />
              </a>
              <a href>
                <img src="images/twitter.png" alt />
              </a>
              <a href>
                <img src="images/linkedin.png" alt />
              </a>
              <a href>
                <img src="images/youtube.png" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end info_section */}
  {/* footer section */}
  <section className="footer_section">
    <div className="container">
      <p>
        © <span id="displayYear" /> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
</div>

        </>
    )
}      
export default Navbar