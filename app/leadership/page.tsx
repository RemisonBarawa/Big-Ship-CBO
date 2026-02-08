'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Award, Briefcase, Mail, Linkedin } from 'lucide-react'

const leadershipTeam = [
  {
    name: 'Bosco Juma',
    role: 'Founding Director / Executive Director',
    bio: 'Founder and main director of Big Ship CBO with over a decade of experience working with coastal communities on mangrove restoration, environmental conservation, youth empowerment, and sustainable livelihoods. YALI alumnus with training in environmental conservation and business development.',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770545538/Bosko_Juma_CEO_utmxrc.jpg',
    expertise: ['Environmental Conservation', 'Community Development', 'Strategic Leadership'],
  },
  {
    name: 'Lucian Adhiambo',
    role: 'Urban & Resilience Strategist',
    bio: 'Social and community development professional with formal training in project management and procurement/supplies. Responsible for program planning, coordination, and implementation of Big Ship\'s community and environmental initiatives.',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770548939/placeholder_lady_jltrvc.jpg',
    expertise: ['Program Management', 'Project Coordination', 'Community Development'],
  },
  {
    name: 'Daniel Mulandi',
    role: 'Administrative Accountant',
    bio: 'Economist and finance graduate responsible for financial oversight and accounting functions within the organization, ensuring transparency and accountability.',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770548940/placeholder_man_bnapbx.jpg',
    expertise: ['Financial Management', 'Accounting', 'Economics'],
  },
  {
    name: 'Jimmy Mwaita',
    role: 'Monitoring & Evaluation Officer',
    bio: 'Specialist in monitoring and evaluation and human resource graduate, tasked with tracking program outcomes and institutional performance to ensure effective implementation.',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770548940/placeholder_man_bnapbx.jpg',
    expertise: ['M&E', 'Performance Tracking', 'Human Resources'],
  },
  {
    name: 'Agatha Nafula',
    role: 'Environment & Climate Change Officer',
    bio: 'Research associate with a Bachelor of Science in Natural Resource Management, focusing on environmental research and climate response activities.',
    image: 'https://res.cloudinary.com/dwhp5xrhn/image/upload/v1770548939/placeholder_lady_jltrvc.jpg',
    expertise: ['Environmental Research', 'Climate Change', 'Natural Resource Management'],
  },
]

const boardMembers: Array<{ name: string; role: string; bio: string; image: string }> = []

export default function Leadership() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
            alt="Leadership"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/80 via-purple-800/60 to-transparent" />
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
              <Users className="w-20 h-20 mx-auto text-purple-300" />
            </motion.div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-100 bg-clip-text text-transparent">
              Leadership
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Meet the dedicated team and board members driving our mission forward
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals committed to our mission
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-ocean-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

