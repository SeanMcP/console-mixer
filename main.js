function getTime() {
    return new Date().toLocaleTimeString()
}

['log', 'warn', 'error', 'debug'].forEach(type => {
    document.getElementById(type).addEventListener('click', () => console[type](`[${getTime()}] ${type}`))
})

const imageEl = document.getElementById('image')
document.getElementById('xhr').addEventListener('click', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    if (response.ok) {
        const { message: src } = await response.json()
        imageEl.src = src
    }
})