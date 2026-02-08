'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { TreePine, Recycle, Users, ArrowRight } from 'lucide-react'
import { useState, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const programs = [
  {
    icon: TreePine,
    title: 'Environment',
    description: 'Between the mid-1980s to 2009, up to 450 hectares of mangrove cover in Kenya was reportedly lost every year. Presently it is estimated that 40% of the remaining mangrove areas in the country are degraded.',
    gradient: 'from-primary-500 via-primary-600 to-emerald-600',
    glow: 'shadow-glow',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
  },
  {
    icon: Recycle,
    title: 'Waste Management',
    description: 'We have a passion for a clean neighborhood. Since inception, we have been involved in waste management activities from waste collection, resource recovery, and advocacy for a clean environment.',
    gradient: 'from-ocean-500 via-ocean-600 to-cyan-600',
    glow: 'shadow-glow-blue',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  },
  {
    icon: Users,
    title: 'Empowerment',
    description: 'Big Ship is the steward in promoting local ownership of the environmental agenda. We do this by developing Environment Ambassadors to propel environmental campaigns in future.',
    gradient: 'from-primary-400 via-ocean-500 to-primary-500',
    glow: 'shadow-glow',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  },
]

function ProgramCard({ program, index }: { program: typeof programs[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const Icon = program.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="group perspective-1000"
    >
      <Card className="relative h-full glass-card dark:glass-dark border-0 overflow-hidden cursor-pointer">
        {/* Gradient overlay */}
        <motion.div
          className={cn('absolute inset-0 bg-gradient-to-br', program.gradient, 'opacity-0 group-hover:opacity-10 transition-opacity duration-500')}
        />
        
        {/* Image with parallax effect */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-full h-full"
          >
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
          </motion.div>
          
          {/* Icon badge with 3D effect */}
          <motion.div
            animate={isHovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={cn('absolute top-6 right-6 p-4 rounded-2xl bg-gradient-to-br', program.gradient, 'shadow-lg backdrop-blur-sm')}
            style={{ transform: 'translateZ(50px)' }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <CardContent className="p-8 relative" style={{ transform: 'translateZ(20px)' }}>
          <motion.h3
            animate={isHovered ? { x: 5 } : { x: 0 }}
            className="text-2xl font-bold mb-4 gradient-text dark:gradient-text-light"
          >
            {program.title}
          </motion.h3>
          <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed mb-6 text-sm">
            {program.description}
          </p>
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold cursor-pointer"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </CardContent>

        {/* Glow effect on hover */}
        <motion.div
          className={cn('absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500', program.gradient)}
          style={{ zIndex: -1 }}
        />
      </Card>
    </motion.div>
  )
}

export default function Programs() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-primary-300/10 dark:bg-primary-500/5 blob"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-ocean-300/10 dark:bg-ocean-500/5 blob-2"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
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
            className="inline-block px-5 py-2.5 glass-card dark:glass-dark rounded-full text-sm font-semibold mb-6 border border-primary-500/20 dark:border-primary-400/20"
          >
            <span className="gradient-text dark:gradient-text-light">Our Impact</span>
          </motion.span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="gradient-text dark:gradient-text-light">Our Programs</span>
          </h2>
          <p className="text-xl text-foreground/70 dark:text-foreground/80 max-w-3xl mx-auto">
            Comprehensive initiatives driving positive change in our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <ProgramCard key={program.title} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

