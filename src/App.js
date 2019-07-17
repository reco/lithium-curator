import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header/Header';

import Dashboard from './pages/Dashboard/Dashboard';
import Pages from './pages/Pages/Pages';
import Curator from './pages/Curator/Curator';

import './App.css';

function App() {
  return (
    <div className="base">
      <Router>
        <Header/>
        <main>
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/pages" exact component={Pages} />
          <Route path="/curator" exact component={Curator} />
        </main>
      </Router>
    </div>
  );
}

export default App;
