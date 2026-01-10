import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { ReservationsProvider } from './contexts/ReservationsContext';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <DarkModeProvider>
        <ReservationsProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </ReservationsProvider>
      </DarkModeProvider>
    </Router>
  );
}

export default App;

