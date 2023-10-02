import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/MoviesPage" component={MoviesPage} />
          <Route exact path="/About" component={AboutPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
