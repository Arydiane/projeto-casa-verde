import styles from './HomePage.module.scss'
import Header from "../../components/Header";
import NewsletterSubscription from '../../components/NewsletterSubscription';

export default function HomePage() {
    return (
        <main>
            <Header />
            <NewsletterSubscription />
        </main>
    )
}