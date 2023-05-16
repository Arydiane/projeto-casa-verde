import styles from "./SectionProducts.module.scss"
import Card from '../Card'
import { useState, useEffect } from "react"
import { getProducts }  from '../../services/api'

export default function SectionProducts() {
    const [products, setProducts] = useState([])
    const [order, setOrder] = useState("")
    const [priceFilter, setPriceFilter] = useState(0)
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts()
            if (data) {
                setProducts(data)
            }
        }
        fetchProducts()
    }, [])

    function orderProducts(field, listProducts) {
        const orderedProducts = listProducts.sort((a, b) => a[field] > b[field] ? 1: -1 )
        return orderedProducts
    }

    useEffect(() => {
        if (order !== null) {
            setProducts(orderProducts(order, products))
        }

        if (priceFilter > 0) {
            setFilteredProducts(products.filter( product => product.price <= priceFilter))
        } else {
            setFilteredProducts([])
        }
    }, [order, priceFilter])

    return (
        <section className={styles.section} id="plantas">
            <h1 className={styles.title}>Conheça nossas <span className={styles['title-highlight']}>plantas</span></h1>
            <div className={styles.container}>
                <div>
                    <label htmlFor="orderBy">Ordernar por: </label>
                    <select name="orderBy" id="orderBy" value={order} onChange={(e) => setOrder(e.target.value)}>
                        <option value=""></option>
                        <option value="name">Nome</option>
                        <option value="price">Preço</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="price">Filtrar por preços até R$ </label>
                    <input id="price" type="number" min={0} value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} />
                </div>
            </div>
            {priceFilter > 0 && filteredProducts.length === 0  ? <p className={styles.alert}>Não existem produtos correspondente ao valor filtrado! Veja as opções existentes:</p> : ""}                 
            <ul className={styles.list}>
            {
                priceFilter > 0 && filteredProducts.length > 0
                ? filteredProducts.map( product => {
                    if (product.quantity > 0) {
                        return <li key={product.id}><Card image={`/assets/produtos/${product.image}`} title={product.name} price={product.price} /></li>
                        }})
                : <>
                    {products.map(product => {
                        if (product.quantity > 0) {
                            return <li key={product.id}><Card image={`/assets/produtos/${product.image}`} title={product.name} price={product.price} /></li>
                        }})
                    }
                </>
            }
            </ul>
        </section>
    )
}