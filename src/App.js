import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';


import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import Pages from './pages/Pages/Pages';
import Curator from './pages/Curator/Curator';

import './App.css';

const engine = new Styletron();



function App() {
  return (
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
    // <div className="base">
    //   <Router>
    //     <Header/>
    //     <main>
    //       <Route path="/dashboard" exact component={Dashboard} />
    //       <Route path="/pages" exact component={Pages} />
    //       <Route path="/curator" exact component={Curator} />
    //     </main>
    //   </Router>
    // </div>
  );
}

export default App;
