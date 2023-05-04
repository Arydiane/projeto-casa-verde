import styles from "./SectionProducts.module.scss"
import Card from '../Card'

const products = [
    {
        id: "01",
        name: "Ajuga reptans", 
        price: 20,
        image: "produto-01.png"
    },
    {
        id: "02",
        name: "Cyperus rotundus", 
        price: 30, 
        image: "produto-02.png"
    },
    {
        id: "03",
        name: "Cordyline fruticosa", 
        price: 45, 
        image: "produto-03.png"
    },
    {
        id: "04",
        name: "Delairea odorata", 
        price: 10, 
        image: "produto-04.png"
    },
    {
        id: "05",
        name: "Crassula ovata", 
        price: 25, 
        image: "produto-05.png"
    },
    {
        id: "06",
        name: "Datura metel", 
        price: 35, 
        image: "produto-06.png"
    },
]

export default function SectionProducts() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Conheça nossas <span className={styles['title-highlight']}>ofertas</span></h1>
            <ul className={styles.list}>
                {products.map(product => (
                    <li key={product.id}><Card image={`/assets/produtos/${product.image}`} title={product.name} price={product.price} /></li>
                ))}
            </ul>
        </section>
    )
}