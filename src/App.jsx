import { Routes, Route } from 'react-router-dom';
import Registration from './pages/registration/Registration';
import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/contact" element={<Registration />} />
      </Routes>
    </>
  );
}
