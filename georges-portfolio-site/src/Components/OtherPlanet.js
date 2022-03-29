import '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import earthTexture from './Styles/Textures/earthTexture.jpg';

export default function OtherPlanet(){
    const otherPlanet = useLoader(THREE.TextureLoader, earthTexture);
    return(
        <mesh position={[-10, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [0.6, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={otherPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}