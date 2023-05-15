import styles from './SectionHowToGet.module.scss'

export default function SectionHowToGet() {
    return (
        <section className={styles.section} id='como-fazer'>
            <img className={styles['section-image']} src='src/assets/planta-destaque.png' alt='Planta costela de adão' />
            <div className={styles['section-container']}>
                <h1 className={styles.title}>Como conseguir <span className={styles['title-highlight']}>minha planta</span></h1>
                <ul className={styles.list}>
                    <li className={styles['list-item']}>Escolha suas plantas</li>
                    <li className={styles['list-item']}>Faça seu pedido </li>
                    <li className={styles['list-item']}> Aguarde na sua casa</li>
                </ul>
            </div>
        </section>
    )
}