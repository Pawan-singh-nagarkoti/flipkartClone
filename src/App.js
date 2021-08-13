import React from 'react';
import {Box} from '@material-ui/core';
// components
import Header from './component/header/Header';
import Home from './component/home/Home';
import Card from './component/card/Card'

// router dom
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import TemplateProvider from './component/template/TemplateProvider';

function App() {
  return (
    <>
      {/* <TemplateProvider> */}
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 54}}>
        <Switch>
          <Route exact path='/' component= {Home}/>
          <Route exact path='/cart' component= {Card}/>
        </Switch>
        </Box>
      </BrowserRouter>
      {/* </TemplateProvider> */}
    </>
  );
}

export default App;
