import '@react-three/fiber';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useRef } from 'react';
import { Billboard } from '@react-three/drei';
import saturnPlanetTexture from '../Styles/Textures/saturnPlanetTexture.jpg';
import saturnRingTexture from '../Styles/Textures/saturnRingTexture.png';
import Text3D from '../HomePage/Text';

export default function ETPlanet(){
    const eTPlanet = useLoader(THREE.TextureLoader, saturnPlanetTexture);
    const eTPlanetRing = useLoader(THREE.TextureLoader, saturnRingTexture);
    const ref = useRef(null);
    const planetRef = useRef(null);
    useFrame(() => {
        ref.current.rotation.z += 0.01;
        planetRef.current.rotation.y -= 0.005;
    }); /* ref and useFrame lines are to create a reference and then allow the saturn ring to spin every frame.*/

    return(
        <>  
            <group position={[-18, -5, -4]}>
              <mesh ref={planetRef} position={[0, 0, 0]}>{/* Creates shape and sets position using x, y, z co-ordinates.*/}
                  <sphereGeometry args={ [0.85, 32, 32] } />{/*Sets shape as a sphere using three.js and specifies dimensions.*/}
                  <meshStandardMaterial map={eTPlanet} />{/*Sets material type from three.js and maps the texture image to surface of the shape.*/}
              </mesh>
              <mesh position={[0, 0, 0]} rotation={[-1.3, 0, 0]} ref={ref} castShadow visible>{/* Creates shape and sets position using x, y, z co-ordinates. Also makes ring more horizontal and cast a shadow.*/}
                  <ringBufferGeometry args={ [1.1, 1.5, 64] } />
                  <meshStandardMaterial map={eTPlanetRing} side={THREE.DoubleSide} transparent={true} opacity={1} />
              </mesh>
              <Billboard position={[0, 1, 0]} follow={ true } lockX={ false } lockY={ false } lockZ={ false }>
                <Text3D text={'Experience Timeline'} coordinates={[-3, 0.6, 0]} size={0.5}/>
              </Billboard>
            </group>
        </>
    )
}

/* Saturn ring URL: https://www.pngaaa.com/detail/3951197 */