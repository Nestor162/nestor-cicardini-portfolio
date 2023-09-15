import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function ThemeToggler() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
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
