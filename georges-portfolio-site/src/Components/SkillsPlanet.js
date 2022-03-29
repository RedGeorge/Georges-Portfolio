import '@react-three/fiber';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import marsTexture from './Styles/Textures/marsTexture.jpg';

export default function SkillsPlanet(){
    const skillsPlanet = useLoader(THREE.TextureLoader, marsTexture);
    return(
        <mesh position={[-5, 5, -10]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [0.75, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map= {skillsPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}


