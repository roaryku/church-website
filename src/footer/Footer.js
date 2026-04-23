import './Footer.css';
import logo from '../photos/Preview.png';
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
                       <img src={logo} className="businessLogo" alt="you tube" width="120"/>
                    </div>

                    <div className="sb_footer-links_div">
                       <h4>{t ('FooterLocation')}</h4>
                    <a href="https://www.google.com/maps/place/125+Main+St,+Atlanta,+GA+30305/@33.7490,-84.3880,17z" rel="noopener noreferrer" target="_blank">
                         <img src={mapIcon} alt="you tube" className="icon"/>
                       </a>
                    </div>

                <div className="sb_footer-links_div">
                    <h4>{t ('FooterContact')}</h4>
                                            <a href="tel: +4045550172" rel="noopener noreferrer" target="_blank">
                         <img src={iconCallNow} alt="phone" className="icon"/> 
                      </a>
                  </div>

                <div className="sb_footer-links_div">
                  <h4>{t ('FooterFallow')}</h4>
                 <div className="socialMedia">
                 <a href="https://www.youtube.com" rel="noopener noreferrer" target="_blank">
                       <img src={iconYouTube} className="youTubeIcon" alt="you tube"/>
                    </a>

                 </div>
                </div>
            </div>
            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()}  {t ('FooterRights')}
                    </p>
                    <a href='https://design2codestudio.netlify.app/' target="_blank" rel="noopener noreferrer">
                    <p className='FooterMadeBy'>{t ('FooterMadeBy')}</p>
                    </a>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/"><div><p>{t ('Home')}</p></div></a>
                    <a href="/ourMenu"><div><p>{t ('OurMenu')}</p></div></a>
                    <a href="/gallery"><div><p>{t ('Gallery')}</p></div></a>
                    <a href="/about"><div><p>{t ('About')}</p></div></a>
                    <a href="/contact"><div><p>{t ('Contact')}</p></div></a>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Footer;