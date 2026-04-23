import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../photos/baker-is-making-loaf-bread.jpg';
import ImageTwo from '../photos/delicious-fresh-bread-table.jpg';
import ImageThree from '../photos/flat-lay-bread-wheat-black-background.jpg';
import './CarouselBP.css'
import { useTranslation } from 'react-i18next';


function CarouselBootstrap () {

    const { t } = useTranslation()

       return(
        <Carousel>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageOne} alt='bread'/>

          <div>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('CountrySourdough')}</h3>
            <p className='parCarus'>{t ('RusticLoaf')}</p>
          </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageTwo} text="Second slide" alt='bread'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('OliveSourdough')}</h3>
            <p className='parCarus'>{t ('FlavoredWithOlives')}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='image-carousel'
          src={ImageThree}text="Third slide" alt='bread'/>
          <Carousel.Caption className='carouselCaption'>
            <h3 className='slideCaption'>{t ('SeededSourdough')}</h3>
            <p className='parCarus'> {t ('PackedWithSeeds')}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )

    
       
}
export default CarouselBootstrap;
