import React from 'react';
import { useTranslation } from 'react-i18next';
import myVideo from '../gallery_photos/backery.mp4';
import bread1 from '../gallery_photos/bread1.png';
import bread2 from '../gallery_photos/bread2.jpg';
import bread3 from '../gallery_photos/bread3.jpg';
import bread4 from '../gallery_photos/bread4.jpg';
import bread5 from '../gallery_photos/bread5.jpg';
import bread6 from '../gallery_photos/bread6.jpg';
import bread7 from '../gallery_photos/bread7.jpg';
import bread8 from '../gallery_photos/bread8.jpg';
import pastry1 from '../gallery_photos/pastry1.jpg';
import pastry2 from '../gallery_photos/pastry2.jpg';
import pastry3 from '../gallery_photos/pastry3.jpg';
import pastry4 from '../gallery_photos/pastry4.jpg';
import pastry5 from '../gallery_photos/pastry5.jpg';
import pastry6 from '../gallery_photos/pastry6.jpg';
import pastry7 from '../gallery_photos/pastry7.jpg';
import pastry8 from '../gallery_photos/pastry8.jpg';
import drink1 from '../gallery_photos/drink1.jpg';
import drink2 from '../gallery_photos/drink2.jpg';
import drink3 from '../gallery_photos/drink3.jpg';
import drink4 from '../gallery_photos/drink4.jpg';
import drink5 from '../gallery_photos/drink5.jpg';
import drink6 from '../gallery_photos/drink6.jpg';
import drink7 from '../gallery_photos/drink7.jpg';
import drink8 from '../gallery_photos/drink8.jpg';
import './Gallery.css';
import CarouselGallery from './CarouselGallery';

function Gallery() {
  const { t } = useTranslation();

  const breadSection = [
    {img: bread1, title: t('SourdoughLoaf')},
    {img: bread2, title: t('OliveSourdough2')},
    {img: bread3, title: t('MultigrainSourdough')},
    {img: bread4, title: t('Ciabatta')},
    {img: bread5, title: t('GarlicSourdough')},
    {img: bread6, title: t('RyeSourdough')},
    {img: bread7, title: t('WholeWheatSourdough')},
    {img: bread8, title: t('Brioche')},
  ];
 
  const pastrySection = [
    {img: pastry1, title: t('Croissant')},
    {img: pastry2, title: t('CinnamonRoll')},
    {img: pastry3, title: t('TiramisuSlice')},
    {img: pastry4, title: t('BananaBread')},
    {img: pastry5, title: t('AlmondCroissant')},
    {img: pastry6, title: t('FruitDanish')},
    {img: pastry7, title: t('LemonCheeseCake')},
    {img: pastry8, title: t('PumpkinMuffins')},
  ];
   
  const beverageSection = [
    {img: drink1, title: t('Espresso')},
    {img: drink2, title: t('Americano')},
    {img: drink3, title: t('Latte')},
    {img: drink4, title: t('HotChocolate')},
    {img: drink5, title: t('IcedLatte')},
    {img: drink6, title: t('Lemonade')},
    {img: drink7, title: t('HerbalTea')},
    {img: drink8, title: t('BlackTea')},
  ];

  return (
    <div className="eventsContainer">
      <video src={myVideo} autoPlay loop muted playsInline></video>
      {/* video and photos are used for school project, not for production */}

      <div className="headerHomeAbout">
        <h3 className="galleryTitle">{t('GalleryTitle')}</h3>
        <p className="galleryDescription">{t('GalleryDescription')}</p>
      </div>

    <div className="galleryCarouselWrap">
        <CarouselGallery
          breadSection={breadSection}
          pastrySection={pastrySection}
          beverageSection={beverageSection}
        />
      </div>

      <div className="eventLocation">
        <h3 className='invitationHeader'>{t('InvitationCaption')}</h3>
        <p className="invitation">{t('InvitationDescription')}</p>
        <h4 className="invitationInfo">{t('Invitation')}</h4>
        <h4 className="invitationInfo">{t('AddressMap')}</h4>
        <p className="invitation">{t('MoreDetails')}</p>
        <a href="/contact">
          <button className="homeBtn">{t('GalleryContactButton')}</button>
        </a>
      </div>
    </div>
  );
}

export default Gallery;