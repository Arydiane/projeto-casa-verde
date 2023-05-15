import styles from "./SectionProducts.module.scss"
import Card from '../Card'
import { useState, useEffect } from "react"
import { getProducts }  from '../../services/api'

export default function SectionProducts() {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const data = await getProducts()
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <section className={styles.section} id="plantas">
            <h1 className={styles.title}>Conheça nossas <span className={styles['title-highlight']}>plantas</span></h1>
            <ul className={styles.list}>
                {products.length > 0 && products.map(product => {
                    if (product.quantity > 0) {
                       return <li key={product.id}><Card image={`/assets/produtos/${product.image}`} title={product.name} price={product.price} /></li>
                    }
                })}
            </ul>
        </section>
    )
}