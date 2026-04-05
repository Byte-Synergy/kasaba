'use client'

import { createContext, useContext } from 'react'

type Dictionary = Record<string, any>

const TranslationContext = createContext<Dictionary>({})

export const TranslationsProvider = ({
  dictionary,
  children,
}: {
  dictionary: Dictionary
  children: React.ReactNode
}) => {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslations = () => {
  const dictionary = useContext(TranslationContext)

  const t = (key: string): string => {
    return key.split('.').reduce((obj: any, segment: string) => obj?.[segment], dictionary) ?? key
  }

  return t
}
