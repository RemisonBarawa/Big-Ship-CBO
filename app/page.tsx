'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TreePine, Recycle, Users, Target, TrendingUp } from 'lucide-react'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import Results from '@/components/Results'
import Partners from '@/components/Partners'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Programs />
      <Results />
      <Partners />
    </div>
  )
}



