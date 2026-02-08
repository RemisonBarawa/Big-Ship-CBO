'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Waves, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Optional: if you want to disable animations for reduced motion users
// import { useReducedMotion } from 'framer-motion'
// const shouldReduceMotion = useReducedMotion()

// Variants for main content stagger
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 120]) // slightly reduced parallax for mobile feel
  const opacity = useTransform(scrollY, [0, 350], [1, 0.1])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      {/* Organic background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-br from-primary-400/25 to-primary-600/15 dark:from-primary-500/15 dark:to-primary-700/10 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.12, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-ocean-400/25 to-ocean-600/15 dark:from-ocean-500/15 dark:to-ocean-700/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 70, 0],
            scale: [1, 1.18, 1],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* third blob unchanged or removed if too heavy */}
      </div>

      {/* Hero Image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-transparent/20 z-10" />
          <Image
            src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770546668/hero_background_oeeabr.jpg" // ← fixed typo if intentional
            alt="Mangrove forest and coastal conservation efforts in Mombasa, Kenya"
            fill
            className="object-cover brightness-[0.85] dark:brightness-[0.6] opacity-30 dark:opacity-20"
            priority
            quality={85}
          />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24 text-center"
      >
        <motion.div variants={childVariants}>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 180, damping: 14 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 mb-10 glass-card dark:glass-dark rounded-full border border-primary-500/25 shadow-glass"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            </motion.div>
            <span className="text-sm font-semibold gradient-text dark:gradient-text-light">
              Protecting Our Coast Since 2009
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 leading-tight tracking-tight">
            <motion.span
              className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-ocean-400 to-primary-600"
              variants={childVariants}
            >
              Big Ship
            </motion.span>
            <motion.span className="block text-foreground mt-1" variants={childVariants}>
              Organization
            </motion.span>
          </h1>

          <motion.p
            variants={childVariants}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/75 dark:text-foreground/85 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Promoting sustainable development by empowering local communities in environmental conservation in Mikindani Ward, Mombasa County, Kenya
          </motion.p>

          <motion.div variants={childVariants} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button asChild size="lg" className="group relative overflow-hidden rounded-full px-8 py-7 text-base">
              <Link href="/about">
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600 to-ocean-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline" // or custom "glass" if you have it
              size="lg"
              className="rounded-full px-8 py-7 text-base backdrop-blur-sm border-primary/30 hover:bg-primary/10"
            >
              <Link href="/donate" className="flex items-center">
                <Waves className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Support Our Mission
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="w-10 h-16 rounded-full border-2 border-foreground/30 glass dark:glass-dark flex justify-center pt-3 backdrop-blur-md">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-6 bg-gradient-to-b from-primary-500 to-ocean-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}