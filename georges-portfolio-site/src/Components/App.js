import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './Styles/App.css';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
    </Canvas>
  );
}

export default App;
