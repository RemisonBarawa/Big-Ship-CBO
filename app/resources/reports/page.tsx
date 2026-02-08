'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Download, Calendar, FileCheck } from 'lucide-react'
import { getAllResources } from '@/lib/resourcesData'
import { downloadPDF } from '@/lib/pdfGenerator'

export default function Reports() {
  const allResources = getAllResources()
  const reports = allResources.filter(r => r.type === 'Report')

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
      <section className="py-16 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FileCheck className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-5xl font-extrabold mb-4">Reports</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Annual reports, project completion reports, and impact assessments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {reports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-start gap-6 flex-1">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <FileCheck className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600 mb-3">{report.content.introduction.substring(0, 150)}...</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {new Date(report.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {report.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 lg:flex-col">
                    <Link
                      href={`/resources/${report.id}`}
                      className="flex-1 lg:flex-none px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 text-center"
                    >
                      View
                    </Link>
                    <button
                      onClick={() => downloadPDF(report)}
                      className="flex-1 lg:flex-none px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {reports.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No reports available at this time.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
