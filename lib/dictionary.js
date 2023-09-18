import 'server-only'

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  es: () => import('@/dictionaries/es.json').then(module => module.default),
  it: () => import('@/dictionaries/it.json').then(module => module.default)
}

export const getDictionary = async locale => {
  if (dictionaries[locale]) {
    return dictionaries[locale]()
  } else {
    // Fallback to English if the requested locale is not available
    return dictionaries['en']()
  }
}
