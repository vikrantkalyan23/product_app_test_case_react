import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import EnquiriesTab from './components/EnquiriesTab';

const App = () => {
  const courses = [
    { id: 1, name: 'React Basics' },
    { id: 2, name: 'Redux Mastery' },
    // Add more courses as needed
  ];

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Course List</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/enquiries">Enquiries</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<CourseList courses={CourseList} />} />
            <Route path="/enquiries" element={<EnquiriesTab />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
