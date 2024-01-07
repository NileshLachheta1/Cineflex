import React from 'react'
import cineplexlogo from '../../images/cineplexlogo.png'
export default function TopNavbarComponent() {
  return (
    <>
      <div className="conntainer-fluid bg-dark">
        <div className="row  d-sm-flex " >
            <div className="col-lg-2 col-md-2 col-sm-2 col-4" >
                <img src={cineplexlogo} width="150px" alt=""/>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 d-none d-md-block d-sm-block d-lg-block ">
                <div className="row  justify-content-center">
                    <input type="text" placeholder="Search" className="w-50 h-50 m-2 ms-lg-3 form-control" />
                </div>
            </div>
            <div  className="col-lg-2 col-md-2 col-sm-2 offset-xs-5 col-3 mt-3 fs-5">
                <div className="d-flex ms-4">
                    <i className="fa-solid fa-bell ms-5" style={{color: "#ffffff"}}></i>
                    <i className="fa-solid fa-circle-user ms-5" data-bs-toggle="offcanvas" data-bs-target="#userprofile" style={{color: "#ffffff"}}></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
