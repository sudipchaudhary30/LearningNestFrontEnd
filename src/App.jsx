import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/common/header/Header"
// import Home from './Pages/Home';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
