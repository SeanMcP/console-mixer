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
document.getElementById('info').addEventListener('click', () => console.info(buildMessage('info')))

const imageEl = document.getElementById('image')
document.getElementById('xhr').addEventListener('click', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (response.ok) {
        const { message: src } = await response.json()
        imageEl.src = src
    }
})

const faviconLink = document.querySelector('link[rel="shortcut icon"]')
const faviconReverseMap = {
    'favicon-slider.png': 'favicon-clap.png',
    'favicon-clap.png': 'favicon-slider.png',
}

document.getElementById('favicon').addEventListener('click', () => {
    const { href: oldHref } = faviconLink
    const oldFavicon = oldHref.slice(oldHref.lastIndexOf('/') + 1)
    faviconLink.href = faviconReverseMap[oldFavicon]
})

const styleTag = document.querySelector('style')
const styleReverseMap = {
    '* { color: pomegranate }': '* { font-color: darkslateblue }',
    '* { font-color: darkslateblue }': '* { color: pomegranate }'
}

document.getElementById('invalid-css').addEventListener('click', () => {
    let { innerHTML: styles } = styleTag
    let newStyles = '* { color: pomegranate }'
    if (styles && styleReverseMap[styles]) {
        newStyles = styleReverseMap[styles]
    }
    styleTag.contentEditable = true
    styleTag.innerHTML = newStyles
})
