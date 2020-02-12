import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.png`} alt="" />
      </Link>
      <header>
        <h2>Wyatt Lewin</h2>
        <p><a href="mailto:wy@ttlew.in">wy@ttlew.in</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About Me</h2>
      <p>
      My name is Wyatt. 
      I've worked as a PM for a number of years now focusing on refining operational business processes and getting teams to work together smoothly. 
      I live in Seattle with my exceptional wife and two daughters. 
      </p>
      {/* <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Wyatt Lewin | <Link to="/">lew.in</Link>.</p>
    </section>
  </section>
);

export default Nav;
