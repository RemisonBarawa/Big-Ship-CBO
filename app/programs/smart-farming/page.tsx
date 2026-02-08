'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sprout, Droplets, Sun, TrendingUp, ArrowRight, Users, Target, Leaf } from 'lucide-react'
import Link from 'next/link'

const practices = [
  {
    icon: Sprout,
    title: 'Sustainable Agriculture',
    description: 'Promoting eco-friendly farming methods that protect soil and water resources',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Implementing efficient irrigation and water management techniques',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Sun,
    title: 'Climate Resilience',
    description: 'Adapting farming practices to changing climate conditions',
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-50',
  },
  {
    icon: Users,
    title: 'Farmer Training',
    description: 'Educating farmers on modern, sustainable agricultural practices',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
  },
]

const results = [
  { metric: 'Farmers Trained', value: '300+', icon: Users },
  { metric: 'Acres Under Management', value: '500+', icon: Target },
  { metric: 'Yield Increase', value: '40%', icon: TrendingUp },
  { metric: 'Water Saved', value: '30%', icon: Droplets },
]

export default function SmartFarmingProgram() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
            alt="Smart farming"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-emerald-800/60 to-transparent" />
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
              <Sprout className="w-20 h-20 mx-auto text-emerald-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-emerald-100 to-green-100 bg-clip-text text-transparent">
              Smart Farming Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Sustainable agriculture practices for food security and environmental protection
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
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-green-700 font-semibold mb-4">
                Our Vision
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Sustainable Agriculture for All
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Smart Farming Program promotes sustainable agriculture practices that enhance 
                food security while protecting the environment. We work with farmers to implement 
                modern techniques that increase productivity, conserve resources, and build 
                resilience to climate change.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through training, technical support, and access to resources, we help farmers 
                transition to sustainable farming methods that benefit both their livelihoods 
                and the environment.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
                alt="Sustainable farming"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practices Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Practices</h2>
            <p className="text-xl text-gray-600">
              Modern sustainable farming techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((practice, index) => {
              const Icon = practice.icon
              return (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${practice.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${practice.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Results</h2>
            <p className="text-xl text-gray-600">
              Measurable impact on farming communities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => {
              const Icon = result.icon
              return (
                <motion.div
                  key={result.metric}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2">{result.value}</div>
                  <div className="text-gray-600 font-medium">{result.metric}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Support Sustainable Farming</h2>
            <p className="text-xl mb-8 text-white/90">
              Help us promote sustainable agriculture and food security.
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








