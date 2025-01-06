import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import Enquiries from './components/Enquiries';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Courses</Link>
        <Link to="/enquiries">Enquiries</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
    </Router>
  );
};

export default App;
