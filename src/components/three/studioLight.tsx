import { Environment, Lightformer, } from '@react-three/drei'
import React from 'react'

function StudioLight() {
  return (
    <group name='light'>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form={'rect'}
            intensity={10}
            position={[-10,5,5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />

          <Lightformer
            form={'rect'}
            intensity={10}
            position={[10,5,5]}
            scale={10}
            rotation-y={Math.PI / 2}
          />

          <Lightformer
            form={'rect'}
            intensity={5}
            position={[0,-5,10]}
            scale={5}
            rotation-y={Math.PI / 1}
          />
        </group>
      </Environment>

      <spotLight 
      position={[-2,10,5]}
      angle={0.15}
      decay={0.1}
      intensity={Math.PI * 0.2}
      />
      <spotLight 
      position={[0,-25,10]}
      angle={0.15}
      decay={0}
      intensity={Math.PI * 0.2}
      />
      <spotLight 
      position={[0,20,5]}
      angle={0.15}
      decay={0}
      intensity={Math.PI * 0.2}
      />
    </group>
  )
}

export default StudioLight
