'use client'

import { Users2, Building2, Users, Globe, Award, Heart } from 'lucide-react'

const partnerCategories = [
  {
    icon: Building2,
    title: 'Corporate Partners',
    description: 'Businesses and corporations supporting our mission',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Community Organizations',
    description: 'Local and regional community-based organizations',
    color: 'from-green-500 to-emerald-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: Globe,
    title: 'International Partners',
    description: 'Global organizations and networks',
    color: 'from-purple-500 to-pink-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Award,
    title: 'Government Agencies',
    description: 'Local and national government institutions',
    color: 'from-orange-500 to-red-600',
    bgColor: 'bg-orange-50',
  },
]

const partners = [
  {
    name: 'Mombasa County Government',
    category: 'Government',
    logo: '🏛️',
    description: 'Strategic partnership for environmental conservation and community development initiatives.',
  },
  {
    name: 'Kenya Forest Service',
    category: 'Government',
    logo: '🌳',
    description: 'Collaboration on forest conservation and restoration projects.',
  },
  {
    name: 'Local Community CBOs',
    category: 'Community',
    logo: '🤝',
    description: 'Network of community-based organizations working together for common goals.',
  },
  {
    name: 'International Conservation Network',
    category: 'International',
    logo: '🌍',
    description: 'Global network of conservation organizations sharing knowledge and resources.',
  },
]

const benefits = [
  {
    icon: Users2, // Changed from Handshake
    title: 'Strategic Partnerships',
    description: 'Building strong relationships with organizations that share our values',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Heart,
    title: 'Shared Impact',
    description: 'Combining resources and expertise to maximize our collective impact',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: Award,
    title: 'Best Practices',
    description: 'Learning from partners and sharing knowledge for continuous improvement',
    color: 'from-green-500 to-emerald-600',
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Our Partners
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working together with organizations and communities to create lasting change
            </p>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Partner Categories</h2>
            <p className="text-lg text-gray-600">Diverse partnerships for comprehensive impact</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className={`${category.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partners List */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Key Partners</h2>
            <p className="text-lg text-gray-600">Organizations we collaborate with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm mb-3">
                      {partner.category}
                    </span>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Partnership Benefits</h2>
            <p className="text-lg text-gray-600">Why partnerships matter</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="text-center transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}