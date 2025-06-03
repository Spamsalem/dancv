import { useState, useEffect } from 'react';
import translations from './translations';
import './App.css';
import './about-me.css';
import profileImage from './assets/profile.jpeg';
import { FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

function App() {
  const [language, setLanguage] = useState<'en' | 'he'>('en');
  const [scrolled, setScrolled] = useState(false);
  const t = translations[language];
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`app ${language === 'he' ? 'rtl' : 'ltr'}`}>
      <header className={scrolled ? 'scrolled' : ''}>
        <button 
          onClick={toggleLanguage} 
          className="language-toggle"
        >
          {t.switchLanguage}
        </button>
      </header>
      
      <main>
        <div className="profile-section">
          <div className="profile-image-container">
            <img src={profileImage} alt="Dan Amsalem" className="profile-image" />
          </div>
          <h1 className="name">
            <span className="first-name">{t.bio.firstName}</span> 
            <span className="last-name">{t.bio.lastName}</span>
          </h1>
          <div className="title">{t.bio.title}</div>
          <div className="scroll-indicator">
            <FaChevronDown className="bounce" />
          </div>
        </div>
        
        <div className="bio-section">
          <p className="intro">{t.bio.intro}</p>
          
          <div className="achievements">
            {t.bio.achievements.map((achievement, index) => (
              <div className="achievement-item" key={`achievement-${index}`}>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
          
          <h3 className="about-me-heading">{language === 'en' ? 'About me' : ''}</h3>
          
          <div className="about-me">
            {t.bio.aboutMe.map((point, index) => (
              <div className="about-item" key={`about-${index}`}>
                <p>{point}</p>
              </div>
            ))}
          </div>
          
          <p className="closing" dangerouslySetInnerHTML={{ __html: t.bio.closing.replace('\n\n', '<br/><br/>') }}></p>
        </div>
        
        <div className="contact-section">
          <h2>{t.contactMe}</h2>
          <div className="contact-links">
            <a 
              href="https://www.linkedin.com/in/danamsalem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button linkedin"
            >
              <FaLinkedin className="icon" />
              <span>{t.linkedin}</span>
            </a>
            <a 
              href="mailto:damsalemdan@gmail.com" 
              className="contact-button email"
            >
              <FaEnvelope className="icon" />
              <span>{t.email}</span>
            </a>
          </div>
        </div>
      </main>
      
      <footer>
        <p>© {new Date().getFullYear()} Dan Amsalem</p>
      </footer>
    </div>
  );
}

export default App;
