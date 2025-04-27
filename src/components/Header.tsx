import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-surface py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          <div className="flex items-center">
            <img src="/puffer-logo.svg" alt="Puffer Logo" className="h-8 mr-2" />
            <span>Puffer</span>
          </div>
        </Link>
      </div>
      <nav>
        <Link 
          to="/conversion-rate" 
          className={`text-base font-medium ${
            location.pathname === '/conversion-rate' 
              ? 'text-white border-b-2 border-primary' 
              : 'text-gray-400 hover:text-gray-200'
          } transition-colors duration-200 px-3 py-2`}
        >
          Conversion Rate
        </Link>
      </nav>
    </header>
  );
};

export default Header; 