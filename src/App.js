import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar';
import ImagePicker from './component/ImagePicker';
import About from './component/About';

export default function App() {
  const [sBtn, setsBtn] = useState('light');
  const [hideNavbar, setHideNavbar] = useState(false);

  const Toggle = () => {
    setsBtn(sBtn === 'light' ? 'dark' : 'light');
    if (sBtn === 'light') {
      document.body.style.backgroundColor = '#042743';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      if (scrollTop + windowHeight >= docHeight - 100) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <nav className={hideNavbar ? 'navbar-hidden' : ''} style={{paddingTop:'56px'}}>
        <Navbar
          className="My-4 mx-3"
          title="𝔹𝔸𝕃𝔸𝕁𝕀 𝚜𝚝𝚘𝚗𝚎 𝚊𝚗𝚍 𝚌𝚞𝚝𝚝𝚒𝚗𝚐𝚜"
          Toggle={Toggle}
          sBtn={sBtn}
          home="Home"
          About="About"
        />
      </nav>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<ImagePicker />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      
      <footer className="footer-container color-scheme-dark mx=10" style={{ backgroundColor: '#E7E7E7' }}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{ color: 'grey' }}>
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{ color: 'grey' }}>
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
      </footer>
    </Router>
  );
}
