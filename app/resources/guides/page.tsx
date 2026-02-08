'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Download, Calendar, BookOpen } from 'lucide-react'
import { getAllResources } from '@/lib/resourcesData'
import { downloadPDF } from '@/lib/pdfGenerator'

export default function Guides() {
  const allResources = getAllResources()
  const guides = allResources.filter(r => r.type === 'Guide')

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/resources"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h1 className="text-5xl font-extrabold mb-4">Guides</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Educational guides and manuals for environmental conservation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {new Date(guide.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        {guide.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {guide.content.introduction}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={`/resources/${guide.id}`}
                    className="flex-1 px-6 py-3 bg-white border-2 border-green-600 text-green-600 rounded-xl font-semibold hover:bg-green-50 transition-all duration-300 text-center"
                  >
                    View Guide
                  </Link>
                  <button
                    onClick={() => downloadPDF(guide)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {guides.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No guides available at this time.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
