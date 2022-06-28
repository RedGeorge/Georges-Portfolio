import '@react-three/fiber';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import sunTexture from '../Styles/Textures/sunTexture.jpg';

export default function Sun(){
    const texture = useLoader(THREE.TextureLoader, sunTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.y -= 0.0001;
    }); /* ref and useFrame lines are to create a reference and then allow the sun to spin every frame.*/

    return(
        <mesh ref={ref} position={[30, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
            <sphereGeometry args={ [15, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
            <meshStandardMaterial map={texture} />{/*Sets material type from three.js and the colour of the surface of the shape.*/}
        </mesh>
    )
}