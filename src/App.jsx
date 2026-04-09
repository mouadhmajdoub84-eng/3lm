import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import IA from "./pages/services/IA";
import DeveloppementWeb from "./pages/services/DeveloppementWeb";
import AnalyseDonnees from "./pages/services/AnalyseDonnees";
import DeveloppementMobile from "./pages/services/DeveloppementMobile";
import IoT from "./pages/services/IoT";
import ERP from "./pages/services/ERP";
import DevOps from "./pages/services/DevOps";
import CommunityManagement from "./pages/services/CommunityManagement";
import Contact from "./pages/Contact";
import SeConnecter from "./pages/SeConnecter";
import Dashboard from "./pages/Dashboard";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />

        {/* Contact */}
        <Route path="/contactus" element={<Layout><Contact /></Layout>} />

        {/* Login */}
        <Route path="/se-connecter" element={<Layout><SeConnecter /></Layout>} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />

        {/* Services */}
        <Route path="/ia" element={<Layout><IA /></Layout>} />
        <Route path="/analyse-des-donnees" element={<Layout><AnalyseDonnees /></Layout>} />
        <Route path="/iot" element={<Layout><IoT /></Layout>} />
        <Route path="/devops" element={<Layout><DevOps /></Layout>} />
        <Route path="/developpement-web" element={<Layout><DeveloppementWeb /></Layout>} />
        <Route path="/developpement-mobile-1" element={<Layout><DeveloppementWeb /></Layout>} />
        <Route path="/developpement-mobile" element={<Layout><DeveloppementMobile /></Layout>} />
        <Route path="/erp" element={<Layout><ERP /></Layout>} />
        <Route path="/community-management" element={<Layout><CommunityManagement /></Layout>} />

        {/* Contact */}
        <Route path="/contactus" element={<Layout><Contact /></Layout>} />

        {/* Fallback */}
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
