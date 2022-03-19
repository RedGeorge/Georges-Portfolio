import '@react-three/fiber';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import sunTexture from './Styles/Textures/sunTexture.jpg';

export default function Sun(){
    const texture = useLoader(THREE.TextureLoader, sunTexture);
    return(
        <mesh position={[30, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [15, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={texture} />{/*Sets material type from three.js and the colour of the surface of the shape.*/}
        </mesh>
    )
}