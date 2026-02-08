'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Ship, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/donate', label: 'Donate' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Background with organic shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 left-1/4 w-96 h-96 bg-primary-300/10 dark:bg-primary-500/5 blob"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-2.5 rounded-2xl bg-gradient-to-br from-primary-500 to-ocean-500 shadow-lg"
              >
                <Ship className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-2xl font-extrabold gradient-text dark:gradient-text-light">
                Big Ship
              </span>
            </Link>
            <p className="text-foreground/70 dark:text-foreground/80 mb-6 max-w-md leading-relaxed">
              A community empowerment organization focused on environmental conservation, 
              waste management, and youth empowerment in Mombasa County, Kenya.
            </p>
            <div className="flex items-center space-x-2 text-foreground/60 dark:text-foreground/70">
              <MapPin className="w-4 h-4 text-primary-500 dark:text-primary-400" />
              <span className="text-sm">Jomvu, Mombasa County, Kenya</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-6 gradient-text dark:gradient-text-light">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-foreground/70 dark:text-foreground/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="ml-2 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-6 gradient-text dark:gradient-text-light">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@bigship.org"
                  className="text-foreground/70 dark:text-foreground/80 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  info@bigship.org
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60 dark:text-foreground/70">
              Copyright © Big Ship {currentYear}. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/50">
              <span>Designed with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary-500"
              >
                ♥
              </motion.span>
              <span>By <a href="https://remison-barawa-portfolio.netlify.app/">Remison Barawa</a></span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}


