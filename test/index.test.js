const { resolve } = require('path')
const { Nuxt, Builder } = require('nuxt')
const test = require('ava')

// We keep the nuxt and server instance
// So we can close them at the end of the test
let nuxt = null

// Init Nuxt.js and create a server listening on localhost:4000
const rootDir = resolve(__dirname, '../')

test.before(async () => {
  const config = {
    dev: false,
    rootDir,
    buildModules: [
      '@nuxtjs/vuetify'
    ],
    modules: [
      [
        'nuxt-i18n',
        {
          locales: [
            {
              name: 'English',
              code: 'en',
              iso: 'en-US',
              file: 'en-US.js',
              dir: 'ltr'
            }
          ],
          defaultLocale: 'en',
          detectBrowserLanguage: false,
          lazy: true,
          langDir: 'translations/'
        }
      ]
    ]
  }
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, '0.0.0.0')
}, 30000)

// Example of testing only generated html
test('Route / exits and render HTML', async (t) => {
  const context = {}
  const { html } = await nuxt.server.renderRoute('/', context)
  t.true(html.includes('Big Five Personality Test'))
})

// Close server and ask nuxt to stop listening to file changes
test.after('Closing server and nuxt.js', (t) => {
  nuxt.close()
})
