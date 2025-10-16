/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { PresentationControls } from '@react-three/drei'
import React, { useRef } from 'react'
import MacbookModel14 from '../models/Macbook-14'
import MacbookModel16 from '../models/Macbook-16'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

const fadeMeshes = (group: any, opacity: any) => {
  if (!group) return

  group.traverse((child: any) => {
    if (child.isMesh) {
      child.material.transparent = true
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
    }
  })
}

const moveGroup = (group: any, x: any) => {
  if (!group) return

  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

function ModelSwitcher({ isMobile, scale }: { isMobile: boolean, scale: number }) {
  const smallMacbookRef = useRef(null)
  const largeMacbookRef = useRef(null)

  const showLargeMacbook = scale === 0.05 || scale === 0.08

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
      moveGroup(largeMacbookRef.current, 0)

      fadeMeshes(smallMacbookRef.current, 0)
      fadeMeshes(largeMacbookRef.current, 1)
    }
    else {
      moveGroup(smallMacbookRef.current, 0)
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)

      fadeMeshes(smallMacbookRef.current, 1)
      fadeMeshes(largeMacbookRef.current, 0)
    }
  }, [scale])

  return (
    <>
      <PresentationControls azimuth={[-Infinity, Infinity]} speed={1} polar={[-Math.PI, Math.PI]} snap >
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls azimuth={[-Infinity, Infinity]} speed={1} polar={[-Math.PI, Math.PI]} snap>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>

    </>
  )
}

export default ModelSwitcher
