import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import React, { Suspense } from 'react';
import './Styles/App.css';
import Sun from './Sun';
import PSPlanet from './PSPlanet';
import SkillsPlanet from './SkillsPlanet';
import OtherPlanet from './OtherPlanet';
import ETPlanet from './ETPlanet';

function App() {
  return (
    <Canvas display={'block'} camera={{position: [0, 0, 25], fov: 40}}> {/* Needed to 'draw on' in WebGL/> three.js. Camera sets starting point of view when page loads */}
      <Suspense fallback={null}>
        <ambientLight /> 
        <pointLight position={ [25, 0, 0] } /> 
        <OrbitControls /> 
        <Stars /> 
        <Sun />
        <PSPlanet/>
        <SkillsPlanet/>
        <OtherPlanet/>
        <ETPlanet/>
      </Suspense>
    </Canvas>
  );
}

export default App;

//Comments below cannot be in-line as this messes with the Suspense element, causing it to malfunction with rerendering and breaking the app.
//{/* <ambientLight /> Shows colour on all planets/sun */}
// {/* <pointLight position={ [25, 0, 0] } /> {/* Gives effect that sun is emitting light */}
// <OrbitControls /> {/* Allows user to move camera around space */}
// <Stars /> Creates starry background (in an orb shape when zoomed out, like the universe) */}