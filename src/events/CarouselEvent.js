import ImageOne from '../baptism/IMG_6447.jpg';
import ImageTwo from '../baptism/song.jpg';
import ImageThree from '../baptism/groupOf5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/CarouselBP.css';
import { useTranslation } from 'react-i18next';

function CarouselEvent () {

    const { t } = useTranslation();

    return(
        // <div>
        <Carousel>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageOne} alt='bible'/>

          {/* <div> */}
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('Acts')}</h3>
            <p className='parCarus'>{t ('Repent and Baptize')}</p>
          </Carousel.Caption>
        {/* </div> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageTwo} text="Second slide" alt='bible'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('Mattew')}</h3>
            <p className='parCarus'>{t ('Go therefore')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageThree}text="Third slide" alt='bible'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('Peter')}</h3>
            <p className='parCarus'>{t ('Removal of dirt')}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        // </div>
    )
}
export default CarouselEvent;