'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Recycle, Trash2, ArrowRight, TrendingUp, Users, Target, Leaf } from 'lucide-react'
import Link from 'next/link'

const components = [
  {
    icon: Recycle,
    title: 'Resource Collection (RECO)',
    description: 'Systematic collection and sorting of recyclable materials from communities',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Trash2,
    title: 'Waste Segregation',
    description: 'Educating communities on proper waste separation and management',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Users,
    title: 'Community Training',
    description: 'Empowering residents with knowledge and skills for sustainable waste practices',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Target,
    title: 'Circular Economy',
    description: 'Creating value from waste through recycling and upcycling initiatives',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
  },
]

const achievements = [
  { metric: 'Tons Recycled', value: '500+', icon: Recycle },
  { metric: 'Communities Reached', value: '20+', icon: Users },
  { metric: 'Jobs Created', value: '50+', icon: TrendingUp },
  { metric: 'Waste Diverted', value: '80%', icon: Leaf },
]

export default function WasteManagementProgram() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 via-cyan-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80"
            alt="Waste management"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-transparent" />
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
              <Recycle className="w-20 h-20 mx-auto text-cyan-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Waste Management Program
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              RECO & Resource Recovery - Transforming waste into opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 font-semibold mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Addressing Waste Management Challenges
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Poor waste management in Mombasa County is an entrenched problem with long-term 
                effects on communities and their environment. This comes down to poor physical 
                planning and lack of working recycling approaches.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Waste Management Program, through the RECO (Resource Collection) project, 
                addresses these challenges by creating sustainable waste collection and recycling 
                systems that benefit both the environment and local communities.
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
                src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80"
                alt="Recycling"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Components Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Components</h2>
            <p className="text-xl text-gray-600">
              Comprehensive waste management solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {components.map((component, index) => {
              const Icon = component.icon
              return (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${component.bgColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${component.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h3>
                  <p className="text-gray-600">{component.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">
              Making a measurable difference in waste management
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.metric}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 mb-2">{achievement.value}</div>
                  <div className="text-gray-600 font-medium">{achievement.metric}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Support Waste Management</h2>
            <p className="text-xl mb-8 text-white/90">
              Help us create a cleaner, more sustainable Mombasa County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Support This Program
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/projects/reco"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Learn About RECO
                <Recycle className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}








