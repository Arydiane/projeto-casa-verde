import styles from './HomePage.module.scss'
import Header from "../../components/Header";
import NewsletterSubscription from '../../components/NewsletterSubscription';
import SectionHowToGet from '../../components/SectionHowToGet';

export default function HomePage() {
    return (
        <main>
            <Header />
            <NewsletterSubscription />
            <SectionHowToGet />
        </main>
    )
}