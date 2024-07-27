import React from "react";
import './Footer.css';
import logoFooter from '../photos/Preview.png';
import iconCallNow from '../photos/call-now.png';
import iconYouTube from '../photos/you tube.png';
import mapIcon from '../photos/mapIcon.png';
import { useTranslation } from 'react-i18next';


function Footer () {

    const { t } = useTranslation()

    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                       <img src={logoFooter} alt="you tube" width="120"/>
                    </div>

                    <div className="sb_footer-links_div">
                       <h4>{t ('FooterLocation')}</h4>
                       <a href="https://www.google.com/maps/place/Philadelphia+Romanian+Church/@45.6418986,-122.6387748,17z/data=!3m1!4b1!4m6!3m5!1s0x5495af6a35671d27:0xb3c79a8d425bacc5!8m2!3d45.6418986!4d-122.6361999!16s%2Fg%2F1tczvng8?entry=ttu">
                         <img src={mapIcon} alt="you tube" className="icon"/>
                       </a>
                    </div>

                <div className="sb_footer-links_div">
                    <h4>{t ('FooterContact')}</h4>
                      <a href="tel: +13606956766" target>
                         <img src={iconCallNow} alt="phone" className="icon"/> 
                      </a>
                  </div>

                <div className="sb_footer-links_div">
                  <h4>{t ('FooterFallow')}</h4>
                 <div className="socialmedia">
                 <a href="https://www.youtube.com/c/PhiladelphiaVancouvercurch" target>
                       <img src={iconYouTube} className="youTubeIcon" alt="you tube"/>
                    </a>

                 </div>
                </div>
            </div>
            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()}  {t ('FooterWriths')}
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/home"><div><p>{t ('Home')}</p></div></a>
                    <a href="/about"><div><p>{t ('About')}</p></div></a>
                    <a href="/ministries"><div><p>{t ('Ministries')}</p></div></a>
                    <a href="/events"><div><p>{t ('Events')}</p></div></a>
                    <a href="/contact"><div><p>{t ('Contact')}</p></div></a>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Footer;