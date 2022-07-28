import React from "react";
import Facebook from "../ImagesAndIcons/icons8-facebook.svg";
import Instagram from "../ImagesAndIcons/icons8-instagram.svg";
import Twitter from "../ImagesAndIcons/icons8-twitter-24.png";

const Footer = () => {
    const mapSelector = (e) => {

        let lat;
        let long;

        if(e.target.innerHTML.include("Sylvania")) {
            lat = 41.70780467529152;
			long = -83.7003089845397;
        }
        else {
            lat = 41.521972383742984;
			long = -83.63839883696589;
        }

        if (navigator.platform.indexOf("iPhone") !== -1 || navigator.platform.indexOf("iPad") !== -1 || navigator.platform.indexOf("iPod") !== -1)
            window.open(`maps://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
        else
            window.open(`https://maps.google.com/maps?daddr=${lat},${long}&amp;ll=`);
    };

    return (
        <div id="footer">

            <div className="footerDivs" id="chicagoLocationContainer">
                <h3>Chicago Location</h3>

                <p className="addressLink" onClick={(e)=> mapSelector(e)}>
                    6359 S King Dr. Chicago, IL 60637
                </p>

                <a className="phoneLink" href="tel: 419-517-0233">
                    <p>773-076-4799</p>
                </a>
            </div>

            <div className="footerDivs" id="bayonneLocationContainer">
                <h3>Bayonne Location</h3>
                
                <p className="addressLink" onClick={(e) => mapSelector(e)}>
                    669 Broadway, Bayonne, NJ 07002
                </p>
                <a className="phoneLink" href="tel: 419-874-8800">
                    <p>201-592-4171</p>
                </a>
            </div>

            <div className="footerDivs" id="hoursOfOperation">
                <h3>Hours</h3>
                <p>Sunday - Thursday: 10:00AM - 9:00PM</p>
                <p>Friday &amp; Saturday: 10:00 - 10:00PM</p>
            </div>

            <div className="footerDivs" id="socialsContainer">
                <h3>Follow Us!</h3>

                <ul id="socialsList">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                            <img src={Facebook} alt="facebook"></img>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
                            <img src={Instagram} alt="instagram"></img>
                        </a>
                    </li>

                    <li>
						<a target="_blank" rel="noreferrer" href="https://www.twitter.com">
							<img src={Twitter} alt="Twitter"></img>
						</a>
					</li>                    
                </ul>
            </div>
            
        </div>
    );
};

export default Footer;