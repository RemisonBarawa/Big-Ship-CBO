'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BookOpen, Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'Mangrove Restoration Success Story',
    excerpt: 'How community-led initiatives are bringing back coastal ecosystems in Mombasa County.',
    author: 'Big Ship Team',
    date: '2024-01-15',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    title: 'RECO Project: Transforming Waste into Opportunity',
    excerpt: 'A comprehensive look at how our waste management program is creating jobs and protecting the environment.',
    author: 'Big Ship Team',
    date: '2024-01-10',
    category: 'Waste Management',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 3,
    title: 'Youth Empowerment Through VIMP',
    excerpt: 'Stories from our mentorship program participants and how it\'s shaping careers.',
    author: 'Big Ship Team',
    date: '2024-01-05',
    category: 'Empowerment',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: 4,
    title: '#BringBackTudorCreek: One Year Later',
    excerpt: 'Reflecting on the progress made in our flagship campaign to restore Tudor Creek.',
    author: 'Big Ship Team',
    date: '2023-12-20',
    category: 'Campaigns',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    color: 'from-ocean-500 to-primary-600',
  },
  {
    id: 5,
    title: 'Smart Farming: Building Food Security',
    excerpt: 'How sustainable agriculture practices are helping farmers adapt to climate change.',
    author: 'Big Ship Team',
    date: '2023-12-15',
    category: 'Agriculture',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    color: 'from-green-500 to-primary-600',
  },
  {
    id: 6,
    title: 'Community Partnerships: The Key to Success',
    excerpt: 'Exploring how partnerships with local communities drive our conservation efforts.',
    author: 'Big Ship Team',
    date: '2023-12-10',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
    color: 'from-purple-500 to-blue-600',
  },
]

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Blog"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 via-blue-800/60 to-transparent" />
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
              <BookOpen className="w-20 h-20 mx-auto text-blue-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Stories, updates, and insights from our work in Mombasa County
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r ${post.color} text-white text-sm font-semibold rounded-full`}>
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-ocean-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-ocean-600 font-semibold group-hover:text-ocean-700"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}








