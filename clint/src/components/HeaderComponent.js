import {Link} from 'react-router-dom';
function HeaderComponent(){
    return (<>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
                <a className="navbar-brand " href="index.html"><img className="logo" src="img/logo-small-nav.png" alt="" /></a>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-light"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >

                        <li className="nav-item">
                            <Link className="nav-link" to="/eventhome">Event HomePage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/eventmain">Event MainPage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
      </>);
}




export default HeaderComponent;