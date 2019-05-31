import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AHRC from './routes/AHRC';
import D17 from './routes/D17';
import Home from './routes/Home';
import Portfolio from './routes/Portfolio';
import RickAndMorty from './routes/RickAndMorty';
import Remedi from './routes/Remedi';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = 'App'>
        <Route render = {( {location} ) => (
          <TransitionGroup in = 'true' appear>
            <CSSTransition 
              key = {location.key}
              timeout = {1250}
              classNames = "fade"
            >
              <Switch location = {location}>
                <Route path = '/RickAndMorty' component = {RickAndMorty} />
                <Route path = '/Remedi' component = {Remedi} />
                <Route path = '/Portfolio' component = {Portfolio} />
                <Route path = '/D17' component = {D17} />
                <Route path = '/AHRC' component = {AHRC} />
                <Route path = '/' component = {Home}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </div>
    );
  }
}

export default App;

