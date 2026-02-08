'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Grid3x3, Video, Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'

const galleryCategories = ['All', 'Environment', 'Community', 'Projects', 'Events']

const galleryItems = [
  {
    id: 1,
    title: 'Mangrove Planting',
    category: 'Environment',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545538/Adopt_a_Site_Restoration_ctomdv.jpg',
    type: 'image',
  },
  {
    id: 2,
    title: 'Community Meeting',
    category: 'Community',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545537/Community_f1nbe5.jpg',
    type: 'image',
  },
  {
    id: 3,
    title: 'Mangrove Resourse Centre',
    category: 'Projects',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545538/Mangrove_Resourse_Centre_ww1mft.jpg',
    type: 'image',
  },
  {
    id: 4,
    title: 'Youth Training',
    category: 'Events',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545539/Mangrove_Conservation_yr7mg5.jpg',
    type: 'image',
  },
  {
    id: 5,
    title: 'Forest Conservation',
    category: 'Environment',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Environment_s4zwwb.jpg',
    type: 'image',
  },
  {
    id: 6,
    title: 'Knowledge Sharing',
    category: 'Community',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Knowledge_Sharing_sgppbd.jpg',
    type: 'image',
  },
  {
    id: 7,
    title: 'Mangrove Tour',
    category: 'Projects',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545535/Event_lggnpw.jpg',
    type: 'image',
  },
  {
    id: 8,
    title: 'Workshop Session',
    category: 'Events',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545536/Climate_Justice_Campaign_ih9pjk.jpg',
    type: 'image',
  },
  {
    id: 9,
    title: 'Coastal Restoration',
    category: 'Environment',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545540/Environment_aox6pm.webp',
    type: 'image',
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=80"
            alt="Gallery"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/80 via-purple-800/60 to-transparent" />
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
              <Camera className="w-20 h-20 mx-auto text-purple-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Capturing moments from our work and impact in Mombasa County
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}








