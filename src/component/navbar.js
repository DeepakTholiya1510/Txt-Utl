import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [isNavbarVisible, setIsNavbarVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.sBtn} bg-${props.sBtn}`} style={{ transform: isNavbarVisible ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.3s ease-in-out' }}>
        <div className="container-fluid" style={{ borderBottom: '0.5px solid gray', paddingLeft: '15px', paddingRight: '15px' }}>
          <a className="navbar-brand" href="#"><strong>{props.title}</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="myclass me-3" to="/" style={{ color: props.sBtn === 'dark' ? 'white' : 'black' }}>{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="myclass me-3" to="/about" style={{ color: props.sBtn === 'dark' ? 'white' : 'black' }}>{props.About}</Link>
              </li>
            </ul>
          </div>
          <div className="form-check form-switch text-center text-lg-end">
            <input className="form-check-input" onClick={props.Toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.sBtn === 'dark' ? 'white' : 'black' }}>Dark Mode</label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string,
  sBtn: PropTypes.string,
  Toggle: PropTypes.func,
};
