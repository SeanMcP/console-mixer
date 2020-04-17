const timestampToggle = document.getElementById('timestamp-toggle')
const customInput = document.getElementById('custom-input')

function getTime() {
    // Someone teach me to do this better
    const now = new Date()
    return new Date().toLocaleTimeString().split(' ')[0] + `.${now.getMilliseconds()}`
}

['log', 'warn', 'error', 'debug'].forEach(type => {
    document.getElementById(type).addEventListener('click', () => {
        const message = customInput.value ? customInput.value : type
        console[type](timestampToggle.checked ? `[${getTime()}] ${message}` : message)
    })
})

const imageEl = document.getElementById('image')
document.getElementById('xhr').addEventListener('click', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (response.ok) {
        const { message: src } = await response.json()
        imageEl.src = src
    }
})