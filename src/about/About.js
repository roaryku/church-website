import breadImageOne from '../photos/about us.png';
import breadImageTwo from '../photos/bread-for-you.jpg';
import { useTranslation } from 'react-i18next';


function About () {

const { t } = useTranslation()

     return (
      <div>
         <h2 className='headerAbout'>{t ('About us')}</h2>

         <div className='homeAboutContainer aboutIntroSection'>
            <div className='headerHomeAbout'>
                <img src={breadImageOne} className='aboutImageBread' alt='church'/>
            </div>
            <div className='headerHomeAbout'>
                <h3 className='homePageTitles'>{t ('BakedWithHeart')}</h3>
                <h5 className='aboutEstablish'>{t ('Establish')}</h5>
                <hr className='hrEvent'/>
                <p>{t ('TheHistory')}</p>
            </div>
        </div>

             <div className='AboutContainer'>
            <div className='ourBeliefs'>
                <h3 className='homePageTitles'>{t ('OurStory')}</h3>
                <hr className='hrEvent'/>
                <h4>{t ('EveryMorningSmellsLikeHome')}</h4>
                <h4>{t ('Inspiration')}</h4>
                <p className='par-about'>{t ('BreadHistory')}</p>
                <p>{t ('BreadHistoryOne')}</p>
                <h4 className='paragraphEnding'>{t ('ComeSitEnjoy')}</h4>

            <a href='/contact'>
                <button className='homeBtn'>{t ('DirectionHomeBtn')}</button>
            </a>
        </div>
    </div>

    <div className='homeAboutContainer aboutCustomersSection'>
            <div className='headerHomeAbout'>
            <h3 className='homePageTitles'>{ t('Our Mission')}</h3>
            <h5 className='aboutEstablish'>{t ('FromOurTable')}</h5>
                <hr className='hrEvent'/>
                <p>{ t('Good news')}</p>
                <p>{ t('WeAreHereForYou')}</p>
                <p>{ t('LookForEveryDay')}</p>
                 <a href='/ourMenu'>
                <button className='homeBtn'>{t ('CheckMenu')}</button>
                </a>
            </div>
            <div className='headerHomeAbout'>
                <img src={breadImageTwo} className='aboutImageBreadMaking'  alt='bread' width='500'/>
            </div>
        </div>
     </div>
    )
}

export default About;