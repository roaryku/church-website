import image from '../photos/cross.png';
import image2 from '../photos/church.png';
import image3 from '../photos/baptism.png';
import { useTranslation } from 'react-i18next';


function HomeAbout () {

    const { t } = useTranslation();

    return (
        <div>
        <div className='homeAboutContainer'>
            <div className='headerHomeAbout'>
                <img src={image} className='aboutImageCross' alt='cross' width='300'/>
            </div>
            <div className='headerHomeAbout'>
                <h3>{t ('HomeAboutHeader')}</h3>
                <hr/>
                <p className='par-about'>{t ('HomeAboutPar')}</p>

                <a href='/about'>
                <button className='homeBtn'>{t ('HomeBtn')}</button>
                </a>
            </div>
        </div>

        <div className='homeAboutContainer'>
            <div className='headerHomeAbout'>
            <h3>{t ('HomeServicesHead')}</h3>
                <hr/>
                <h4 className='par-services'>{t ('ServicesHomePar')}</h4>
                <p>{t ('ServiceDetailOne')}</p>
                <hr/>
                <h4 className='par-services'>{t ('PrayerHomeTime')}</h4>
                <p>{t ('PrayerTimeDetailsOne')}</p>
                <p>{t ('PrayerTimeDetailsTwo')}</p>
            </div>
            <div className='headerHomeAbout'>
                <img src={image2} className='aboutImageCross' alt='cross' width='400'/>
            </div>
        </div>

        <div className='baptismContainer'>
            <div className='headerHomeBaptism'>
            <img src={image3} className='baptismImage' alt='cross' width='100%'/>
            </div>
            <div className='headerHomeBaptism'>
                 <h3 className='eventsTwo'>{t ('BibleBerseBaptismHome')}</h3>
                <hr className='hrEvent'/>
                <h4 className='par-events'>{t ('BaptismHome')}</h4>
                <h5 className='events'>{t ('BTimeHome')}</h5>
                <p className='events'>{t ('BLocationHome')}</p>
           
                <a href='/events'>
                <button
                 className='homeBtn'>{t ('BaptismHomeBtn')}</button>
               </a>
            </div>
        </div>
        </div>








        
    )
}
export default HomeAbout;