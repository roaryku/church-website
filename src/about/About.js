import church from '../photos/church.jpg';
// import bible from '../photos/bible.avif';
import cross from '../photos/cross.jpg';
import { useTranslation } from 'react-i18next';


function About () {


  const { t } = useTranslation()

     return (
      <div>
         <h2 className='headerAbout'>{t ('About us')}</h2>

         <div className='homeAboutContainer'>
            <div className='headerHomeAbout'>
                <img src={church} className='aboutImageCross' alt='church'/>
            </div>
            <div className='headerHomeAbout'>
                <h3>{t ('Church History')}</h3>
                <h5>{t ('Establish')}</h5>
                <hr/>
                <p>{t ('The History')}</p>
            </div>
        </div>

             <div className='AboutContainer'>
            <div className='ourBeliefs'>
                <h3>{t ('OUR BELIEFS')}</h3>
                <h5>{t ('Biggest Moments')}</h5>
                <hr/>
                <p className='par-about'>{t ('Inspiration')}</p>
                <p>{t ('BelievsOne')}</p>
                <p>{t ('BelievsTwo')}</p>
                <p>{t ('BelievsThree')}</p>
                <p>{t ('BelievsFour')}</p>
                <p>{t ('BelievsFive')}</p>
                <p>{t ('BelievsSix')}</p>
                <p>{t ('BelievsSeven')}</p>
                <p>{t ('BelievsEight')}</p>
                <p>{t ('BelievsNine')}</p>
                <p>{t ('BelievsTen')}</p>
                <p>{t ('BelievsEleven')}</p>
            </div>
        </div>


        <div className='homeAboutContainer'>
            <div className='headerHomeAbout'>
            <h3>{ t('OUR MISSION')}</h3>
            <h5>{ t('Creating Disciples')}</h5>
                <hr/>
                <p>{ t('Good news')}</p>
                <p>{ t('Glorification of God')}</p>
                <p>{ t('Build in the faith')}</p>
            </div>
            <div className='headerHomeAbout'>
                <img src={cross} className='aboutImageCross' alt='cross' width='500'/>
            </div>
        </div>


      </div>
    )
}

export default About;