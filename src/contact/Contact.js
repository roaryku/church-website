import ContactButton from "./ContactButton";
import image from '../photos/call-now.png'
import email from '../photos/email.png';
import { useTranslation } from 'react-i18next';

function Contact () {

    const { t } = useTranslation();

    return (
        <div className="contactBody">
            <div className="contactHeader">
               <h2 className='headerAbout'>{t ('Contact us')}</h2>
               <ContactButton/>

               <h4 className='headerInfo'>{t ('Contact homeInfo')}</h4>
               <div className="churchPersonalInfo">

                <div className="phoneContact">
                <a href="tel: +13604331716" className="phoneNumber">
                    <p>{t ('Call us')}</p>
                    <img src={image} width="25" alt="icon"/>
                   +1.360.695.6766</a>
                </div>

                <div className="phoneContact">
                <a href="mailto:rodikaaryku13@gmail.com" rel="_blank" className="phoneNumber">
                <p>{t ('Send us an email')}</p>
                    <img src={email} width="25" alt="icon"/> 
                    philadelphiavchurch@gmail.com</a>
                </div>
              </div>

              <div className='adressInfo'>
               <h4 className='headerInfo'>{t ('Worship with us')}</h4>
               <p className="contactLocation STime">{t ('Contact service time')}</p>
               <p className="contactLocation">3301 East 29th Street Vancouver, WA 98661-5007</p>
               <p className="contactLocation">{t ('Get map direction')}</p>
               <iframe className='iFrameMap'   title='google map'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.4433375104545!2d-122.63880112413739!3d45.64191797107742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495af6a35b2d0f5%3A0xce01e5b18e9be738!2s3301%20E%2029th%20St%2C%20Vancouver%2C%20WA%2098661!5e0!3m2!1sen!2sus!4v1721922226724!5m2!1sen!2sus">
               Click on the map to get direction
               </iframe>
        </div>
    </div>
    </div>
    )
}
export default Contact;