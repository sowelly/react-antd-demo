import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import {User} from './userPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<User />} />
          {/*<Route path="/" element={<Home />} />*/}
          {/*<Route path="/about" element={<About />} />*/}
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
