import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function ThemeToggler() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(null) // Start with null when component is loading

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])

  const toggleTheme = () => {
    if (isDark !== null) {
      setTheme(isDark ? 'light' : 'dark')
    }
  }

  // If it's loading show the toggler default's style
  if (isDark === null) {
    return (
      <div className='relative inline-block w-10 align-middle select-none transition duration-200 ease-in'>
        <input
          type='checkbox'
          name='toggle'
          id='toggle'
          className='toggle-checkbox absolute -top-[6px] block w-6 h-6 rounded-full border-2 border-gray-100 appearance-none cursor-pointer transform transition-transform duration-200 ease-in bg-slate-300 translate-x-2'
        />
        <label
          htmlFor='toggle'
          className='toggle-label block overflow-hidden h-3 rounded-full cursor-pointer bg-gray-300'
        ></label>
      </div>
    )
  }

  return (
    <div className='relative inline-block w-10 align-middle select-none transition duration-200 ease-in'>
      <input
        type='checkbox'
        name='toggle'
        id='toggle'
        checked={isDark}
        onChange={toggleTheme}
        className={`toggle-checkbox absolute -top-[6px] block w-6 h-6 rounded-full border-2 border-gray-100 appearance-none cursor-pointer transform transition-transform duration-200 ease-in ${
          isDark ? 'translate-x-4 bg-cyan-700' : 'bg-yellow-400'
        }`}
      />
      <label
        htmlFor='toggle'
        className={`toggle-label block overflow-hidden h-3 rounded-full cursor-pointer ${
          isDark ? 'bg-gray-800' : 'bg-gray-300'
        }`}
      ></label>
    </div>
  )
}

export default ThemeToggler
