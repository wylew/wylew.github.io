import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>It's a website! On the internet! About me!.</p>
        </div>
      </header>
      <p> My name is Wyatt. 
      I've worked as a PM for a number of years now focusing on refining operational business processes and getting teams to work together smoothly. 
      I live in Seattle with my exceptional wife and two daughters.  {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="mailto:wy@ttlew.in">contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
