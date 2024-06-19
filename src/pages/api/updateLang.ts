import fs from 'node:fs'
import path from 'node:path'
import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request, params }) => {
  try {
    const { language } = await request.json()

    const configPath = path.resolve('src/config.ts')

    let configContent = fs.readFileSync(configPath, 'utf-8')

    configContent = configContent.replace(/lang: '.*',/, `lang: '${language}',`)

    fs.writeFileSync(configPath, configContent)

    return new Response(JSON.stringify({ success: true }), { status: 200 })
  } catch (error) {
    return new Response(
      // @ts-ignore
      JSON.stringify({
        success: false,
        error: error.message,
        completeError: error,
      }),
      { status: 500 },
    )
  }
}
