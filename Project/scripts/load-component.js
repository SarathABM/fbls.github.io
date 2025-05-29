export const loadComponent = async (cssSelector, file) => {
    const res = await fetch(file)
    const html = await res.text()
    document.querySelector(cssSelector).outerHTML = html
}