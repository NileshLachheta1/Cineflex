 import React from 'react'
 import './profilesidebar.css'
 export default function Profilesidebar() {
   return (
     <>
        {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#userprofile" aria-controls="offcanvasRight">Toggle right offcanvas</button> */}
       <div className="offcanvas offcanvas-end " tabindex="-1" id="userprofile" aria-labelledby="offcanvasRightLabel"  style={{backgroundColor: "#161414" }}>
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel" className="text-light  ">Offcanvas right</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div id="accordian" className="menu-parent style1">
                    <ul className="menu">
                        <li className="menu-child">
                            <div className="text-center m-3">
                                <i className="fas fa-user-circle text-light display-2 m-4"></i><br/>
                                <span className="text-light fs-6 ">Andrew Anderson</span><br/>
                            </div>
                        </li>       
                        <li className="menu-child">
                            <a className="dashboard-links"><i className="fa-solid fa-pen-to-square fs-6"></i> &nbsp; Edit Profile</a>
                        </li>
                        <li className="menu-child">
                            <a className="dashboard-links"><i className="fa-solid fa-ticket fs-6"></i> &nbsp; My Tickets</a>
                        </li>
                        <li className="menu-child">
                            <a className="dashboard-links"><i className="fa-solid fa-list fs-6" ></i>&nbsp; Rewards</a>
                        </li>
                        <li className="menu-child">
                            <a className="dashboard-links"><i className="fa-solid fa-lock fs-6"></i>&nbsp; Change Password</a>
                        </li>
                        <li className="menu-child">
                            <a className="dashboard-links"><i className="fa-solid fa-ban fs-6"></i>&nbsp; Terms & Conditions</a>
                        </li>
                        <div className="d-flex justify-content-center align-items-center m-3">
                            <button className="btn btn-danger text-light w-75 fs-5 fw-bold m-3">Edit Profile</button>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
     </>
   )
 }
 