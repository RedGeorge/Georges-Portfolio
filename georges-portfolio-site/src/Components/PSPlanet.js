import '@react-three/fiber';

export default function PSPlanet(){
    return(
        <mesh position={[-10, 0, 0]}>
            <sphereGeometry args={ [1, 32, 32] } />
            <meshStandardMaterial color= {'#B64A4A'} />
        </mesh>
    )
}