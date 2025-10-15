/* eslint-disable @next/next/no-img-element */
'use client'
import{ useEffect, useRef } from 'react'

function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2
    })
  return (
    <section id='hero'>
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy</button>

        <p>From $1599 or $133/month for 12 months</p>
    </section>
  )
}

export default Hero
