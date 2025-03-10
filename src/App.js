import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="min-h-screen bg-cyber-black relative">
      <div className="cyber-grid" />
      <div className="relative z-10">
        <MainLayout />
      </div>
    </div>
  );
}

export default App;