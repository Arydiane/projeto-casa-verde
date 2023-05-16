const URL = 'https://gist.githubusercontent.com/Arydiane/041732547bac3284023491262dc5ed82/raw/e75ab8721dc943e458ab86f3c03e230583c6b722/casa-verde.json'

export async function getProducts() {
    try {
        const response = await fetch(URL)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Erro API -- ", error)
        return error
    }
}