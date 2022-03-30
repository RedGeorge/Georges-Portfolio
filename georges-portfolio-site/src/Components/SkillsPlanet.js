import '@react-three/fiber';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import marsTexture from './Styles/Textures/marsTexture.jpg';

export default function SkillsPlanet(){
    const skillsPlanet = useLoader(THREE.TextureLoader, marsTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.y -= 0.004;
    }); /* ref and useFrame lines are to create a reference and then allow the planet to spin every frame.*/

    return(
        <mesh ref={ref} position={[-5, 5, -10]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [0.75, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map= {skillsPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}


