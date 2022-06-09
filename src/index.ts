import app from './handler'

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(app.handleEvent(event))
})
