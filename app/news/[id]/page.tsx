'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Tag, User, ArrowLeft, Share2, Clock } from 'lucide-react'
import { useParams } from 'next/navigation'

// Extended news data with full content
const newsData = {
  1: {
    id: 1,
    title: 'Big Ship Organization Launches New Conservation Initiative',
    excerpt: 'A new partnership with local communities to restore 100 hectares of mangrove forests.',
    date: '2024-01-20',
    category: 'Announcements',
    author: 'Dr. Sarah Kimani',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80',
    content: {
      introduction: 'Big Ship Organization is proud to announce a groundbreaking conservation initiative that will transform coastal ecosystems across Mombasa County. This ambitious project represents our commitment to environmental sustainability and community empowerment.',
      sections: [
        {
          heading: 'Project Overview',
          text: 'The initiative aims to restore 100 hectares of degraded mangrove forests along the Tudor Creek and surrounding coastal areas. Mangroves are critical ecosystems that provide numerous benefits including coastal protection, carbon sequestration, and habitat for marine life.',
        },
        {
          heading: 'Community Partnership',
          text: 'Working closely with local communities, we have established partnerships with over 15 community groups representing more than 500 households. These communities will be directly involved in planting, monitoring, and protecting the restored mangrove areas.',
        },
        {
          heading: 'Expected Impact',
          text: 'Over the next three years, this project will sequester an estimated 5,000 tons of CO2, create 200 green jobs, and protect over 10 kilometers of coastline from erosion. Additionally, the restored mangroves will serve as nurseries for commercially important fish species, supporting local fishing communities.',
        },
        {
          heading: 'Implementation Timeline',
          text: 'Phase 1 begins immediately with community mobilization and site preparation. Planting activities will commence in March 2024, coinciding with the rainy season for optimal survival rates. Monitoring and maintenance will continue for five years to ensure long-term success.',
        },
      ],
      conclusion: 'This initiative represents a significant step forward in our mission to protect and restore coastal ecosystems. We invite all stakeholders to join us in this transformative journey towards environmental sustainability.',
    },
    stats: [
      { label: 'Hectares to Restore', value: '100' },
      { label: 'Community Groups', value: '15' },
      { label: 'Green Jobs Created', value: '200' },
      { label: 'CO2 Sequestered', value: '5,000 tons' },
    ],
  },
  2: {
    id: 2,
    title: 'RECO Project Reaches Major Milestone',
    excerpt: '500 tons of waste recycled, creating 50 new jobs in Mombasa County.',
    date: '2024-01-15',
    category: 'Projects',
    author: 'James Omondi',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80',
    content: {
      introduction: 'The Recycling and Composting (RECO) project has achieved a remarkable milestone, recycling over 500 tons of waste and creating sustainable employment opportunities for 50 individuals in Mombasa County.',
      sections: [
        {
          heading: 'Achievement Highlights',
          text: 'Since its inception, RECO has diverted 500 tons of waste from landfills, including plastics, metals, and organic materials. This achievement represents a 40% increase in recycling rates within our operational areas.',
        },
        {
          heading: 'Job Creation and Economic Impact',
          text: 'The project has created 50 full-time jobs, with 60% of positions filled by youth and 45% by women. Workers receive fair wages, training in waste management, and opportunities for career advancement in the green economy.',
        },
        {
          heading: 'Community Engagement',
          text: 'Over 2,000 households now participate in our waste segregation program. We have conducted 30 community workshops on proper waste management, reaching more than 5,000 residents across Mombasa County.',
        },
        {
          heading: 'Environmental Benefits',
          text: 'By recycling 500 tons of waste, we have prevented approximately 1,200 tons of CO2 emissions and conserved significant amounts of water and energy that would have been used in producing new materials from raw resources.',
        },
      ],
      conclusion: 'The RECO project demonstrates that environmental conservation and economic development can go hand in hand. We are committed to expanding this successful model to other regions.',
    },
    stats: [
      { label: 'Waste Recycled', value: '500 tons' },
      { label: 'Jobs Created', value: '50' },
      { label: 'Households Engaged', value: '2,000' },
      { label: 'CO2 Prevented', value: '1,200 tons' },
    ],
  },
  3: {
    id: 3,
    title: 'VIMP Program Graduates 100th Participant',
    excerpt: 'Celebrating the success of our mentorship program in developing young professionals.',
    date: '2024-01-10',
    category: 'Programs',
    author: 'Mary Wanjiku',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    content: {
      introduction: 'The Vijana Inspiring Mentorship Program (VIMP) has reached a significant milestone with the graduation of its 100th participant, marking five years of transforming young lives through professional development and mentorship.',
      sections: [
        {
          heading: 'Program Success Stories',
          text: 'Our 100 graduates have gone on to achieve remarkable success. 75% are now employed in their fields of interest, 15% have started their own businesses, and 10% are pursuing further education. Their collective impact on communities is immeasurable.',
        },
        {
          heading: 'Mentorship Model',
          text: 'VIMP pairs young professionals with experienced mentors from various industries including environmental science, business, technology, and social entrepreneurship. Each mentorship relationship lasts 12 months, with structured learning objectives and regular check-ins.',
        },
        {
          heading: 'Skills Development',
          text: 'Participants receive training in leadership, project management, communication, and technical skills relevant to their career paths. We have delivered over 500 hours of training workshops and facilitated 1,000+ mentorship sessions.',
        },
        {
          heading: 'Community Impact',
          text: 'VIMP graduates have initiated 25 community projects, impacting over 10,000 people. These projects range from environmental conservation initiatives to youth empowerment programs, creating a ripple effect of positive change.',
        },
      ],
      conclusion: 'As we celebrate this milestone, we remain committed to empowering the next generation of leaders who will drive sustainable development in our communities.',
    },
    stats: [
      { label: 'Graduates', value: '100' },
      { label: 'Employment Rate', value: '75%' },
      { label: 'Community Projects', value: '25' },
      { label: 'People Impacted', value: '10,000+' },
    ],
  },
  4: {
    id: 4,
    title: 'Community Partnership Strengthens Conservation Efforts',
    excerpt: 'Local communities join forces with Big Ship to protect coastal ecosystems.',
    date: '2024-01-05',
    category: 'Community',
    author: 'Peter Mwangi',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80',
    content: {
      introduction: 'A groundbreaking partnership between Big Ship Organization and 20 coastal communities is setting new standards for collaborative conservation. This initiative demonstrates how local knowledge combined with technical expertise can create lasting environmental impact.',
      sections: [
        {
          heading: 'Partnership Framework',
          text: 'The partnership brings together community groups, local government, and Big Ship Organization in a collaborative framework. Each partner contributes unique strengths: communities provide local knowledge and labor, government offers policy support, and Big Ship provides technical expertise and resources.',
        },
        {
          heading: 'Community-Led Conservation',
          text: 'Communities have taken ownership of conservation activities in their areas. They conduct regular patrols, monitor ecosystem health, and enforce local conservation bylaws. This community-led approach ensures sustainability and builds local capacity for long-term environmental stewardship.',
        },
        {
          heading: 'Economic Benefits',
          text: 'Conservation activities have created new income streams for communities. Eco-tourism initiatives, sustainable fishing practices, and carbon credit programs generate revenue while protecting ecosystems. Over 300 households now benefit directly from conservation-related income.',
        },
        {
          heading: 'Knowledge Exchange',
          text: 'Regular workshops and training sessions facilitate knowledge exchange between communities and technical experts. Traditional ecological knowledge is documented and integrated with scientific approaches, creating a comprehensive understanding of coastal ecosystems.',
        },
      ],
      conclusion: 'This partnership model demonstrates that conservation succeeds when communities are genuine partners, not just beneficiaries. We are committed to expanding this approach to other regions and sharing lessons learned with the broader conservation community.',
    },
    stats: [
      { label: 'Community Groups', value: '20' },
      { label: 'Households Benefiting', value: '300+' },
      { label: 'Protected Areas', value: '15 km²' },
      { label: 'Training Sessions', value: '45' },
    ],
  },
  5: {
    id: 5,
    title: 'Award Recognition for Environmental Excellence',
    excerpt: 'Big Ship Organization receives recognition for outstanding environmental conservation work.',
    date: '2023-12-28',
    category: 'Awards',
    author: 'Dr. Sarah Kimani',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
    content: {
      introduction: 'Big Ship Organization has been honored with the National Environmental Excellence Award, recognizing our innovative approaches to coastal conservation and community empowerment. This prestigious award validates our commitment to sustainable development and environmental stewardship.',
      sections: [
        {
          heading: 'Award Significance',
          text: 'The National Environmental Excellence Award is Kenya\'s highest recognition for environmental conservation work. It acknowledges organizations that demonstrate innovation, impact, and sustainability in their environmental programs. Big Ship was selected from over 100 nominees nationwide.',
        },
        {
          heading: 'Recognized Achievements',
          text: 'The award specifically recognized our integrated approach to conservation that combines ecosystem restoration, community empowerment, and sustainable livelihoods. Our mangrove restoration program, waste management initiatives, and youth mentorship program were highlighted as exemplary models.',
        },
        {
          heading: 'Innovation in Conservation',
          text: 'Our use of technology for monitoring, community-based management approaches, and integration of traditional knowledge with scientific methods were cited as innovative practices. These approaches have been documented and are being replicated by other organizations.',
        },
        {
          heading: 'Future Commitments',
          text: 'This recognition strengthens our resolve to expand our impact. We are developing new programs in climate adaptation, blue economy development, and environmental education. The award also brings opportunities for partnerships and increased support for our work.',
        },
      ],
      conclusion: 'We dedicate this award to the communities we serve and our dedicated team. This recognition belongs to everyone who has contributed to our mission of environmental conservation and community empowerment. Together, we will continue building a sustainable future.',
    },
    stats: [
      { label: 'Nominees', value: '100+' },
      { label: 'Years of Service', value: '10+' },
      { label: 'Communities Served', value: '50+' },
      { label: 'Projects Completed', value: '25' },
    ],
  },
  6: {
    id: 6,
    title: 'New Smart Farming Training Program Launched',
    excerpt: 'Empowering farmers with sustainable agriculture techniques for climate resilience.',
    date: '2023-12-20',
    category: 'Programs',
    author: 'James Omondi',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80',
    content: {
      introduction: 'Big Ship Organization has launched an innovative Smart Farming Training Program designed to equip farmers with climate-smart agricultural techniques. This program addresses the urgent need for sustainable farming practices in the face of climate change and environmental degradation.',
      sections: [
        {
          heading: 'Program Overview',
          text: 'The Smart Farming Training Program combines traditional agricultural knowledge with modern sustainable practices. It covers topics including water conservation, organic farming, integrated pest management, and climate adaptation strategies. The program is designed for both experienced farmers and those new to agriculture.',
        },
        {
          heading: 'Climate-Smart Techniques',
          text: 'Participants learn techniques specifically designed for climate resilience. These include drought-resistant crop varieties, water harvesting and conservation, soil health management, and agroforestry. The program emphasizes practices that increase productivity while reducing environmental impact.',
        },
        {
          heading: 'Technology Integration',
          text: 'The program introduces farmers to appropriate technologies including drip irrigation, solar-powered equipment, mobile apps for weather forecasting and market information, and digital record-keeping. Technology is presented as a tool to enhance, not replace, traditional farming wisdom.',
        },
        {
          heading: 'Market Linkages',
          text: 'Beyond production, the program helps farmers access markets for their produce. We facilitate connections with buyers, provide training on value addition and post-harvest handling, and support formation of farmer cooperatives for collective marketing and better prices.',
        },
        {
          heading: 'Initial Results',
          text: 'The first cohort of 50 farmers has completed training and is implementing learned techniques. Early results show 30% increase in yields, 40% reduction in water use, and improved soil health. Farmers report increased confidence and optimism about their agricultural future.',
        },
      ],
      conclusion: 'The Smart Farming Training Program represents our commitment to supporting sustainable livelihoods while protecting the environment. We plan to train 500 farmers over the next two years and are developing specialized modules for different crops and farming systems.',
    },
    stats: [
      { label: 'Farmers Trained', value: '50' },
      { label: 'Yield Increase', value: '30%' },
      { label: 'Water Savings', value: '40%' },
      { label: 'Target (2 years)', value: '500' },
    ],
  },
}

export default function NewsDetail() {
  const params = useParams()
  const newsId = parseInt(params.id as string)
  const article = newsData[newsId as keyof typeof newsData]

  if (!article) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link href="/news" className="text-blue-600 hover:text-blue-700">
            Return to News
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/news"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to News
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
      >
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </motion.div>

      {/* Article Content Canvas */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        {/* Ultra Modern Canvas Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full">
              {article.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            {article.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-5 h-5" />
              <span className="font-medium">{article.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <span>{article.readTime}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              {article.content.introduction}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
          >
            {article.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-10">
            {article.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border-l-4 border-blue-600"
          >
            <p className="text-lg text-gray-700 leading-relaxed italic">
              {article.content.conclusion}
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <Tag className="w-5 h-5 text-gray-400" />
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Conservation
              </span>
              <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Community
              </span>
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  )
}
