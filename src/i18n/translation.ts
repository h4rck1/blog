import type { LANGUAGE } from '@/types/config'
import { siteConfig } from '../config'
import type I18nKey from './i18nKey'
import { en } from './languages/en'
import { es } from './languages/es'
import { ja } from './languages/ja'
import { zh_CN } from './languages/zh_CN'
import { zh_TW } from './languages/zh_TW'

export type Translation = {
  [K in I18nKey]: string
}

const defaultTranslation = en

const map: { [key: string]: Translation } = {
  en: en,
  es: es,
  en_us: en,
  en_gb: en,
  en_au: en,
  zh_cn: zh_CN,
  zh_tw: zh_TW,
  ja: ja,
  ja_jp: ja,
}

export function getTranslation(lang: string): Translation {
  return map[lang.toLowerCase()] || defaultTranslation
}

export function i18n(key: I18nKey): string {
  const language = siteConfig.lang || 'en'
  return getTranslation(language)[key]
}
