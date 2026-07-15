import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Preloader from "./components/Preloader";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

export default function App() {
  return (
    // <Preloader logoLineOne="SOCIAL" logoLineTwo="STACK">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faqs" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    // </Preloader>
  );
}