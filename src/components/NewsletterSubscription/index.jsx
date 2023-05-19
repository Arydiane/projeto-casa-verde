import { useState } from 'react'
import styles from './NewsletterSubscription.module.scss'
import sendEmail from '../../services/sendEmail'

export default function NewsletterSubscription() {
    const [email, setEmail] = useState('')
    const [isNotValid, setIsNotValid] = useState(true)
    const [error, setError] = useState("")

    function validateEmail(event) {
        setEmail(event.target.value);
        if (event.target.validity.valid) {
            setIsNotValid(false)
            setError("")
            return
        }
        setError("Informe um e-mail válido. Ex.: email@dominio.com")
    }

    async function subscribe(event) {
        event.preventDefault()
        alert(`Obrigado pela sua assinatura, você receberá nossas novidades no ${email}!`)
        sendEmail(email)
        setEmail('')
        setIsNotValid(true)
    }

    return (
        <section className={styles['section-newsletter']}>
            <div className={styles.container}>
                <h1 className={styles.title}>Sua casa com as <span className={styles['title-highlight']}>melhores plantas</span></h1>
                <p className={styles.text}>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</p>
                <form className={styles['form']} onSubmit={subscribe}>
                    <div className={styles['form-container']}>
                        <input
                            type="email"
                            placeholder="Insira seu e-mail"
                            value={email}
                            onChange={(event) => validateEmail(event)}
                            required
                            className={styles['form-input']}
                        />
                        <button
                            type="submit"
                            disabled={isNotValid}
                            className={styles['form-button']}
                        >
                            Assinar newsletter
                        </button>
                    </div>
                    {error && <p className={styles['form-error']}>{error}</p>}
                </form>
            </div>
        </section>
    )
}