import { useEffect, useRef } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'

export interface ScrollMemory {
  path: string
  position: number
  timestamp: number
}

export function useScrollMemory() {
  const [scrollHistory, setScrollHistory] = useLocalStorage<ScrollMemory[]>('scroll-history', [])
  const currentPathRef = useRef<string>('')
  
  const saveScrollPosition = (path: string) => {
    const position = window.scrollY
    const timestamp = Date.now()
    
    setScrollHistory((current) => {
      const currentHistory = current || []
      const filtered = currentHistory.filter(item => item.path !== path)
      const newHistory = [...filtered, { path, position, timestamp }].slice(-10)
      return newHistory
    })
  }
  
  const getLastScrollPosition = (currentPath: string) => {
    if (!scrollHistory || scrollHistory.length === 0) return null
    
    const filtered = scrollHistory.filter(item => item.path !== currentPath)
    if (filtered.length === 0) return null
    
    const sorted = [...filtered].sort((a, b) => b.timestamp - a.timestamp)
    return sorted[0]
  }
  
  const scrollToSavedPosition = (position: number) => {
    setTimeout(() => {
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      })
    }, 100)
  }
  
  const clearHistory = () => {
    setScrollHistory([])
  }
  
  useEffect(() => {
    currentPathRef.current = window.location.pathname
  }, [])
  
  return {
    saveScrollPosition,
    getLastScrollPosition,
    scrollToSavedPosition,
    clearHistory,
    scrollHistory
  }
}
