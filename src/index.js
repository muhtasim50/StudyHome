import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreateCourse from './components/CreateCourse/CreateCourse';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/createcourse' element={<CreateCourse/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);