import '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import earthTexture from './Styles/Textures/earthTexture.jpg';

export default function OtherPlanet(){
    const otherPlanet = useLoader(THREE.TextureLoader, earthTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.y += 0.003;
    }); /* ref and useFrame lines are to create a reference and then allow the planet to spin every frame.*/

    return(
        <mesh  ref={ref} position={[-10, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [0.6, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={otherPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
        </mesh>
    )
}