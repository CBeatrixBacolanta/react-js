import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from '../src/components/Header.jsx';
import Sidebar from '../src/components/Sidebar.jsx';
import Footer from '../src/components/Footer.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import Admin from './pages/Admin.jsx';
import Student from './pages/Student.jsx';

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/student" element={<Student />} />
            </Routes>
          <Footer />
      </div>     
    </div>
  );
}