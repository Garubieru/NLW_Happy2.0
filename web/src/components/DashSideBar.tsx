import React from 'react';

import '../styles/components/login_sidebar.css';
import { Link } from 'react-router-dom';
import { FiAlertCircle, FiMapPin, FiPower, FiEdit3 } from 'react-icons/fi';
import mapMarkerImg from '../images/map-marker.svg';

import { useHistory } from 'react-router-dom';

export default function DashSideBar(props: any) {
  const history = useHistory();
  function handleLogoff() {
    localStorage.removeItem('app-token');
    history.push('/login');
  }
  return (
    <aside className="dashboard-side">
      <img src={mapMarkerImg} alt="Logo" />

      <div className="dashboard-buttons">
        <Link to="/dashboard/registred" className="dash-button">
          <FiMapPin size={25} />
        </Link>

        <Link to="/dashboard/pending" className="dash-button">
          <FiAlertCircle size={25} />
        </Link>

        <Link to="/orphanages/create" className="dash-button">
          <FiEdit3 size={25} />
        </Link>
      </div>

      <button onClick={handleLogoff} className="dash-button">
        <FiPower size={25} />
      </button>
    </aside>
  );
}
