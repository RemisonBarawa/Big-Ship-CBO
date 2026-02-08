'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ship, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Variants for clean animation control
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // nice ease-out
    },
  },
}

const pulseVariants = {
  pulse: {
    scale: [1, 1.04, 1],
    y: [0, -4, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 180,
      damping: 12,
      delay: 0.8,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-ocean-950/20 dark:to-ocean-950/40 pt-20 pb-16 md:pt-24">
      {/* Subtle background overlay / optional particles or waves could go here */}
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-black/[0.03]" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon / Logo mark with entrance */}
        <motion.div
          variants={iconVariants}
          className="mx-auto mb-8 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-ocean-600 flex items-center justify-center shadow-2xl shadow-primary-900/40"
        >
          <Ship className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
        </motion.div>

        {/* Main headline with fade + subtle continuous breathing */}
        <motion.h1
          className={cn(
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight",
            "bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-ocean-400 to-primary-600",
            "pb-2"
          )}
          variants={itemVariants}
          whileInView="pulse"   // applies the gentle repeating animation after entrance
          viewport={{ once: true }}
        >
          Big Ship Organization
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-xl sm:text-2xl md:text-3xl text-foreground/80 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Transforming coastal communities through <span className="text-primary font-semibold">sustainable innovation</span>, mangrove restoration, circular economy, and youth empowerment.
        </motion.p>

        {/* Tagline / mission */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto"
        >
          From Tudor Creek to the world — one restored ecosystem, one empowered community at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 py-7 text-lg font-semibold bg-gradient-to-r from-primary-600 to-ocean-600 hover:from-primary-700 hover:to-ocean-700 shadow-lg shadow-primary-900/30 transition-all group"
          >
            <Link href="/donate">
              Support Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-7 text-lg font-semibold border-primary/40 hover:bg-primary/10 backdrop-blur-sm"
          >
            <Link href="/about">Learn Our Story</Link>
          </Button>
        </motion.div>

        {/* Optional trust signals / stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-foreground/70"
        >
          {[
            { value: '500k+', label: 'Mangroves Restored' },
            { value: '12', label: 'Active Programs' },
            { value: '3,200+', label: 'Youth Empowered' },
            { value: '8', label: 'Partners & Counting' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}