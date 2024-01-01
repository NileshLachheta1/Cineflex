import './FooterComponent.css';
import FooterImg from '../../assets/images/FooterImage.jpg';
import FooterImg2 from '../../assets/images/Footer.jpg';
function FooterComponent(){
    return(<>
        <footer className="footer-section">
            <div className="footer-bg">
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- Widget item --> */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div className="ft-widget">
                                <div className="ft-content">
                                    <img src={FooterImg} alt=""/>
                                        <p>Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nam tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus sed.</p>
                                        <div className="social-link">
                                            <ul>
                                                <li><a className="ft-fb"><span className="fa fa-facebook"></span></a></li>
                                                <li><a className="ft-twitter"><span className="fa fa-twitter"></span></a></li>
                                                <li><a className="ft-pintarest"><span className="fa fa-pinterest"></span></a></li>
                                                <li><a className="ft-youtube"><span className="fa fa-youtube"></span></a></li>
                                                <li><a className="ft-linkedin"><span className="fa fa-linkedin"></span></a></li>
                                            </ul>
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Widget item -->
                        <!-- Widget item --> */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div className="ft-widget">
                                <h2><span>Movie Category</span></h2>
                                <div className="ft-content">
                                    <ul>
                                        <li><a href="">Movies</a> </li>
                                        <li><a href="">Videos</a></li>
                                        <li><a href="">English</a></li>
                                        <li><a href="">China</a></li>
                                        <li><a href="">Tailor Upcoming Movies</a></li>
                                        <li><a href="">Upcoming Movies</a></li>
                                        <li><a href="">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Widget item -->
                        <!-- Widget item --> */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div className="ft-widget">
                                <h2><span>Information</span></h2>
                                <div className="ft-content">
                                    <ul>
                                        <li><a href="">About Us</a> </li>
                                        <li><a href="">Song</a></li>
                                        <li><a href="">Forums</a></li>
                                        <li><a href="">Hot Collection</a></li>
                                        <li><a href="">Upcoming Movies</a></li>
                                        <li><a href="">Upcoming Events</a></li>
                                        <li><a href="">All Movies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Widget item -->
                        <!-- Widget item --> */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 sm-width">
                            <div className="ft-widget">
                                <div className="ft-content twitter-contnt">
                                    <h2><span>Twitter</span></h2>
                                    <div className="ft-twitter-feed">
                                        <div className="ft-twitter-icon">
                                            <span className="fa fa-twitter"></span>
                                        </div>
                                        <div className="twitter-dec">
                                            <a href="">black-one <span className="pink">@24Webpro</span></a>
                                            <p>Lorem Ipsum is simply dumy text of the printing.</p>
                                            <div className="twitter-meta">
                                                <ul>
                                                    <li><a href=""><span className="fa fa-mail-reply"></span></a></li>
                                                    <li><a href=""><span className="fa fa-retweet"></span>12</a></li>
                                                    <li><a href=""><span className="fa fa-heart"></span>21</a></li>
                                                    <li><a href=""><span className="fa fa-ellipsis-h"></span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="newsletter">
                                    <h2><span>newsletter</span></h2>
                                    <div className="newsletter-input">
                                        <input type="text" className="form-control" placeholder="Email Address"/>
                                            <button className="newsletter-btn"><span className="fa fa-paper-plane"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Widget item --> */}
                    </div>
                </div>
            </div>
            <div className="copyright bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Celebrities</a></li>
                                    <li><a href="">News</a></li>
                                    <li><a href="">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sm-width">
                            <div className="copyright-text">
                                <p>CopyRight© 2018 <a href="">Themepul</a> . All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>);

}

export default FooterComponent;