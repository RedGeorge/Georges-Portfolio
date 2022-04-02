import '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import { Billboard } from '@react-three/drei';
import Text3D from './Text';
import mercuryTexture from './Styles/Textures/mercuryTexture.jpg';

export default function PSPlanet(){
    const pSPlanet = useLoader(THREE.TextureLoader, mercuryTexture);
    const ref = useRef(null);
    useFrame(() => {
        ref.current.rotation.y += 0.01;
    }); /* ref and useFrame lines are to create a reference and then allow the planet to spin every frame.*/

    return(
        <>  
            <group position={[4, 2, 0]}>
              <mesh ref={ref} position={[0, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
                  <sphereGeometry args={ [0.5, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
                  <meshStandardMaterial map={pSPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
              </mesh>
              <Billboard position={[0, 1, 0]} follow={ true } lockX={ false } lockY={ false } lockZ={ false }>
                <Text3D text={'Skills'} coordinates={[-0.7, 0, 0]} size={0.4}/>
              </Billboard>
            </group>
        </>
    )
}


