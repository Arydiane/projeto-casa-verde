const URL = 'https://gist.githubusercontent.com/Arydiane/041732547bac3284023491262dc5ed82/raw/ebe5bb8496f38471dc084cdea975bb6e1b64c3a6/casa-verde.json'

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