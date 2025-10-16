/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef } from 'react'
import { performanceImages, performanceImgPositions } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Performance() {
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    const performanceRef = useRef(null)
    
    useGSAP(() => {

        gsap.fromTo('.content p', {
            opacity: 0,
            y: 10
        },
            {
                opacity: 1,
                y: 0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.content',
                    start: 'top bottom',
                    end: 'top center',
                    scrub: true,
                    invalidateOnRefresh: true
                }
            }
        )

        if (isMobile) return

        const timeline = gsap.timeline({
            defaults: { ease: 'power2.inOut', duration: 2, overwrite: 'auto' },
            scrollTrigger: {
                trigger: performanceRef.current,
                start: 'top top',
                end: 'center center',
                scrub: true,
                invalidateOnRefresh: true,
            }
        })

        performanceImgPositions.forEach(({ id, left, right, bottom }) => {
            if(id === 'p5') return

            const toVars: { bottom: string, left?: string, right?: string, } = { bottom: `${bottom}%` }
            if (left) toVars.left = `${left}%`
            if (right) toVars.right = `${right}%`

            timeline.to(`.${id}`, toVars, 0)
        })
    }, { scope: '#performance', dependencies: [isMobile] })


    return (
        <section id='performance' ref={performanceRef}>
            <h2>Next-level graphics performance. Game on.</h2>

            <div className='wrapper'>
                {performanceImages.map(({ id, src }) => (
                    <img className={id} key={id} src={src} alt={id} />
                ))}
            </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images faster,
                    so <span className='text-white'>gaming feels more immersive and realistic than ever.</span>

                    And Dynamic Caching optimizes fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}

export default Performance
