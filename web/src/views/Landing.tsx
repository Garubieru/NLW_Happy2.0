import React from 'react';
import { FiArrowRight, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// !CSS
import '../styles/pages/landing.css';

// !IMAGES
import logoImg from '../images/Logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Brasil</strong>
        </div>

        <Link to="/dashboard/registred" className="enter-restrict-access">
          <FiLock size={26} />
          Acesso restrito
        </Link>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;
