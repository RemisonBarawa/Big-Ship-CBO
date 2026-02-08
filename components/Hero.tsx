'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Waves, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Organic background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary-400/30 to-primary-600/20 dark:from-primary-500/20 dark:to-primary-700/10 blob"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-ocean-400/30 to-ocean-600/20 dark:from-ocean-500/20 dark:to-ocean-700/10 blob-2"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ filter: 'blur(80px)' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-300/20 via-ocean-300/20 to-primary-400/20 dark:from-primary-400/10 dark:via-ocean-400/10 dark:to-primary-500/10 blob-3"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ filter: 'blur(100px)' }}
        />
      </div>

      {/* Hero Image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
          <Image
            src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770546668/hero_backround_oeeabr.jpg"
            alt="Mangrove conservation"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glassmorphism badge with organic shape */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 mb-8 glass-card dark:glass-dark rounded-full border border-primary-500/20 dark:border-primary-400/20 shadow-glass"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-4 h-4 text-primary-500 dark:text-primary-400" />
            </motion.div>
            <span className="text-sm font-semibold gradient-text dark:gradient-text-light">
              Protecting Our Planet Since 2009
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-6 leading-[1.1]"
          >
            <motion.span
              className="block gradient-text dark:gradient-text-light"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Big Ship
            </motion.span>
            <motion.span
              className="block text-foreground mt-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Organization
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/70 dark:text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Promoting sustainable development by empowering local communities 
            in environmental conservation in Mikindani Ward, Mombasa County, Kenya
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              variant="default"
              size="lg"
              className="group relative overflow-hidden"
            >
              <Link href="/about">
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-ocean-700"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="glass"
              size="lg"
              className="group"
            >
              <Link href="/donate">
                <Waves className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                Support Our Mission
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with organic shape */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-10 h-16 rounded-full border-2 border-foreground/20 dark:border-foreground/30 glass dark:glass-dark flex justify-center items-start pt-3 backdrop-blur-md"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-6 bg-gradient-to-b from-primary-500 to-ocean-500 rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 glass-card dark:glass-dark rounded-3xl blur-xl opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 glass-card dark:glass-dark rounded-2xl blur-lg opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </section>
  )
}

