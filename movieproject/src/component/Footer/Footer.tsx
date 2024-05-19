
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Footer.css'


const Footer: React.FC = () => {
    return(
        <div className="Footer">
            <div className="upFooter">
                <div className="upFooterbox">
                    <div className="boxhead">Home</div>
                    <div className="boxabout">Categories</div>
                    <div className="boxabout">Devices</div>
                    <div className="boxabout">Pricing</div>
                    <div className="boxabout">FAQ</div>
                </div>
                <div className="upFooterbox">
                    <div className="boxhead">Movies</div>
                    <div className="boxabout">Genres</div>
                    <div className="boxabout">Trending</div>
                    <div className="boxabout">New Release</div>
                    <div className="boxabout">Popular</div>
                </div>
                <div className="upFooterbox">
                    <div className="boxhead">Shows</div>
                    <div className="boxabout">Genres</div>
                    <div className="boxabout">Trending</div>
                    <div className="boxabout">New Release</div>
                    <div className="boxabout">Popular</div>
                </div>
                <div className="upFooterbox">
                    <div className="boxhead">Support</div>
                    <div className="boxabout">Contact us</div>
                </div>
                <div className="upFooterbox">
                    <div className="boxhead">Subscription</div>
                    <div className="boxabout">Plans</div>
                    <div className="boxabout">Features</div>
                </div>
                <div className="upFooterbox">
                    <div className="boxhead">Connect with us</div>
                    <div className="boxiconside">
                        <button className="boxaddicon">
                            <i className="bi bi-facebook"></i>
                        </button>
                        <button className="boxaddicon">
                            <i className="bi bi-twitter"></i>
                        </button>
                        <button className="boxaddicon">
                            <i className="bi bi-linkedin"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr className='stick'/>
            <div className="footcontainer">
                <div className="Footer">
                    <span className="footstart">@2023 streamvib, All Rights Reserved</span>
                    <div className="footend">
                        <span className="footendtext">Terms of Use</span>
                        <span className="footendtext">Privacy Policy</span>
                        <span className="footendtext">Cookie Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;