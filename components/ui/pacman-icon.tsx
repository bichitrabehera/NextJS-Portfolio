"use client"

import { forwardRef, useImperativeHandle, useRef, useCallback, useEffect } from "react"
import { motion, useAnimate } from "motion/react"
import type { AnimatedIconProps, AnimatedIconHandle } from "./types"
import type { AnimationOptions } from "motion/react"

export const PacmanIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  ({ size = 24, color = "currentColor", strokeWidth = 2, animateOnHover = false, autoPlay = true, loop = true, duration, className = "" }, ref) => {
    const [scope, animate] = useAnimate()
    const controls = useRef<Array<ReturnType<typeof animate>>>([])
    const isHovering = useRef(false)

    type AnimDef = {
      selector: string
      keyframes: Record<string, number[]>
      options: { duration: number; ease: string | number[]; repeat: number; delay?: number }
    }

    const anims: AnimDef[] = [
      { selector: ".pac-mouth-u", keyframes: { rotate: [0, -8, 0, -8, 0] }, options: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], repeat: Infinity } },
      { selector: ".pac-mouth-l", keyframes: { rotate: [0, 8, 0, 8, 0] }, options: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1], repeat: Infinity } },
      { selector: ".pac-body", keyframes: { y: [0, -1, 0] }, options: { duration: 0.8, ease: "easeInOut", repeat: Infinity, delay: 0.15 } },
      { selector: ".pac-eye", keyframes: { scaleY: [1, 1, 0.2, 0.2, 1] }, options: { duration: 2.4, ease: "easeInOut", repeat: Infinity } },
      { selector: ".pac-dot", keyframes: { x: [4, -8], y: [0, -0.15, 0] }, options: { duration: 1.2, ease: "linear", repeat: Infinity, delay: 0.3 } },
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
      const resets: [string, Record<string, number>][] = [
        [".pac-mouth-u", { rotate: 0 }],
        [".pac-mouth-l", { rotate: 0 }],
        [".pac-body", { y: 0 }],
        [".pac-eye", { scaleY: 1 }],
        [".pac-dot", { x: 4, y: 0 }],
      ]
      for (const [sel, val] of resets) animate(sel, val, { duration: 0.2 })
    }, [animate])

    useImperativeHandle(ref, () => ({ startAnimation: start, stopAnimation: stop }))
    useEffect(() => { if (autoPlay) { start(); return () => { stop() } } }, [autoPlay, start, stop])

    return (
      <motion.svg ref={scope}
        onHoverStart={animateOnHover ? () => { isHovering.current = true; start() } : undefined}
        onHoverEnd={animateOnHover ? () => { isHovering.current = false; stop() } : undefined}
        xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
        fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}
      >
        <motion.path className="pac-body" d="M12 5a7 7 0 1 0 6.5 10L12 12l6.5-3A7 7 0 0 0 12 5z" style={{ transformOrigin: "12px 12px" }} />
        <motion.path className="pac-mouth-u" d="M12 12 L19 9 A7 7 0 0 0 12 5 Z" style={{ transformOrigin: "12px 12px" }} />
        <motion.path className="pac-mouth-l" d="M12 12 L19 15 A7 7 0 0 1 12 5 Z" style={{ transformOrigin: "12px 12px" }} />
        <motion.circle className="pac-eye" cx="14.5" cy="9" r="1" style={{ transformOrigin: "14.5px 9px" }} />
        <motion.circle className="pac-dot" cx="20" cy="12" r="1.2" />
      </motion.svg>
    )
  },
)
PacmanIcon.displayName = "PacmanIcon"
