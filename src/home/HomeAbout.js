import image from '../photos/building1.png';
import image2 from '../photos/bread-board.png';
import image3 from '../photos/bakery_inside.png';
import { useTranslation } from 'react-i18next';


function HomeAbout () {

    const { t } = useTranslation();

    return (
        <div>
        <div className='homeAboutContainer homeAboutFirstMobile'>
            <div className='headerHomeAbout'>
                <img src={image} className='aboutImageBread' alt='cross' width='300' height="420"/>
            </div>
            <div className='headerHomeAbout'>
                <h3 className='homePageTitles'>{t ('HomeAboutHeader')}</h3>
                <hr className='hrEvent'/>
                <p className='par-about'>{t ('HomeAboutPar')}</p>

                <a href='/about'>
                <button className='homeBtn'>{t ('HomeBtn')}</button>
                </a>
            </div>
        </div>

        <div className='homeAboutContainer homeAboutSecondMobile'>
            <div className='headerHomeAbout'>
            <h3 className='homePageTitles'>{t ('HomeServicesHead')}</h3>
                <hr className='hrEvent'/>
                <h4 className='par-services'>{t ('ServicesHomePar')}</h4>
                <p>{t ('ServiceDetailOne')}</p>
                <hr/>
                <h4 className='par-services'>{t ('WeekendTime')}</h4>
                <p>{t ('SaturdayWorkTime')}</p>
                <p>{t ('SundayClosed')}</p>
                <a href='/ourMenu'>
                <button className='homeBtn'>{t ('CheckMenu')}</button>
                </a>
            </div>
            <div className='headerHomeAbout'>
                <img src={image2} className='aboutImageBread' alt='cross' width='300' height="400"/>
            </div>
        </div>

        <div className='homeDescriptionContainer homeDescriptionThirdMobile'>
            <div className='headerHomeDescription'>
            <img src={image3} className='homeDescriptionImage' alt='cross' width='400' height="400"/>
            </div>
            <div className='headerHomeDescription'>
                <h3 className='homePageTitles'>{t ('EnjoyHome')}</h3>
                <hr className='hrEvent'/>
                <p className='eventsTwo'>{t ('FreshEveryDescription')}</p>
                <h5 className='events'>{t ('EnjoyTimeHome')}</h5> 
                <p className='events'>{t ('LocationHome')}</p>
           
                 <a href='/gallery'>
                  <button
                 className='homeBtn'>{t ('DirectionHomeBtn')}</button>
               </a>
            </div>
        </div>
        </div>
)
}
export default HomeAbout;