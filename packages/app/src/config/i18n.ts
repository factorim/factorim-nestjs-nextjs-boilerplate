import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { config } from '@/config/configClient'
import translationEN from '@/locales/en/translation.json'
import translationFR from '@/locales/fr/translation.json'

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
}

i18next.use(LanguageDetector).init({
  resources,
  fallbackLng: 'en',
  supportedLngs: config.langs,
  defaultNS: 'translation',
  debug: false,
})

export default i18next
