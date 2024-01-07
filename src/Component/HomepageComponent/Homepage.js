import React from 'react'
import './home.css'
import cardimage1 from '../../images/cardimage-1.jpg'
import cardimage2 from '../../images/cardimage-2.jpg'
import cardimage3 from '../../images/cardimage-3.jpg'
import cardimage4 from '../../images/cardimage-4.jpg'
import referimage from '../../images/refer.png'
import company1 from '../../images/1.png';
import company2 from '../../images/2.png';
import company3 from '../../images/3.png';
import company4 from '../../images/4.png';
import company5 from '../../images/5.png';

export default function Homepage() {
  return (
    <>
      
    <div className="container-fluid bg-dark">
        <div className="row">
            <p className="display-3 text-center text-light" id="homepage-movie_heading" >Movies</p>
            <p className="text-center text-light fs-4 " id="homepage-movie_subheading" >Watch New Movies</p>
        </div>
    </div>
    <div className="container-fluid" id="homepage-moviecard_background">
        <div className="container ">
            <div className="row d-flex justify-content-center align-item-center">
                <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                    <button className="btn text-light fw-bold h-50 bg-dark m-4 w-100">Now Playing</button>
                </div>
                <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                    <button className="btn text-light fw-bold h-50 bg-dark m-4 w-100">Coming Soon</button>
                </div>
                <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                    <button className="btn text-light  fw-bold h-50 bg-dark m-4 w-100">Exclusive</button>
                </div>
                <div className="col-12 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center">
                    <button className="btn text-light fw-bold h-50 bg-dark m-4 w-100">Exclusive</button>
                </div>
            </div> 

            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage1} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn  ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage2} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage3} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12  p-2">
                    <div className="card homepage-card">
                        <img src={cardimage4} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn btn">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage1} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn  ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage2} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 p-2">
                    <div className="card homepage-card">
                        <img src={cardimage3} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn ">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12  p-2">
                    <div className="card homepage-card">
                        <img src={cardimage4} className="card-img" alt=""/>
                        <div className="card-body">
                            <div className="card-left-btn m-4">
                                <button className="card-btn btn">View Trailer</button>
                            </div>
                            <div className="card-right-btn m-4">
                                <button className="card-btn ">view Details </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br />
        </div>
    </div>
    <div className="row bg-danger d-none d-xl-block d-lg-block d-md-block d-sm-block  ">
        <div id="homepage-register_event" className="col-lg-12 col-md-12 p-sm-3 p-lg-5 p-md-5">
            <div className="glass-panel">
                <h1>Register Yourself For the Events</h1>
                <p>Every man must decide whether he will walk in the light of creative altruism or in the darkness of eritdestructive selfishness. Ut porttitor et lectus ut tempus. Aliquam lacinia Every man must decide whether he will walk in the light of creative altruism or in the darkness.</p>
            </div>
            <div >
                <button className="btn btn-danger  text-light">More Info </button>
            </div>
        </div>
    </div>
    <div className="container-fluid" id="homepage-referal_section">
        <div className="container ">
            <h1 className="text-center mt-4 text-light">Top Featured Event</h1>
            <h2 className="text-center text-light">Live Event's</h2>
            <div className="row p-3">
                <div className="col-md-12 row justify-content-center p-2">
                    <div id="featuredEventIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#featuredEventIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner ">
                            <div className="carousel-item active">
                                <div className="row m-lg-5 d-flex justify-content-center align-item-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                        <div className="row justify-content-center" id="homepage-card1">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold ms-5">Book Now</button>
                                            </div>    
                                        </div><br/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="row  d-flex justify-content-center align-item-center" id="homepage-card2">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold">Book Now</button>
                                            </div>    
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="carousel-item">
                                <div className="row m-5 d-flex justify-content-center align-item-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                        <div className="row justify-content-center" id="homepage-card3">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold ms-5">Book Now</button>
                                            </div>    
                                        </div><br/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="row  d-flex justify-content-center align-item-center" id="homepage-card4">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold">Book Now</button>
                                            </div>    
                                        </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="carousel-item">
                                <div className="row m-5 d-flex justify-content-center align-item-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 h-100">
                                        <div className="row justify-content-center" id="homepage-card5">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold ms-5">Book Now</button>
                                            </div>    
                                        </div><br/>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="row  d-flex justify-content-center align-item-center" id="homepage-card6">
                                            <div className="homepage-content" >
                                                <p>Knocksense Sunil Grover Show - Indore Comedy | 1hr 30mins </p>
                                                <p> Sat 16 Dex 2023 at 8:00 PM  Phonix Citadel Mall:Indore</p>
                                                <button className="btn btn-danger text-light fw-bold">Book Now</button>
                                            </div>    
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#featuredEventIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mt-3 border border-secondary rounded p-3 mb-3 d-flex justify-content-center align-item-center">
                <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-item-center " id="homepage-referal_section1">
                    <img className="image-responsive " id="homepage-referal_image" src={referimage}  alt="referal image"/>
                </div>
                <div className="offset-lg-1 col-lg-6 col-md-6 col-sm-6 col-xs-12  " id="homepage-referal_section2">
                    <div className=''>
                        <p className="fs-1 text-center text-light ">Referal Program</p>
                        <p className="text-danger fw-bold text-center fs-5">Refer Your Friend and Earn Extra Point</p>
                        <p className="fs-6 ms-5 text-light">Refer a friend to CineFlex and both of you get instant cashback points in your CineFlex wallet! More referrals, more rewards! Don't blockbuster deals. Share the love, share the fun!</p>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className="btn btn-danger text-light w-50">Refer Now</button>
                    </div>
                </div>
            </div>

            <div className="row mt-5" >
                <div className="col-md-12">
                    <div className="lc-block">
                        <div id="carouselLogos" className="carousel slide pt-5 pb-4" data-bs-ride="carousel">

                            <div className="carousel-inner px-5 ">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-6 col-lg-2 align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company1} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3  mb-3" src={company2} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3  mb-3" src={company3} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3  mb-3" src={company4} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3  mb-3" src={company5} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3  mb-3" src={company2} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-6 col-lg-2 align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company1} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company2} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company3} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company4} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company5} alt=""/>
                                        </div>
                                        <div className="col-6 col-lg-2  align-self-center">
                                            <img className="d-block w-75 px-3 mb-3" src={company1} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-100 px-3 text-center mt-4  ">
                                <a className="carousel-control-prev position-relative d-inline me-4" href="#carouselLogos" data-bs-slide="prev">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                    </svg>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next position-relative d-inline" href="#carouselLogos" data-bs-slide="next">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="text-light" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                    </svg>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
        </div> 
    </div>
</>
  )
}
