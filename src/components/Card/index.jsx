import styles from './Card.module.scss'

export default function Card({image, title, price}) {
    return (
        <div className={styles.card}>
            <img className={styles['card-image']} src={image} alt={title} />
            <div className={styles['card-text']}>
                <h2 className={styles['card-title']}>{title}</h2>
                <p className={styles['card-price']}>R$ {price.toFixed(2)}</p>
                <a className={styles['card-link']} href='#'>Comprar</a>
            </div>
        </div>
    )
}