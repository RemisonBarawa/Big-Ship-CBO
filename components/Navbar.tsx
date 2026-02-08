'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Ship, Moon, Sun, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useTheme } from '@/components/ThemeProvider'
import { Button } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const { scrollY } = useScroll()
  const navBlur = useTransform(scrollY, [0, 100], [8, 20])
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { 
      type: 'dropdown',
      label: 'About',
      items: [
        { href: '/about', label: 'Our Story', description: 'History & mission' },
        { href: '/leadership', label: 'Leadership', description: 'Team & board members' },
        { href: '/partners', label: 'Partners', description: 'Our partners & supporters' },
      ]
    },
    { 
      type: 'dropdown',
      label: 'Programs',
      items: [
        { href: '/programs/environment', label: 'Environment', description: 'Mangrove conservation & restoration' },
        { href: '/programs/waste-management', label: 'Waste Management', description: 'RECO & resource recovery' },
        { href: '/programs/empowerment', label: 'Empowerment', description: 'Youth & community development' },
        { href: '/programs/smart-farming', label: 'Smart Farming', description: 'Sustainable agriculture practices' },
      ]
    },
    { 
      type: 'dropdown',
      label: 'Projects',
      items: [
        { href: '/projects', label: 'All Projects', description: 'View all initiatives' },
        { href: '/projects/adopt-a-site', label: 'Adopt A Site', description: 'Forest conservation partnerships' },
        { href: '/projects/reco', label: 'RECO Project', description: 'Resource collection & recycling' },
        { href: '/projects/boresha-jamii', label: 'Boresha Jamii', description: 'Urban resilience program' },
        { href: '/projects/vimp', label: 'VIMP Program', description: 'Volunteer mentorship' },
        { href: '/projects/bring-back-tudor-creek', label: '#BringBackTudorCreek', description: 'Flagship campaign' },
      ]
    },
    { 
      type: 'dropdown',
      label: 'Engage',
      items: [
        { href: '/donate', label: 'Donate', description: 'Support our mission' },
        { href: '/contact', label: 'Contact', description: 'Get in touch' },
        { href: '/blog', label: 'Blog', description: 'Stories & updates' },
        { href: '/gallery', label: 'Gallery', description: 'Photo & video gallery' },
        { href: '/news', label: 'News', description: 'Latest news & announcements' },
        { href: '/resources', label: 'Resources', description: 'Reports, guides & materials' },
      ]
    },
  ]

  return (
    <motion.nav
      style={{
        backdropFilter: `blur(${navBlur}px)`,
        WebkitBackdropFilter: `blur(${navBlur}px)`,
      }}
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-500",
        scrolled
          ? "glass-card dark:glass-dark rounded-3xl shadow-glass-lg border border-white/20 dark:border-white/10"
          : "glass dark:glass-dark rounded-3xl shadow-glass border border-white/10 dark:border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative p-2.5 rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-ocean-600 shadow-lg hover:shadow-glow transition-all duration-300"
            >
              <Ship className="w-5 h-5 text-white" />
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400 to-ocean-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                style={{ filter: 'blur(12px)' }}
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-extrabold gradient-text dark:gradient-text-light"
            >
              Big Ship
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => {
              if (link.type === 'dropdown') {
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <DropdownMenu label={link.label} items={link.items} />
                  </motion.div>
                )
              }
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={link.href}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative px-5 py-2.5 rounded-2xl group"
                    >
                      <span className="relative z-10 text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-ocean-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`nav-${link.href}`}
                      />
                      <motion.div
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-ocean-500 rounded-full group-hover:w-3/4 transition-all duration-300"
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="ml-2 rounded-2xl hover:bg-primary-500/10 dark:hover:bg-primary-400/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2.5 rounded-2xl glass dark:glass-dark hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-1 border-t border-white/10 dark:border-white/5 mt-2">
              {navLinks.map((link, index) => {
                if (link.type === 'dropdown') {
                  const isDropdownOpen = openDropdown === link.label
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setOpenDropdown(isDropdownOpen ? null : link.label)}
                        className="w-full px-4 py-3 rounded-2xl glass dark:glass-dark hover:bg-white/10 dark:hover:bg-white/5 transition-colors mb-2 flex items-center justify-between"
                      >
                        <span className="text-foreground/80 font-semibold">{link.label}</span>
                        <motion.div
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden ml-4 mt-2 space-y-1"
                          >
                            {link.items.map((item, itemIndex) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setIsOpen(false)
                                  setOpenDropdown(null)
                                }}
                              >
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="px-4 py-2 rounded-xl glass dark:glass-dark hover:bg-white/10 dark:hover:bg-white/5 transition-colors mb-1"
                                >
                                  <div className="text-sm font-medium text-foreground/70">{item.label}</div>
                                  <div className="text-xs text-foreground/50 mt-0.5">{item.description}</div>
                                </motion.div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-3 rounded-2xl glass dark:glass-dark hover:bg-white/10 dark:hover:bg-white/5 transition-colors mb-2"
                      >
                        <span className="text-foreground/80 font-semibold">{link.label}</span>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-2"
              >
                <Button
                  variant="ghost"
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                    setIsOpen(false)
                  }}
                  className="w-full justify-start rounded-2xl"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

