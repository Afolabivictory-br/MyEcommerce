export function getCookie(name) {
    return document.cookie.split(';')
        .find(c => c.trim().startsWith(name + '='))
        ?.split('=')[1]
}