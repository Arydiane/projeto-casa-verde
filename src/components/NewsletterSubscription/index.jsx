import styles from './NewsletterSubscription.module.scss'

export default function NewsletterSubscription() {
    return (
        <section className={styles['section-newsletter']}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sua casa com as <span className={styles['title-highlight']}>melhores plantas</span></h1>
                <p className={styles.text}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form className={styles['form']}>
                    <div className={styles['form-container']}>
                        <input 
                            type="email" 
                            placeholder="Insira seu e-mail"
                            required 
                            className={styles['form-input']}
                        />
                        <button type="submit" className={styles['form-button']}>Assinar newsletter</button>
                    </div>
                </form>
            </div>
        </section>
    )
}