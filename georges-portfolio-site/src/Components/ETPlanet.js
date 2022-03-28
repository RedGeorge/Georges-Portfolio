import '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import earthTexture from './Styles/Textures/earthTexture.jpg';

export default function PSPlanet(){
    const eTPlanet = useLoader(THREE.TextureLoader, earthTexture);
    return(
        <mesh position={[-30, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [1.2, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={eTPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}