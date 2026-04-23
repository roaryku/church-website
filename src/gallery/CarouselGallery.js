import ImageOne from '../gallery_photos/slide1.jpg';
import ImageTwo from '../gallery_photos/slide2.jpg';
import ImageThree from '../gallery_photos/slide3.jpg';
import ImageFour from '../gallery_photos/slide4.jpg';
import ImageFive from '../gallery_photos/slide5.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/CarouselBP.css';
import { useTranslation } from 'react-i18next';

function CarouselGallery ({ 
  breadSection = [], 
  pastrySection = [], 
  beverageSection = [] }) {

    const { t } = useTranslation();

    return(
          <div>
            <h5 className="gallerySectionTitle">{t('SourdoughArtisan')}</h5>
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-none d-md-block">
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {breadSection.slice(0, 4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
      
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {breadSection.slice(4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            </Carousel>
      
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-md-none">
              {breadSection.map(({img, title}, idx) => (
                <Carousel.Item key={idx}>
                  <Row xs={1} className="g-4">
                    <Col>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
      
            <h5 className="gallerySectionTitle">{t('Pastries & Sweet Treats')}</h5>
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-none d-md-block">
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {pastrySection.slice(0, 4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
      
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {pastrySection.slice(4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            </Carousel>
      
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-md-none">
              {pastrySection.map(({img, title}, idx) => (
                <Carousel.Item key={idx}>
                  <Row xs={1} className="g-4">
                    <Col>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
      
            <h5 className="gallerySectionTitle">{t('Drinks')}</h5>
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-none d-md-block">
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {beverageSection.slice(0, 4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
      
              <Carousel.Item>
                <Row xs={1} md={4} className="g-4">
                  {beverageSection.slice(4).map(({img, title}, idx) => (
                    <Col key={idx}>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            </Carousel>
      
            <Carousel controls={true} indicators={false} interval={null} className="galleryRowsCarousel d-md-none">
              {beverageSection.map(({img, title}, idx) => (
                <Carousel.Item key={idx}>
                  <Row xs={1} className="g-4">
                    <Col>
                      <Card>
                        <Card.Img className="galleryCardImage" variant="top" src={img} />
                        <Card.Body>
                          <Card.Title>{title}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>




        <Carousel>

        <Carousel.Item>
          <img className='image-carousel'
          src={ImageOne} alt='bakery'/>
         </Carousel.Item>

        <Carousel.Item>
          <img className='image-carousel'
          src={ImageTwo} text="Second slide" alt='bakery'/>
       </Carousel.Item>

        <Carousel.Item>
          <img className='image-carousel'
          src={ImageThree}text="Third slide" alt='bakery'/>
        </Carousel.Item>

                <Carousel.Item>
          <img className='image-carousel'
          src={ImageFour} text="Second slide" alt='bakery'/>
       </Carousel.Item>

        <Carousel.Item>
          <img className='image-carousel'
          src={ImageFive}text="Third slide" alt='bakery'/>
        </Carousel.Item>
</Carousel>
      </div>
    )
}
export default CarouselGallery;