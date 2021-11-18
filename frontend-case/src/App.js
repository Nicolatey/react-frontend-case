import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./UI/Navbar";
import Home from "./components/Home";
import Footer from "./UI/Footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
