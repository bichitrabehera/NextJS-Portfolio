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

export const LinkedInIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, animateOnHover = true, autoPlay = false, loop = true, duration, className = "", brandColor = true }, ref) => {
    const [scope, animate] = useAnimate()
    const controls = useRef<Array<ReturnType<typeof animate>>>([])
    const hasBrand = brandColor !== false
    const brandValue = typeof brandColor === "string" ? brandColor : hasBrand ? "#0A66C2" : undefined

    type AnimDef = { selector: string; keyframes: Record<string, number[]>; options: { duration: number; ease: string | number[]; repeat: number; delay?: number } }

    const anims: AnimDef[] = [
      { selector: ".li-box", keyframes: { scale: [1, 1.01, 1], rotate: [0, 0.25, 0] }, options: { duration: 2.4, ease: "easeInOut", repeat: Infinity, delay: 1.4 } },
      { selector: ".li-line-i", keyframes: { scaleY: [1, 1.08, 1], y: [0, -0.4, 0] }, options: { duration: 2.1, ease: [0.4, 0, 0.2, 1], repeat: Infinity } },
      { selector: ".li-dot", keyframes: { scale: [1, 1.2, 1], y: [0, -0.25, 0] }, options: { duration: 2.3, ease: [0.34, 1.56, 0.64, 1], repeat: Infinity, delay: 0.85 } },
      { selector: ".li-line-n1", keyframes: { y: [0, -1.1, 0], scaleY: [1, 1.06, 1] }, options: { duration: 1.9, ease: [0.34, 1.56, 0.64, 1], repeat: Infinity, delay: 0.5 } },
      { selector: ".li-arc-n", keyframes: { rotate: [0, 2.5, 0], x: [0, 0.35, 0] }, options: { duration: 2.6, ease: [0.34, 1.56, 0.64, 1], repeat: Infinity, delay: 0.25 } },
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
        <motion.path className="li-box" d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" style={{ transformOrigin: "12px 12px" }} />
        <motion.path className="li-line-i" d="M8 11v5" style={{ transformOrigin: "8px 13.5px" }} />
        <motion.path className="li-dot" d="M8 8v.01" style={{ transformOrigin: "8px 8px" }} />
        <motion.path className="li-line-n1" d="M12 16v-5" style={{ transformOrigin: "12px 13px" }} />
        <motion.path className="li-arc-n" d="M16 16v-3a2 2 0 1 0 -4 0" style={{ transformOrigin: "14px 15px" }} />
      </motion.svg>
    )
  },
)
LinkedInIcon.displayName = "LinkedInIcon"
