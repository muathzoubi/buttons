import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import SideBar from './Sidebar';
import MainLayout from './mainLayout';
const mainStyle: React.CSSProperties = {
  display: 'flex',
  position: 'fixed',
  top: 60,
  right: 0,
  left: 0,
  bottom: 0,
  overflow: 'hidden',
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: 45,
          width: '100%',
          border: 'red 1px soild',
          background: ' rgba(255, 255, 255, 1)',
          zIndex: 1,
        }}
      >
        <div style={{ position: 'absolute', zIndex: 5 }}>
          <img
            src="https://i.ibb.co/Q8y1gwp/Sardol.png"
            alt="Sardol"
            height={45}
          />
        </div>
      </div>

      <div style={mainStyle}>
        <MainLayout />
      </div>
    </div>
  );
}

export default App;
