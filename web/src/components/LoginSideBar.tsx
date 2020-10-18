import React from 'react';

import '../styles/components/login_sidebar.css';
import HappyLogo from '../images/happy-logo-big.svg';

export default function LoginSideBar() {
  return (
    <aside className="login-side-bar">
      <img src={HappyLogo} alt="Happy Logo" />
      <div className="locations">
        <strong>Brasil</strong>
        <span>Buscando felicidade em todo solo brasileiro.</span>
      </div>
    </aside>
  );
}
