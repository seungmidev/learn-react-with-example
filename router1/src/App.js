import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import NotFile from './components/NotFile';
import Profile from './components/Profile';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/Portfolio">Portfolio</Link></li>
        </ul>

        {/* 화면에 보이는 부분 */}
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/about" exact><About /></Route>
          <Route path="/profile" exact><Profile /></Route>
          <Route path="*" exact><NotFile /></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;