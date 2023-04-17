import { useEffect, useState, Suspense} from 'react'
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
const computer = useGLTF('./macbook/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor = 'black' />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
      <primitive
      object={computer.scene}
      scale={isMobile ? 13 : 15}
      position={isMobile ? [0,-3.25,-2.2] : [0,-3.5,-1.5]}
      roation={[-0.1, -0.2, -.01]}/>
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [ isMobile, setIsMobile] =useState(false);
useEffect( () => {
  const mediaQuery = window.matchMedia('(max-width: 470px)');
  setIsMobile(mediaQuery.matches);
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches)
  }
  mediaQuery.addEventListener('change', handleMediaQueryChange)
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }
}, [])

  return (
  <Canvas frameloop='demand'
  shadows
  camera={{position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
<Suspense fallback={<CanvasLoader />} >
  <OrbitControls
   enableZoom={false}
   maxPolarAngle={Math.PI / 2}
  //  minPolarAngle={Math.PI / 2}
   />
   <Computers isMobile={isMobile}/>
</Suspense>
<Preload all />
  </Canvas>
  )
}

export default ComputerCanvas
