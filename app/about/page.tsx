'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Waves, Target, Users, Heart, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-ocean-600 via-primary-600 to-ocean-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
            alt="Community empowerment"
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
              <Waves className="w-20 h-20 mx-auto text-primary-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-primary-100 to-ocean-100 bg-clip-text text-transparent">
              About Big Ship Organization
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              A grassroots, community-led organization promoting sustainable development through environmental conservation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
                src="https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545541/Big_Ship_Logo_hkystj.jpg"
                alt="Environmental conservation"
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
                Our Story
              </div>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Building a Sustainable Future Since 2009
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Big Ship Community-Based Organization (CBO) is a grassroots, community-led 
                environmental and socio-economic development organization based in <strong className="text-ocean-600">Mikindani Ward, 
                Jomvu Sub-County, Mombasa County</strong>. The organization operates at the intersection 
                of environmental conservation, urban resilience, and livelihood empowerment, with 
                a particular focus on youth and women.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since our inception in <strong className="text-ocean-600">2009</strong>, we have applied a community empowerment 
                and ecosystem-based management model, emphasizing participatory conservation, 
                circular economy principles, alternative livelihood creation, and environmental 
                governance advocacy. Our mission is to promote sustainable development by 
                empowering local communities in environmental conservation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              To promote sustainable development by empowering local communities in environmental conservation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Participatory Conservation',
                description: 'Community-led environmental conservation and ecosystem-based management',
                color: 'text-primary-600',
                bgColor: 'bg-primary-50',
              },
              {
                icon: Users,
                title: 'Circular Economy',
                description: 'Applying circular economy principles to create sustainable livelihoods',
                color: 'text-ocean-600',
                bgColor: 'bg-ocean-50',
              },
              {
                icon: Heart,
                title: 'Alternative Livelihoods',
                description: 'Creating income-generating opportunities that reduce environmental pressure',
                color: 'text-purple-600',
                bgColor: 'bg-purple-50',
              },
              {
                icon: Waves,
                title: 'Environmental Governance',
                description: 'Advocating for policies that support community-led conservation',
                color: 'text-green-600',
                bgColor: 'bg-green-50',
              },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${value.bgColor} rounded-2xl p-6 text-center`}
                >
                  <Icon className={`w-12 h-12 ${value.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 text-white/90">
              Be part of the change. Support our efforts to create a sustainable future.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center px-8 py-4 bg-white text-ocean-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Support Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

