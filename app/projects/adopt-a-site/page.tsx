'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TreePine, Users, Target, Heart, ArrowRight, MapPin, Calendar, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Users,
    title: 'Community Partnerships',
    description: 'Meaningful partnerships between forest communities and stakeholders',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: TreePine,
    title: 'Forest Conservation',
    description: 'Sustainable conservation practices for forest ecosystems',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Target,
    title: 'Stakeholder Engagement',
    description: 'Multi-stakeholder approach to conservation',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Heart,
    title: 'Long-term Impact',
    description: 'Creating lasting change through sustainable partnerships',
    color: 'from-red-500 to-orange-600',
  },
]

export default function AdoptASite() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-600 via-primary-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80"
            alt="Adopt A Site"
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
              <TreePine className="w-20 h-20 mx-auto text-primary-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary-100 to-green-100 bg-clip-text text-transparent">
              Adopt A Site
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              People-centered program promoting sustainable forest conservation partnerships
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
                alt="Forest conservation"
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
                Project Overview
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Forest Conservation Partnerships
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Adopt A Site is a people-centered program where meaningful partnerships are made 
                between forest communities and stakeholders towards promoting sustainable conservation. 
                This initiative creates a collaborative framework for protecting and restoring 
                forest ecosystems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through this program, communities, organizations, and individuals can "adopt" 
                specific forest sites, committing to their long-term conservation and restoration. 
                This approach ensures local ownership and sustainable management of forest resources.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              What makes Adopt A Site unique
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Site Identification', description: 'Identify forest sites in need of conservation and restoration' },
              { step: '2', title: 'Partnership Formation', description: 'Form partnerships between communities, stakeholders, and adopters' },
              { step: '3', title: 'Conservation Planning', description: 'Develop comprehensive conservation and restoration plans' },
              { step: '4', title: 'Implementation', description: 'Execute conservation activities with community participation' },
              { step: '5', title: 'Monitoring & Evaluation', description: 'Track progress and measure impact over time' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-primary-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Adopt A Site Today</h2>
            <p className="text-xl mb-8 text-white/90">
              Join us in protecting and restoring forest ecosystems through meaningful partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Support This Project
                <Heart className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}








