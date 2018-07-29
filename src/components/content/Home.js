import React from 'react';
import { Link } from 'react-router-dom';

import ContentHOC from '../Content';
import Icons from '../Icons';


const Home = () => (
  <div>
    <h2>My name is Jamie Allen.</h2>

    <p>
      I am a <Link to="/cv">Senior Software Developer</Link> working my craft in Hamilton (Canada).
    </p>
    <p>
      I also <a href="https://society6.com/eimaj" target="_">paint</a> and [design]() things.
    </p>

    <hr />

    <p>Here are some fun things I have built.</p>

    <ul>
      <li>
        <a href="http://alphabet.eimaj.net" target="_">Speak & Spell</a>
      </li>
      <li>
        <a href="http://mastermind.eimaj.net" target="_">Mastermind.js</a>
      </li>
    </ul>

    <hr />

    <Icons />
  </div>
);

export default ContentHOC(Home);
