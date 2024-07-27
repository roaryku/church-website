import './App.css';
import React from 'react';
import Menu from './Menu';
import Footer from './footer/Footer';
import { useTranslation } from 'react-i18next';


function App() {

  const { i18n, t} = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ro' : 'en')
  }


  return ( 
    <div className='AppContainer'>
      <h1 className='header'>{t('Header')}</h1>
     
      
       <div>
          <Menu toggleLang = {toggleLang}/>
        <Footer/>
       </div>

    </div>  

  );
}

export default App;
