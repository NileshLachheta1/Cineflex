import React from 'react'
import { Link } from 'react-router-dom'
import './sidenavbar.css'

export default function Sidenavbar() {
    return (
        <>
            <div class=" class row " id="sidenav">
                <div class="col ">
                    <aside class="sidebar">
                        <ul class="links">
                            <li>
                                <Link to="/" >
                                    <span class="material-symbols-outlined ">house</span>
                                    <a href="">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span class="material-symbols-outlined">slideshow</span>
                                    <a href="#">Movies</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/eventhome" >
                                    <span class="material-symbols-outlined">celebration</span>
                                    <a href="#">Events</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span class="material-symbols-outlined">person</span>
                                    <a href="#">AboutUs</a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span class="material-symbols-outlined">connect_without_contact</span>
                                    <a href="#">ContactUs </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" >
                                    <span class="material-symbols-outlined">passkey</span>
                                    <a href="#">Login</a>
                                </Link>
                            </li>
                            <li class="d-md-none d-sm-none d-lg-none d-xl-none d-xxl-none">
                                <Link to="/" >
                                    <span class="material-symbols-outlined">search</span>
                                    <a href="#">Search</a>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                </div>
            </div>
        </>
    )
}
