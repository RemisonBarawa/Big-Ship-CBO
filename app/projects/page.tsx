'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TreePine, Recycle, Users, Target, GraduationCap, Megaphone, Waves, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
  {
    icon: TreePine,
    title: 'Adopt A Site',
    description: 'This is a people centered program where meaningful partnership is made between the forest communities, and stakeholders towards promoting sustainable conservation.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
  },
  {
    icon: Recycle,
    title: 'RECO / Resource Collection Project',
    description: 'Poor waste management in Mombasa County is an entrenched problem with long term effects on communities and their environment. This comes down to poor physical planning and lack of working recycling approaches.',
    color: 'from-ocean-500 to-ocean-600',
    bgColor: 'bg-ocean-50',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
  },
  {
    icon: Users,
    title: 'Boresha Jamii Project – Urban Resilience',
    description: 'Meanwhile Big Ship also seeks to promote empowerment of local communities, both urban and rural poor, targeting the youth, women & other marginalized groups.',
    color: 'from-primary-400 to-ocean-500',
    bgColor: 'bg-gradient-to-br from-primary-50 to-ocean-50',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
  },
  {
    icon: GraduationCap,
    title: 'VIMP Program',
    description: 'Volunteership and Internship Mentorship Program (VIMP) is a career development and mentorship program that creates an ecosystem of practitioners in different fields of practice to interact and practically build skills and knowledge.',
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
  },
  {
    icon: Waves,
    title: 'Flagship project: #BringBackTudorCreek',
    description: 'To stop poor practices that makes communities vulnerable to Climate change effects, the #BringBackTudorCreek campaign promotes multi stakeholder engagements that includes local communities, corporates and duty bearers.',
    color: 'from-ocean-500 to-primary-500',
    bgColor: 'bg-gradient-to-br from-ocean-50 to-primary-50',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    featured: true,
  },
  {
    icon: Megaphone,
    title: 'Advocacy',
    description: 'Big Ship continues to lobby state and non-state actors to provide structural and policy support to the programs related areas.',
    color: 'from-ocean-500 to-ocean-600',
    bgColor: 'bg-ocean-50',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
]

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-ocean-600 via-primary-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80"
            alt="Projects background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-800/60 to-transparent" />
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
              <Target className="w-20 h-20 mx-auto text-primary-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary-100 to-ocean-100 bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive initiatives driving positive change across Mombasa County
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-ocean-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon
              const [isHovered, setIsHovered] = useState(false)
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className={`group relative ${project.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
                >
                  <div className={`relative ${project.bgColor} rounded-3xl overflow-hidden border-2 border-transparent hover:border-ocean-300 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl`}>
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className={`absolute top-4 right-4 p-4 rounded-xl bg-gradient-to-br ${project.color} shadow-xl transform transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : 'scale-100'}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {project.featured && (
                        <span className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-ocean-500 text-white text-sm font-bold rounded-full shadow-lg backdrop-blur-sm">
                          ⭐ Flagship Project
                        </span>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-ocean-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <motion.button
                        className="inline-flex items-center text-ocean-600 font-semibold group-hover:text-ocean-700"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Project Reports Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Reports</h2>
            <p className="text-xl text-gray-600">
              Access our detailed project completion reports
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              KUZA ANNUAL PROJECT COMPLETION REPORT (2017)
            </h3>
            <p className="text-gray-600 mb-6">
              Comprehensive report detailing our project activities, achievements, and impact for the year 2017.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-ocean-600 text-white rounded-lg font-semibold hover:bg-ocean-700 transition-colors">
              Download Report
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl mb-8 text-white/90">
              Support our projects and help us create lasting change in our communities.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Support Our Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

