"use client"

import { forwardRef, useImperativeHandle, useRef, useCallback, useEffect, useState } from "react"
import { motion, useAnimate } from "motion/react"

type AnimatedIconProps = {
  size?: number
  color?: string
  strokeWidth?: number
  animateOnHover?: boolean
  autoPlay?: boolean
  loop?: boolean
  duration?: number
  className?: string
  brandColor?: string | boolean
}

type AnimatedIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

import type { AnimationOptions } from "motion/react"

export const GitHubIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, animateOnHover = true, autoPlay = false, loop = true, duration, className = "", brandColor = true }, ref) => {
    const [scope, animate] = useAnimate()
    const controls = useRef<Array<ReturnType<typeof animate>>>([])
    const hasBrand = brandColor !== false
    const brandValue = typeof brandColor === "string" ? brandColor : hasBrand ? "#dfdfdf" : undefined

    type AnimDef = { selector: string; keyframes: Record<string, number[]>; options: { duration: number; ease: string | number[]; repeat: number; delay?: number } }

    const anims: AnimDef[] = [
      { selector: ".gh-body", keyframes: { scale: [1, 1.015, 1], y: [0, -0.6, 0] }, options: { duration: 2.2, ease: "easeInOut", repeat: Infinity } },
      { selector: ".gh-ears", keyframes: { rotate: [0, -4, 0, 4, 0], y: [0, -0.3, 0] }, options: { duration: 1.9, ease: "easeInOut", repeat: Infinity, delay: 0.1 } },
      { selector: ".gh-tail", keyframes: { rotate: [0, 8, -2, 0], x: [0, 0.35, 0] }, options: { duration: 0.9, ease: "easeInOut", repeat: Infinity, delay: 0.25 } },
      { selector: ".gh-body", keyframes: { strokeWidth: [1.5, 1.7, 1.5] }, options: { duration: 2.4, ease: "easeInOut", repeat: Infinity, delay: 0.9 } },
    ]

    const start = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []
      for (const anim of anims) {
        const opts = { ...anim.options, ...(duration ? { duration } : {}), ...(!loop ? { repeat: 0 } : {}) } as AnimationOptions
        const ctrl = animate(anim.selector, anim.keyframes, opts)
        controls.current.push(ctrl)
      }
    }, [animate, loop, duration])

    const stop = useCallback(async () => {
      controls.current.forEach((c) => c.stop())
      controls.current = []
      for (const anim of anims) {
        const reset: Record<string, number> = {}
        for (const [key, vals] of Object.entries(anim.keyframes)) { reset[key] = vals[0] }
        animate(anim.selector, reset, { duration: 0.25 })
      }
    }, [animate])

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }))
    useEffect(() => { if (autoPlay) { start(); return () => { stop() } } }, [autoPlay, start, stop])

    return (
      <motion.svg ref={scope}
        onHoverStart={animateOnHover ? () => { start() } : undefined}
        onHoverEnd={animateOnHover ? () => { stop() } : undefined}
        xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={brandValue || color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} style={{ transition: "stroke 0.2s ease" }}
      >
        <motion.path className="gh-body" d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" style={{ transformOrigin: "12px 12px" }} />
        <motion.g className="gh-ears" style={{ transformOrigin: "12px 12px" }}>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3" />
          <path d="M12 22v-3.5" />
        </motion.g>
        <motion.path className="gh-tail" d="M12 22v-3.5c0 -1 .1 -1.4 -.5 -2" style={{ transformOrigin: "12px 22px" }} />
      </motion.svg>
    )
  },
)
GitHubIcon.displayName = "GitHubIcon"
