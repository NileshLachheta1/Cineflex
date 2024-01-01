import React from 'react'
import cineplexlogo from '../../assets/images/cineplex-finalLogo.png'
export default function TopNavbarComponent() {
  return (
    <>
      <div class="conntainer-fluid bg-dark">
        <div class="row  d-sm-flex " >
            <div class="col-lg-2 col-md-2 col-sm-2 col-4" >
                <img src={cineplexlogo} width="150px" alt=""/>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-8 d-none d-md-block d-sm-block d-lg-block ">
                <div class="row  justify-content-center">
                    <input type="text" placeholder="Search" class="w-50 h-50 m-2 ms-lg-3 form-control" />
                </div>
            </div>
            <div  class="col-lg-2 col-md-2 col-sm-2 offset-xs-5 col-3 mt-3 fs-5">
                <div class="d-flex ms-4">
                    <i class="fa-solid fa-bell ms-5" style={{color: "#ffffff"}}></i>
                    <i class="fa-solid fa-circle-user ms-5" style={{color: "#ffffff"}}></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
