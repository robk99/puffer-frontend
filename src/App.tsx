import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ConversionRate from './components/ConversionRate';

function App() {
    return (
        <Router>
            <div className="min-h-screen text-white display: flex">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/conversion-rate" element={<ConversionRate />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
