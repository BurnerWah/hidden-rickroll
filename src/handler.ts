import { Hono } from 'hono'

const app = new Hono()

const preview_uas = new Set([
  'Mozilla/5.0 (compatible; Discordbot/2.0; +https://discordapp.com)',
  'TelegramBot (like TwitterBot)',
  'Twitterbot/1.0',
])

app.get('/*', (ctx) => {
  const { headers } = ctx.req
  const ua = headers.get('User-Agent')
  return ctx.redirect(
    preview_uas.has(ua || '')
      ? 'https://twitter.com/BurnerWah'
      : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    301,
  )
})

export default app
