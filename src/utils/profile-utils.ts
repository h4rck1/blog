import { profileConfig, siteConfig } from '../config'

export function generateQuote() {
  //@ts-ignore
  const quotes = profileConfig.quotes[siteConfig.lang]

  const randomIndex = Math.floor(Math.random() * quotes.length)

  return quotes[randomIndex]
}
