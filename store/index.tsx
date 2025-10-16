'use client'

import { create } from "zustand";

const useMackbookStore = create((set): {color: string, scale: number, texture: string, setColor: (value: string) => void, setScale: (value: number) => void, setTexture: (value: string) => void, reset: () => void} => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({color}),
    scale: 0.08,
    setScale: (scale: number) => set({scale}),
    texture: '/videos/feature-1.mp4',
    setTexture: (texture: string) => set({texture}),
    reset: () => set({color: '#2e2c2e', scale: 0.08})
}))

export default useMackbookStore