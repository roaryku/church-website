import React from "react";
import { Accordion } from "react-bootstrap";
import './Accordion.css';
import photo1 from '../photos/youth.jpg';
import photo2 from '../photos/jesus and kids.jpg';
// import photo3 from './team.jpg';
// import name1 from './leonor.jpg';
// import name2 from './manager.jpg';
// import name3 from './name3.jpg';
// import name4 from './name4.avif';
// import imageSix from './footer.png'
import { Card } from "react-bootstrap";
import { useTranslation } from 'react-i18next';


const BcAccordion = () => {

    const { t } = useTranslation();

    return(
        <div className="bodyAccordion">
        <Accordion defaultActiveKey="0" className="mt-5 p-3">
            <Accordion.Item eventKey="0" className="item">
            <h1 className="aboutUsHeader">{t ('Our Ministries')}</h1>
                <Accordion.Header>{t ('Youth Ministry')}</Accordion.Header>
                <Accordion.Body className="youthBody">
                   
                       <img src={photo1} width='300' alt="business" className="accordionImageOne"/>
                       <h4 className='Youth-services'>{t ('Youth service')}</h4>
                       <p className="par-ministry-time">{t ('Youth service time')}</p>
                       <h2>{t ('Stand firm in your faith')}</h2>
                    <p className="par-ministry">{t ('Youth Bible verse')}</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="item">
                <Accordion.Header>{t ('Kids Ministry')}</Accordion.Header>
                <Accordion.Body className="youthBody">
                    <img src={photo2} width='300' alt="business" className="accordionImageOne"/> 
                    <h3 className='Youth-services'>{t ('Happy kids')}</h3>
                    <h4 className='Youth-services'>{t ('Bring your kids to Sunday School')}</h4>
                       <p className="par-ministry-time">{t ('Kids service time')}</p>
                    <h2>{t ('Small Blessings')}</h2> 
                    <p className="par-ministry">{t ('Kids Bible verse')}</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="item">
                <Accordion.Header>{t ('Church elders')}</Accordion.Header>
                <Accordion.Body>
                    {/* <img src={photo3} width='200' alt="business" className="accordionImageOne"/>  */}
                    <h2>{t ('Meet our Church elders and deacons')}</h2>

        <div className="accordionTeam">
            <div className="cardInfo">
      <Card className="card">
         <Card.Body variant="top">
          <Card.Text className="cardBody">
            {/* <img src={name1} width="100" alt='name'/> */}
            <Card.Title>Septi Danciu</Card.Title>
            <p>Main Pastor</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            {/* <img src={name4} width="100" alt='name'/> */}
            <Card.Title>Tony Aryku</Card.Title>
            <p></p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            {/* <img src={name3} width="100" alt='name'/> */}
            <Card.Title>Tony Tasmaly</Card.Title>
            <p></p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body variant="top">
        <Card.Text className="cardBody">
            {/* <img src={name2} width="100" alt='name'/> */}
            <Card.Title></Card.Title>
            <p>Stepan Kulya</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
</div>
        </Accordion.Body>
            </Accordion.Item>
        </Accordion>

        {/* <img src={imageSix} alt='footer' width='100%'/> */}
    </div>
    )
}
export default BcAccordion;