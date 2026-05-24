/**
 * web-buffer-analiz Cloudflare Worker
 * Static site proxy - fetches from GitHub Pages
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // GitHub Pages URL - replace with your actual repo URL
  const upstream = `https://darkeaglehome.github.io/web-buffer-analiz${url.pathname}`
  
  // Forward the request to GitHub Pages
  const response = await fetch(upstream, {
    method: request.method,
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Cloudflare-Worker)',
      ...Object.fromEntries(
        Array.from(request.headers.entries()).filter(([key]) => 
          !['host', 'cf-connecting-ip', 'cf-ray'].includes(key.toLowerCase())
        )
      )
    },
    body: request.method === 'GET' || request.method === 'HEAD' ? undefined : request.body
  })

  // Return the response with CORS headers
  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': response.headers.get('Content-Type') || 'text/html',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}
