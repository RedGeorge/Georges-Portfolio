import '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import saturnPlanetTexture from './Styles/Textures/saturnPlanetTexture.jpg';
import saturnRingTexture from './Styles/Textures/saturnRingTexture.png';

export default function ETPlanet(){
    const eTPlanet = useLoader(THREE.TextureLoader, saturnPlanetTexture);
    const eTPlanetRing = useLoader(THREE.TextureLoader, saturnRingTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.z += 0.01;
    });

    return(
        <>
            <mesh position={[-15, -2, 4]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
                <sphereGeometry args={ [0.85, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
                <meshStandardMaterial map={eTPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
            </mesh>
            <mesh position={[-15, -2, 4]} rotation={[1.3, 0, 0]} ref={ref} castShadow visible>
                <ringBufferGeometry args={ [1, 1.25, 32] } />
                <meshStandardMaterial map={eTPlanetRing} side={THREE.DoubleSide} transparent={true} />
            </mesh>
            
        </>
    )
}