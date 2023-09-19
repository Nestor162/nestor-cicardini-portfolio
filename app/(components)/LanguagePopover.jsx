import { useEffect, useState } from 'react'
import Image from 'next/image'
import IonIcon from '@reacticons/ionicons'
import { useRouter, usePathname } from 'next/navigation'

const options = [
  { value: 'en', label: 'United Kingdom', image: '/img/icons8-english-48.png' },
  { value: 'es', label: 'Spain', image: '/img/icons8-spain-48.png' },
  { value: 'it', label: 'Italy', image: '/img/icons8-italy-48.png' }
]

export default function LanguagePopover({ direction }) {
  const router = useRouter()
  const path = usePathname()

  const currentLocale = path.split('/')[1]

  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.value === currentLocale) || options[0]
  )
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = option => {
    setSelectedOption(option)
    setIsOpen(false)
    const locale = option.value
    const redirectedPathName = `/${locale}`
    router.push(redirectedPathName)
  }

  const filteredOptions = options.filter(option => option.value !== selectedOption.value)

  useEffect(() => {
    const newLocale = path.split('/')[1]
    const newSelectedOption = options.find(option => option.value === newLocale) || options[0]
    setSelectedOption(newSelectedOption)
  }, [path])

  const isUpDirection = direction === 'up'

  const menuClasses = `absolute -translate-y-40 z-10  right-0 left-0 bg-transparent shadow-md border border-slate-400 dark:border-slate-400 rounded-xl ${
    isUpDirection ? 'top-[79px] w-[74px]' : 'top-[217px] w-[82px]'
  }`

  return (
    <div className='relative inline-block'>
      <button
        onClick={toggleMenu}
        className='flex items-center space-x-2 cursor-pointer border border-slate-400 dark:border-slate-400 p-3 rounded-xl shadow-lg'
      >
        <Image src={selectedOption.image} alt={`${selectedOption.label} flag`} width={24} height={24} />
        <span>
          <IonIcon name={isUpDirection ? 'caret-up-outline' : 'caret-down-outline'}></IonIcon>
        </span>
      </button>

      {isOpen && (
        <div className={menuClasses}>
          {filteredOptions.map((option, index) => (
            <div
              key={option.value}
              className='flex items-center justify-center space-x-3 px-3 py-2 cursor-pointer  hover:bg-slate-300 dark:hover:bg-slate-200 '
              onClick={() => handleOptionClick(option)}
            >
              <Image src={option.image} alt={`${option.label} flag`} width={24} height={24} />
              {/* <span>{option.label}</span> */}
              {index < filteredOptions.length - 1 && (
                <div className='border border-t-0 border-x-0 h-2 border-slate-400 w-full absolute -left-3 bottom-10' />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
