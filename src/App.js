import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import LocationPage from "./Pages/LocationPage";
import PageErreur from "./Pages/PageErreur";
import Apropos from "./Pages/Apropos"

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
