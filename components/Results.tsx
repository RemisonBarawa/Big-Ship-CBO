'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { TreePine, MapPin, Users, Target, Briefcase, Recycle } from 'lucide-react'

const stats = [
  { icon: TreePine, label: 'Mangroves Planted', value: 204766, suffix: '' },
  { icon: MapPin, label: 'Hectares Restored', value: 60.9, suffix: ' ha' },
  { icon: Users, label: 'Resource Collectors Employed', value: 103, suffix: '' },
  { icon: Recycle, label: 'Plastic Recycled', value: 28, suffix: ' tonnes' },
  { icon: Briefcase, label: 'Employment Created', value: 103, suffix: '' },
  { icon: Target, label: 'Community Impact', value: 1000, suffix: '+' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            const duration = 2000
            const steps = 60
            const increment = value / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= value) {
                setCount(value)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [value, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Results() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-ocean-600 to-primary-700 dark:from-primary-800 dark:via-ocean-800 dark:to-primary-900">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 blob"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 20, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-white/5 blob-2"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              rotate: [0, -20, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2.5 glass-card dark:glass-dark rounded-full text-sm font-semibold mb-6 border border-white/20 dark:border-white/10 text-white"
          >
            Impact Metrics
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
            Results Highlights
          </h2>
          <p className="text-xl text-white/90 dark:text-white/80 max-w-3xl mx-auto">
            Our impact in numbers - transforming communities and environments
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.3, rotateX: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -8, rotateY: 5 }}
                className="group relative perspective-1000"
              >
                <div className="glass-card dark:glass-dark rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:border-white/40 transition-all duration-500 hover:shadow-glass-lg backdrop-blur-xl">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-primary-400 via-primary-500 to-ocean-500 mb-4 shadow-lg"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl md:text-4xl font-extrabold mb-2 text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base text-white/80 dark:text-white/70 font-medium">
                    {stat.label}
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary-400/50 to-ocean-400/50 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    style={{ zIndex: -1 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

