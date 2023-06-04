import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import ScrollMeter from "./components/ScrollMeter/ScrollMeter";
import Message from "./Pages/Message/Message";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollMeter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
