import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Packages from "./pages/packages/Packages";
import Prices from "./pages/prices/Prices";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import { Layout } from "./components/layout/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Prices />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
