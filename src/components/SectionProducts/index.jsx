import styles from "./SectionProducts.module.scss"
import Card from '../Card'
import { useState, useEffect } from "react"
import { getProducts }  from '../../services/api'

export default function SectionProducts() {
    const [allproducts, setAllProducts] = useState([])
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState("")
    const [priceFilter, setPriceFilter] = useState(0)

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts()
            if (data) {
                setAllProducts(data)
                setProducts(data)
            }
        }
        fetchProducts()
    }, [])

    function orderProducts(field, listProducts) {
        if (field !== "") {
            const orderedProducts = listProducts.sort((a, b) => a[field] > b[field] ? 1: -1 )
            return orderedProducts
        }
        return listProducts
    }

    useEffect(() => {
        setProducts(orderProducts(order, allproducts))
        console.log("Ordenados:", products)
    }, [order])

    function handleSubmit(event) {
        event.preventDefault()
        const newList = orderProducts(order, allproducts)
        if (priceFilter > 0  && priceFilter !== null) {
            const filteredProducts = newList.filter( product => product.price <= priceFilter)
            //const filteredProducts = allproducts.filter( product => product.price <= priceFilter)
            console.log("Filtrados: ", filteredProducts)
            setProducts(filteredProducts)
            return
        }
        return setProducts(newList)
    }

    return (
        <section className={styles.section} id="plantas">
            <h1 className={styles.title}>Conheça nossas <span className={styles['title-highlight']}>plantas</span></h1>
    
            <form onSubmit={handleSubmit}> 
                <label htmlFor="orderBy">Ordernar por: </label>
                <select name="orderBy" id="orderBy" value={order} onChange={(e) => setOrder(e.target.value)}>
                    <option value=""></option>
                    <option value="name">Nome</option>
                    <option value="price">Preço</option>
                </select>
                <label>Filtar por preços até R$</label>
                <input type="number" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}></input>
                <button type="submit">OK</button>
            </form>
                  
            <ul className={styles.list}>
                {products.length > 0 
                    ? products.map(product => {
                    if (product.quantity > 0) {
                       return <li key={product.id}><Card image={`/assets/produtos/${product.image}`} title={product.name} price={product.price} /></li>
                    }})
                    : <li>Não existem produtos para serem listados!</li>
                }
            </ul>
        </section>
    )
}