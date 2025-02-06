import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Routes>
    //     {/* <Route path="/" element={<Home />} /> */}
    //     {/* <Route path="/login" element={<LoginSignup />} /> */}
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    // </Router>

    
    <Navbar/>
  );
}

export default App;
