import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../photos/bible-lake.jpg';
import ImageTwo from '../photos/bible-open.jpg';
import ImageThree from '../photos/bible-spirit.jpg';
import './CarouselBP.css'
import { useTranslation } from 'react-i18next';


function CarouselBootstrap () {

    const { i18n, t } = useTranslation()

       return(
        <Carousel>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageOne} alt='bible'/>

          <div>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('FaithOverFear')}</h3>
            <p className='parCarus'>{t ('BibleVerseOne')}</p>
          </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageTwo} text="Second slide" alt='bible'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('PeaceAndPurpose')} ⛪️</h3>
            <p className='parCarus'>{t ('BibleVerseTwo')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageThree}text="Third slide" alt='bible'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('GodsWord')}</h3>
            <p className='parCarus'>
            {t ('BibleVerseThree')}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )

    
       
}
export default CarouselBootstrap;