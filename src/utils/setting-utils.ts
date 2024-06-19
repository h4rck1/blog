import { siteConfig } from '@/config'
import type { LANGUAGE, LIGHT_DARK_MODE } from '@/types/config'
import {
  AUTO_MODE,
  DARK_MODE,
  DEFAULT_THEME,
  EN_en,
  ES_es,
  LIGHT_MODE,
} from '@constants/constants.ts'

export function getDefaultHue(): number {
  const fallback = '250'
  const configCarrier = document.getElementById('config-carrier')
  return Number.parseInt(configCarrier?.dataset.hue || fallback)
}

export function getHue(): number {
  const stored = localStorage.getItem('hue')
  return stored ? Number.parseInt(stored) : getDefaultHue()
}

export function setHue(hue: number): void {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector<HTMLElement>(':root')
  if (!r) {
    return
  }
  r.style.setProperty('--hue', hue.toString())
}

export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove('dark')
      break
    case DARK_MODE:
      document.documentElement.classList.add('dark')
      break

    case AUTO_MODE:
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break
  }
}

function setLanguageInConfig(lang: LANGUAGE) {
  location.href = '/commands/find/es/'
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
  localStorage.setItem('theme', theme)
  applyThemeToDocument(theme)
}

export function getStoredTheme(): LIGHT_DARK_MODE {
  return (localStorage.getItem('theme') as LIGHT_DARK_MODE) || DEFAULT_THEME
}

export function setLanguage(lang: LANGUAGE): void {
  localStorage.setItem('language', lang)
  setLanguageInConfig(lang)
}

export function getStoredLanguage(): LANGUAGE {
  return (localStorage?.getItem('language') as LANGUAGE) || 'en'
}

export async function setLanguageAPI(newLang: LANGUAGE) {
  const toSend = JSON.stringify({ language: newLang })

  const response = await fetch('/api/updateLang/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: toSend,
  })

  const result = await response.json()
  if (result.success) {
    languageRedirect(newLang)
  } else {
    console.error(
      'Error while trying to change language:',
      result.completeError,
    )
  }

  function languageRedirect(lang: LANGUAGE) {
    if (lang === siteConfig.lang) return

    if (
      !window.location.href.includes('posts') &&
      !window.location.href.includes('commands')
    ) {
      window.location.reload()
      return
    }

    if (lang === EN_en) {
      const newLocation = location.href.split('es/')[0]
      window.location.href = newLocation
      return
    }

    const newLocation = `${location.href}es/`
    window.location.href = newLocation
  }
}
