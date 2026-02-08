'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TreePine, Waves, Leaf, Target, ArrowRight, Users, TrendingUp, Heart } from 'lucide-react'
import Link from 'next/link'

const initiatives = [
  {
    icon: TreePine,
    title: 'Mangrove Conservation',
    description: 'Protecting and restoring critical mangrove ecosystems along the Mombasa coastline',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Waves,
    title: 'Coastal Restoration',
    description: 'Rehabilitating degraded coastal areas and marine habitats',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Leaf,
    title: 'Biodiversity Protection',
    description: 'Safeguarding native species and their natural habitats',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: 'Empowering local communities to become environmental stewards',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
  },
]

const stats = [
  { label: 'Mangroves Planted', value: '50K+', icon: TreePine },
  { label: 'Hectares Restored', value: '200+', icon: Target },
  { label: 'Communities Engaged', value: '15+', icon: Users },
  { label: 'Species Protected', value: '30+', icon: Heart },
]

export default function EnvironmentProgram() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-primary-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
            alt="Environment conservation"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-primary-800/60 to-transparent" />
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
              <TreePine className="w-20 h-20 mx-auto text-green-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-green-100 to-primary-100 bg-clip-text text-transparent">
              Environment Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Mangrove conservation and restoration for a sustainable coastal ecosystem
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-green-50/30">
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
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                alt="Mangrove conservation"
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
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-primary-100 rounded-full text-green-700 font-semibold mb-4">
                Our Focus
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Protecting Coastal Ecosystems
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Environment Program focuses on the conservation and restoration of mangrove 
                forests along the Mombasa coastline. Mangroves are critical ecosystems that provide 
                numerous benefits including coastal protection, carbon sequestration, and habitat for 
                marine life.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through community-led initiatives, we work to restore degraded mangrove areas, 
                protect existing forests, and raise awareness about the importance of these 
                vital ecosystems. Our approach combines scientific methods with traditional 
                knowledge to ensure sustainable conservation practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Initiatives</h2>
            <p className="text-xl text-gray-600">
              Comprehensive approaches to environmental conservation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${initiative.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${initiative.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Measurable results from our conservation efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500 to-primary-500 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Join Our Conservation Efforts</h2>
            <p className="text-xl mb-8 text-white/90">
              Help us protect and restore our coastal ecosystems for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Support This Program
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








