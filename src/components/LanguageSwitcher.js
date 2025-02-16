'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const currentLocale = useLocale()

  // Define available languages
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'al', label: 'Albanian' },
    { code: 'mk', label: 'Macedonian' },
    // Add more languages as needed
  ]

  const getPathForLocale = (locale) => {
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getPathForLocale(lang.code)}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentLocale === lang.code ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  )
}
