// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/common/header/Header";
// function App() {
//   return (

//     <Header />
//     // <Router>

//       // {/* <Routes>
//       //   <Route path="/" element={<h1>Home Page</h1>} />
//       //   <Route path="/courses" element={<h1>Courses Page</h1>} />
//       //   <Route path="/about" element={<h1>About Page</h1>} />
//       //   <Route path="/team" element={<h1>Team Page</h1>} />
//       //   <Route path="/pricing" element={<h1>Pricing Page</h1>} />
//       //   <Route path="/journal" element={<h1>Journal Page</h1>} />
//       //   <Route path="/contact" element={<h1>Contact Page</h1>} />
//       // </Routes> */}
//     // </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/common/header/Header";

function App() {
  return (
    <Router> 
      <>
        <Header />
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/courses" element={<h1>Courses Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/team" element={<h1>Team Page</h1>} />
          <Route path="/pricing" element={<h1>Pricing Page</h1>} />
          <Route path="/journal" element={<h1>Journal Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

