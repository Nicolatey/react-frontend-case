import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./UI/Navbar";
import Home from "./components/Home";
import Footer from "./UI/Footer";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Blog" element={<Blog/>} />
        </Routes>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
