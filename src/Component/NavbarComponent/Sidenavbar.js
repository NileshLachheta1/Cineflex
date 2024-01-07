import React from 'react'
import './sidenavbar.css'

export default function Sidenavbar() {
  return (
    <>
    <div className=" class row " id="sidenav">
        <div className="col ">
            <aside className="sidebar">
                <ul className="links">
                    <li>
                        <span className="material-symbols-outlined ">house</span>
                        <a href="">Dashboard</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">slideshow</span>  
                        <a href="#">Revenue</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">celebration</span>
                        <a href="#">Reports</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">person</span>
                        <a href="#">Designer</a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">connect_without_contact</span>
                        <a href="#">Developer </a>
                    </li>
                    <li>
                        <span className="material-symbols-outlined">passkey</span>
                        <a href="#">Magic Build</a>
                    </li>
                    <li className="d-md-none d-sm-none d-lg-none d-xl-none d-xxl-none">
                        <span className="material-symbols-outlined">search</span>
                        <a href="#">Magic Build</a>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
    </>
  )
}
