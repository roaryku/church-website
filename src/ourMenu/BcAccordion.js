import React from "react";
import { Accordion } from "react-bootstrap";
import './Accordion.css';
import photo1 from '../menu_photos/classic_SD.jpg';
import photo2 from '../menu_photos/olive_SD.jpg';
import photo3 from '../menu_photos/whole-wheat.jpg';
import photo4 from '../menu_photos/multigrain.jpg';
import photo5 from '../menu_photos/rye.jpg';
import phot6 from '../menu_photos/seeds.jpg';
import photo7 from '../menu_photos/garlic.jpg';
import photo8 from '../menu_photos/butter_croissants.jpg';
import photo9 from '../menu_photos/cinnamon_rolls.jpg';
import photo10 from '../menu_photos/banana_bread.jpg';
import photo11 from '../menu_photos/lemon_loaf.jpg';
import photo12 from '../menu_photos/muffins.jpg';
import photo13 from '../menu_photos/tiramisu.jpg';
import photo14 from '../menu_photos/americano.jpg';
import photo15 from '../menu_photos/latte.jpg';
import photo16 from '../menu_photos/tea.jpg';
import photo17 from '../menu_photos/lemonade.jpg';
import photo18 from '../menu_photos/iced_latte.jpg';
import photo19 from '../menu_photos/hot_chocolate.jpg';
import { Card } from "react-bootstrap";
import { useTranslation } from 'react-i18next';


const BcAccordion = () => {

    const { t } = useTranslation();

    return(
        <div className="bodyAccordion">
        <Accordion defaultActiveKey="0" className=" p-3">
            <Accordion.Item eventKey="0" className="item">
            <h1 className="aboutUsHeader">{t ('The Menu')}</h1>
                <Accordion.Header className="AccordionNameTitles">{t ('SourdoughArtisan')}</Accordion.Header>
                <Accordion.Body>
                  <div className="menuCardsRow">
                    <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo1} alt="sourdough bread" />
                      <span className="bestSeller">{t ('Best Seller')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Country Sourdough')}</Card.Title>
                        <Card.Text className="thePrice">{('$9.50')}</Card.Text>
                        <Card.Text>{t ('Rustic Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo2} alt="sourdough bread" />
                      <span className="newSeller">{t ('New')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Olive Sourdough')}</Card.Title>
                        <Card.Text className="thePrice">{('$11.00')}</Card.Text>
                        <Card.Text>{t ('Olive Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo3} alt="sourdough bread" />
                      <span className="saleSeller">{t ('Sale')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Whole Wheat Sourdough')}</Card.Title>
                        <div className="priceAndSpecials">
                        <Card.Text className="oldPrice">{('$10.95')}</Card.Text>
                        <Card.Text className="salePrice">{('$8.50')}</Card.Text>
                        </div>
                        <Card.Text>{t ('Wheat Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo4} alt="sourdough bread" />
                      <span className="saleSeller">{t ('Sale')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Multigrain Sourdough')}</Card.Title>
                        <div className="priceAndSpecials">
                        <Card.Text className="oldPrice">{('$11.50')}</Card.Text>
                        <Card.Text className="salePrice">{('$10.30')}</Card.Text>
                        </div>
                        <Card.Text>{t ('Multigrain')}</Card.Text>
                      </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo5} alt="sourdough bread" />
                      <span className="bestSeller">{t ('Best Seller')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Rye Sourdough')}</Card.Title>
                        <Card.Text className="thePrice">{('$14.39')}</Card.Text>
                        <Card.Text>{t ('Rye Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={phot6} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Seeds Sourdough')}</Card.Title>
                        <Card.Text className="thePrice">{('$10.95')}</Card.Text>
                        <Card.Text>{t ('Seeds Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem', position: 'relative' }}>
                      <Card.Img variant="top" src={photo7} alt="sourdough bread" />
                      <span className="newSeller">{t ('New')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Garlic & Sourdough')}</Card.Title>
                        <Card.Text className="thePrice">{('$11.00')}</Card.Text>
                        <Card.Text>{t ('Garlic Loaf')}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="item">
                <Accordion.Header className="AccordionNameTitles">{t ('Pastries & Sweet Treats')}</Accordion.Header>
                <Accordion.Body>
                  <div className="menuCardsRow">


                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo13} alt="sourdough bread" />
                      <span className="newSeller">{t ('New')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Tiramisu')}</Card.Title>
                        <Card.Text className="thePrice">{('$8.99')}</Card.Text>
                        <Card.Text>{t ('Creamy Tiramisu')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo8} alt="sourdough bread" />
                       <span className="saleSeller">{t ('Sale')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Butter Croissants')}</Card.Title>
                        <div className="priceAndSpecials">
                        <Card.Text className="oldPrice">{('$6.99')}</Card.Text>
                        <Card.Text className="salePrice">{('$4.50')}</Card.Text>
                        </div>
                        <Card.Text>{t ('Buttery')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo9} alt="sourdough bread" />
                      <span className="bestSeller">{t ('Best Seller')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Cinnamon Rolls')}</Card.Title>
                        <Card.Text className="thePrice">{('$5.50')}</Card.Text>
                        <Card.Text>{t ('Cinnamon')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo10} alt="sourdough bread" />
                      <span className="bestSeller">{t ('Best Seller')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Banana Bread')}</Card.Title>
                        <Card.Text className="thePrice">{('$3.75')}</Card.Text>
                        <Card.Text>{t ('Banana')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo11} alt="sourdough bread" />
                       <span className="saleSeller">{t ('Sale')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Lemon Loaf')}</Card.Title>
                        <div className="priceAndSpecials">
                        <Card.Text className="oldPrice">{('$4.21')}</Card.Text>
                        <Card.Text className="salePrice">{('$3.65')}</Card.Text>
                        </div>
                        <Card.Text>{t ('Lemon')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo12} alt="sourdough bread" />
                      <span className="bestSeller">{t ('Best Seller')}</span>
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Pumpkin muffins')}</Card.Title>
                        <Card.Text className="thePrice">{('$4.50')}</Card.Text>
                        <Card.Text>{t ('Pumpkin')}</Card.Text>
                      </Card.Body>
                    </Card>

                  </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="item">
                <Accordion.Header className="AccordionNameTitles">{t ('Drinks')}</Accordion.Header>
                <Accordion.Body>
                    <div className="menuCardsRow">
                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo14} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Americano')}</Card.Title>
                        <Card.Text className="thePrice">{('$3.50')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo15} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Latte')}</Card.Title>
                        <Card.Text className="thePrice">{('$4.55')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo16} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Tea')}</Card.Title>
                        <Card.Text className="thePrice">{('$2.99')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo17} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('Lemonade')}</Card.Title>
                        <Card.Text className="thePrice">{('$4.75')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo18} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('IcedLatte')}</Card.Title>
                        <Card.Text className="thePrice">{('$5.75')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>

                     <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={photo19} alt="sourdough bread" />
                      <Card.Body>
                        <Card.Title className="menuTitle">{t ('HotChocolate')}</Card.Title>
                        <Card.Text className="thePrice">{('$4.50')}</Card.Text>
                        <Card.Text>{t ('RusticLoaf')}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
        </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* <img src={imageSix} alt='footer' width='100%'/> */}
    </div>
    )
}
export default BcAccordion;