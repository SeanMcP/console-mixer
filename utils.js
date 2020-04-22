export function getTime() {
    // Someone teach me to do this better
    const now = new Date()
    return new Date().toLocaleTimeString([], { hour12: false }).split(' ')[0] + `.${String(now.getMilliseconds()).padStart(3, '0')}`
}