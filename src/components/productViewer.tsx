/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import useMackbookStore from '../../store/index'
import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import MacbookModel14 from './models/Macbook-14'
import { OrbitControls } from '@react-three/drei'
import StudioLight from './three/studioLight'
import ModelSwitcher from './three/modelSwitcher'
import { useMediaQuery } from 'react-responsive'


function ProductViewer() {
    const { color, scale, setColor, setScale }: { color: string, scale: number, setColor: (value: string) => void, setScale: (value: number) => void } = useMackbookStore()

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    return (
        <section id='product-viewer'>
            <h2>Take a closer look.</h2>

            <div className='controls' >
                <p className='info' >Mackbook Pro | Available in 14" & 16" in Space Gray & Dark color</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div
                            onClick={() => setColor('#adb5bd')}
                            className={clsx('bg-neutral-300', color === '#adb5db' && 'active')}
                        />
                        <div
                            onClick={() => setColor('#2e2c2e')}
                            className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}
                        />
                    </div>

                    <div className='size-control'>
                        <div
                            onClick={() => setScale(0.06)}
                            className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>14"</p>
                        </div>

                        <div
                            onClick={() => setScale(0.08)}
                            className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                        >
                            <p>16"</p>
                        </div>
                    </div>

                </div>
            </div>
            <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }} >
                <StudioLight />
                <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </section>
    )
}

export default ProductViewer
