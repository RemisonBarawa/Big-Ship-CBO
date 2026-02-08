'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Waves, Target, Users, Heart, ArrowRight, TreePine, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const objectives = [
  {
    icon: Waves,
    title: 'Ecosystem Restoration',
    description: 'Restoring the health and biodiversity of Tudor Creek',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Users,
    title: 'Multi-Stakeholder Engagement',
    description: 'Bringing together communities, corporates, and duty bearers',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Climate Resilience',
    description: 'Reducing vulnerability to climate change effects',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Target,
    title: 'Sustainable Practices',
    description: 'Promoting practices that protect the environment',
    color: 'from-orange-500 to-red-600',
  },
]

export default function BringBackTudorCreek() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-ocean-600 via-primary-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
            alt="#BringBackTudorCreek"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-primary-800/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Waves className="w-20 h-20 mx-auto text-primary-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary-100 to-ocean-100 bg-clip-text text-transparent">
              #BringBackTudorCreek
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Flagship Campaign - Restoring Tudor Creek for future generations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-ocean-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Tudor Creek"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-ocean-100 to-primary-100 rounded-full text-ocean-700 font-semibold mb-4">
                Flagship Campaign
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Restoring Tudor Creek
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To stop poor practices that make communities vulnerable to climate change effects, 
                the #BringBackTudorCreek campaign promotes multi-stakeholder engagements that 
                include local communities, corporates, and duty bearers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This flagship campaign aims to restore the health and biodiversity of Tudor Creek, 
                a critical coastal ecosystem in Mombasa County, while building community resilience 
                to climate change.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campaign Objectives</h2>
            <p className="text-xl text-gray-600">
              Our goals for restoring Tudor Creek
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <motion.div
                  key={objective.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${objective.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{objective.title}</h3>
                  <p className="text-gray-600">{objective.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campaign Impact</h2>
            <p className="text-xl text-gray-600">
              Making a difference for Tudor Creek
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: 'Mangroves Planted', value: '30K+', icon: TreePine },
              { metric: 'Stakeholders Engaged', value: '50+', icon: Users },
              { metric: 'Hectares Restored', value: '100+', icon: Target },
              { metric: 'Communities Reached', value: '15+', icon: Heart },
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.metric}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-ocean-500 to-primary-500 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.metric}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join the Campaign</h2>
            <p className="text-xl mb-8 text-white/90">
              Help us bring back Tudor Creek and protect our coastal ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Support the Campaign
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Involved
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}








