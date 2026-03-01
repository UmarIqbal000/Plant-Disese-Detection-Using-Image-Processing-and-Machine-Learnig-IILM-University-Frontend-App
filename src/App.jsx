import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-forest-800 text-white py-8 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-lg font-semibold mb-2">
              Plant Disease Detection Using Machine Learning
            </p>
            <p className="text-sm text-green-200">
              2026 All Rights Reserved | Developed by BPT2CSE301
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
