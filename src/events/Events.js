import imageBaptism from '../photos/baptism_people.png';
import Card from 'react-bootstrap/Card';
import React from 'react';
import rachel from '../baptism/rachel.png';
import isaac from '../baptism/isaac copy 1.jpg';
import justin from '../baptism/justin copy 1.jpg';
import jessy from '../baptism/jessy_2.jpg';
import CarouselEvent from './CarouselEvent';
import { useTranslation } from 'react-i18next';

function Events () {

  const { t } = useTranslation();

    return (
        <div className="eventsContainer">
<div className='headerEvents'>
            <div className='headerHomeEvent'>
            <h3>{t ('EventBaptism')}</h3>
            <p>{t ('BiggestEvent')}</p>
              <hr/>
                <p>{t ('Bible verse event one')}</p>
                <p>{t ('Bible verse location one')}</p>
                
            </div>
            <div className='headerEvents'>
                <img src={imageBaptism} className='eventImageHeader' alt='people'/>
            </div>
                </div>
              <div className='headerHomeAbout'>
                <h3>{t ('CandidatesHeader')}</h3>
                <p className='par-about'>{t ('CandidatesInfo')}</p>
              </div>

              <div className='cardNamesInfo'>
              <div className='personalInfo'>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={rachel} alt='person'/>
           <Card.Body>
            <Card.Title>Rachel Baias</Card.Title>
             <Card.Text>
             {t ('Candidates verse one')}
              <p>{t ('VerseLocation one')}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    <div className='personalInfo'>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={isaac} alt='person'/>
           <Card.Body>
            <Card.Title>Isaac Vasilyuc</Card.Title>
             <Card.Text>
             {t ('Candidates verse two')}
             <p>{t ('VerseLocation two')}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className='personalInfo'>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={jessy} alt='person' />
           <Card.Body>
            <Card.Title>Jessy Tasmaly</Card.Title>
             <Card.Text>
             {t ('Candidates verse three')}
              <p>{t ('VerseLocation three')}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className='personalInfo'>
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={justin} alt='person' />
           <Card.Body>
            <Card.Title>Justin Tamez</Card.Title>
             <Card.Text>
             {t ('Candidates verse four')}
             <p>{t ('VerseLocation Four')}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
      </div>

      <div>
       <CarouselEvent/>
      </div>

      <div className='eventLocation'>
        <p className="invitation">{t ('Invitation')}</p>
      <h4 className='invitationInfo'>{t ('Date and time')}</h4>
      <h4 className='invitationInfo'>{t ('Park location')}</h4>
    <h4 className='invitationInfo'>{t ('Adress map')}</h4>
    <p className="invitation">{t ('More details')}</p>
    <a href='/contact'>
    <button className='homeBtn'>{t ('Events contact button')}</button>
    </a>
	<iframe className='iFrameMap' title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.6473755014827!2d-122.54245642412631!3d45.81832007108193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495b4d652218aa7%3A0xbc034cc42271cc69!2sLewisville%20Regional%20Park!5e0!3m2!1sen!2sus!4v1717186196006!5m2!1sen!2sus" width="500" height="300">
  {t ('Click to get direction')}
  </iframe>
  </div>
    </div>
  )
}

export default Events;