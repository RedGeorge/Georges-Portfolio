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
    }); /* ref and useFrame lines are to create a reference and then allow the saturn ring to spin every frame.*/

    return(
        <>
            <mesh position={[-15, -2, 4]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
                <sphereGeometry args={ [0.85, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
                <meshStandardMaterial map={eTPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
            </mesh>
            <mesh position={[-15, -2, 4]} rotation={[1.3, 0, 0]} ref={ref} castShadow visible>{/* Creates shape and sets position using x, y, z co-ordinates. Also makes ring more horizontal and cast a shadow.*/}
                <ringBufferGeometry args={ [1.25, 1.5, 32] } />
                <meshStandardMaterial map={eTPlanetRing} side={THREE.DoubleSide} transparent={true} />
            </mesh>
            
        </>
    )
}

/*const geometry = new THREE.RingBufferGeometry(3, 5, 64);
var pos = geometry.attributes.position;
var v3 = new THREE.Vector3();
for (let i = 0; i < pos.count; i++){
    v3.fromBufferAttribute(pos, i);
    geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
}*/ 