import { getTime } from './utils.js'

const timestampToggle = document.getElementById('timestamp-toggle')
const customInput = document.getElementById('custom-input')

function buildMessage(type) {
    let output = type
    if (timestampToggle.checked) output = `[${getTime()}] ` + output
    if (customInput.value) output += `: ${customInput.value}`
    return output
}

document.getElementById('log').addEventListener('click', () => console.log(buildMessage('log')))
document.getElementById('warn').addEventListener('click', () => console.warn(buildMessage('warn')))
document.getElementById('error').addEventListener('click', () => console.error(buildMessage('error')))
document.getElementById('debug').addEventListener('click', () => console.debug(buildMessage('debug')))

const imageEl = document.getElementById('image')
document.getElementById('xhr').addEventListener('click', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (response.ok) {
        const { message: src } = await response.json()
        imageEl.src = src
    }
})

const faviconReverseMap = {
    'favicon-slider.png': 'favicon-clap.png',
    'favicon-clap.png': 'favicon-slider.png',
}

const faviconLink = document.querySelector('link[rel="shortcut icon"]')
const faviconPreview = document.getElementById('favicon-preview')

document.getElementById('favicon').addEventListener('click', () => {
    const { href: oldHref } = faviconLink
    const oldFavicon = oldHref.slice(oldHref.lastIndexOf('/') + 1)
    const newFavicon = faviconReverseMap[oldFavicon]
    faviconLink.href = newFavicon
    faviconPreview.src = oldFavicon
})
