import React from 'react';
import ReactDOM from 'react-dom';


// router
import { BrowserRouter as Router, Route } from "react-router-dom";

// uber base web
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

// redux
import { Provider } from 'react-redux';
import store from './store';

// sections
import Header from './components/Header/Header';

// routes
import Dashboard from './pages/Dashboard/Dashboard';
import Pages from './pages/Pages/Pages';
import Curator from './pages/Curator/Curator';

import './App.css';


const engine = new Styletron();


function App() {
  return (
    <Provider store={store}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router>
            <Header/>
            <main>
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/pages" exact component={Pages} />
              <Route path="/curator" exact component={Curator} />
            </main>
          </Router>
        </BaseProvider>
      </StyletronProvider>
    </Provider>
  );
}

export default App;
