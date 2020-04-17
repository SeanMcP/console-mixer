export function getTime() {
    // Someone teach me to do this better
    const now = new Date()
    return new Date().toLocaleTimeString().split(' ')[0] + `.${now.getMilliseconds()}`
}