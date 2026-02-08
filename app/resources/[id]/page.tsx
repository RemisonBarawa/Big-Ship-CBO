'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Download, Calendar, FileText, Tag } from 'lucide-react'
import { useParams } from 'next/navigation'
import { getResourceById } from '@/lib/resourcesData'
import { downloadPDF } from '@/lib/pdfGenerator'

export default function ResourceDetail() {
  const params = useParams()
  const resourceId = params.id as string
  const resource = getResourceById(resourceId)

  if (!resource) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
          <Link href="/resources" className="text-blue-600 hover:text-blue-700">
            Return to Resources
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
          href="/resources"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>
      </div>

      {/* Resource Content Canvas */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        {/* Ultra Modern Canvas Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
          {/* Header Section */}
          <div className="border-b-4 border-indigo-600 pb-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
                Big Ship Organization
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
            >
              {resource.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full">
                {resource.type}
              </span>
            </motion.div>
          </div>

          {/* Metadata Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border-l-4 border-indigo-600"
          >
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-1">Date</div>
              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <Calendar className="w-4 h-4" />
                {new Date(resource.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500 mb-1">Category</div>
              <div className="flex items-center gap-2 text-gray-900 font-medium">
                <Tag className="w-4 h-4" />
                {resource.category}
              </div>
            </div>
            {resource.metadata?.author && (
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-1">Author</div>
                <div className="text-gray-900 font-medium">{resource.metadata.author}</div>
              </div>
            )}
            {resource.metadata?.version && (
              <div>
                <div className="text-sm font-semibold text-gray-500 mb-1">Version</div>
                <div className="text-gray-900 font-medium">{resource.metadata.version}</div>
              </div>
            )}
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-10"
          >
            <button
              onClick={() => downloadPDF(resource)}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download as PDF
            </button>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-600"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {resource.content.introduction}
            </p>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-10">
            {resource.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="pb-8 border-b border-gray-200 last:border-b-0"
              >
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed mb-6">
                  {section.text}
                </p>

                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-6 ml-6 pl-6 border-l-3 border-blue-300">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {subsection.subheading}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {subsection.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          {resource.content.conclusion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-l-4 border-green-600"
            >
              <h2 className="text-2xl font-bold text-green-800 mb-4">Conclusion</h2>
              <p className="text-lg text-green-700 leading-relaxed">
                {resource.content.conclusion}
              </p>
            </motion.div>
          )}

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-12 pt-8 border-t-2 border-gray-200 text-center"
          >
            <p className="text-sm text-gray-600 mb-2">
              <strong>Big Ship Organization</strong>
            </p>
            <p className="text-sm text-gray-500">Mombasa County, Kenya</p>
            <p className="text-sm text-gray-500">www.bigshiporganization.org</p>
            <p className="text-xs text-gray-400 mt-4">
              © {new Date().getFullYear()} Big Ship Organization. All rights reserved.
            </p>
          </motion.div>
        </div>
      </motion.article>
    </div>
  )
}
