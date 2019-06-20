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

    <hr />

    <p>Here are some fun things I have built.</p>

    <ul>
      <li>
        <a href="http://spell-and-speak.eimaj.dev" target="_">
          Speak & Spell
        </a>
      </li>
      <li>
        <a href="http://mastermind.eimaj.dev" target="_">
          Mastermind.js
        </a>
      </li>
    </ul>

    <hr />

    <p>Please reach out if you'd like to chat!</p>

    <hr />

    <Icons />
  </div>
);

export default ContentHOC(Home);
