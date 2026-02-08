'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DropdownItem {
  href: string
  label: string
  description?: string
}

interface DropdownMenuProps {
  label: string
  items: DropdownItem[]
  icon?: React.ReactNode
}

export function DropdownMenu({ label, items, icon }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const timeoutRef = React.useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200)
  }

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="relative px-5 py-2.5 rounded-2xl group flex items-center gap-1.5"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="relative z-10 text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
          {label}
        </span>
        {icon && <span className="relative z-10">{icon}</span>}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 relative z-10" />
        </motion.div>
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 to-ocean-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          layoutId={`nav-${label}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 glass-card dark:glass-dark rounded-3xl shadow-glass-lg border border-white/20 dark:border-white/10 p-2 z-50"
          >
            {items.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block px-4 py-3 rounded-2xl hover:bg-white/10 dark:hover:bg-white/5 transition-colors group"
              >
                <div className="font-semibold text-sm text-foreground group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {item.label}
                </div>
                {item.description && (
                  <div className="text-xs text-foreground/60 dark:text-foreground/70 mt-1">
                    {item.description}
                  </div>
                )}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

