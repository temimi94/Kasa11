import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import LocationPage from "./pages/LocationPage";
import PageErreur from "./pages/PageErreur";
import Apropos from "./pages/Apropos"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="/" element={<Home />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="*" element={<PageErreur/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
