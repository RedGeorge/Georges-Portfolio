import '@react-three/fiber';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { Billboard } from '@react-three/drei';
import { useRef } from 'react';
import Text3D from './Text';
import marsTexture from './Styles/Textures/marsTexture.jpg';

export default function SkillsPlanet(){
    const skillsPlanet = useLoader(THREE.TextureLoader, marsTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.y -= 0.004;
    }); /* ref and useFrame lines are to create a reference and then allow the planet to spin every frame.*/

    return(
        <>
            <group position={[-6, -3, -10]}>
                <mesh ref={ref} position={[0, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
                    <sphereGeometry args={ [0.75, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
                    <meshStandardMaterial map= {skillsPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
                </mesh>
                <Billboard position={[0, 1.5, 0]} follow={ true } lockX={ false } lockY={ false } lockZ={ false }>
                        <Text3D text={'Personal Statement'} coordinates={[-3.2, 0, 0]} size={0.5}/>
                </Billboard>
            </group>
        </>
    )
}


