import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Profile from './components/Profile';
import { Link, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>

      {/* exact는 정확하게 일치할 때만 */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profile" component={Profile} />
    </div>
  );
};

export default App;