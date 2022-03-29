import '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import mercuryTexture from './Styles/Textures/mercuryTexture.jpg';

export default function PSPlanet(){
    const pSPlanet = useLoader(THREE.TextureLoader, mercuryTexture);
    return(
        <mesh position={[0, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [0.5, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={pSPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}


