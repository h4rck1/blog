import { siteConfig } from '@/config'
import { EN_en } from '@constants/constants'

export function formatDateToYYYYMMDD(date: Date): string {
  if (siteConfig.lang === EN_en) return date.toISOString().substring(0, 10)

  return date.toLocaleDateString('en-GB').replaceAll('/', '-')
}
