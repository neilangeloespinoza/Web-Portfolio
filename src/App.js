import './App.css';
import MainLayout from './components/MainLayout';

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-cyber-black relative">
      {/* Background grid */}
      <div className="cyber-grid" />
      <div className="relative z-10">
        {/* Main layout component */}
        <MainLayout />
      </div>
    </div>
  );
}

export default App;