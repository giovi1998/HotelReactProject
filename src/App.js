import './App.css'
//react router
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import ErrorPage from './Pages/ErrorPage';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/rooms/" element={<Rooms />} />
          <Route path="/singleroom/:id" element={<SingleRoom />} />
          <Route path="/*" element={<ErrorPage />} />          
        </Routes>
    </Router>
  );
};

export default App;
