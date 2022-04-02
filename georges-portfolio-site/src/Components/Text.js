import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import Montserrat from '../Montserrat Medium_Regular.json';

extend({ TextGeometry })

export default function Text3D({text, coordinates, size}){
  const font = new FontLoader().parse(Montserrat);

  return (
    <mesh position={coordinates} visible>
      <textGeometry attach='geometry'args={[text, {font, size, height: 0.1}]} />
      <meshStandardMaterial attach='material' color="white" />
     </mesh>
  )};