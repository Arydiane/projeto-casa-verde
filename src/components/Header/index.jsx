import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'

const routes = [{
    label: "Como fazer",
    to: '/'
},{
    label: "Ofertas",
    to: '/'
},{
    label: "Depoimentos",
    to: '/'
},{
    label: "Videos",
    to: '/'
},{
    label: "Meu carrinho",
    to: '/'
}];

export default function Header() {
    return (
        <header className={styles.header}>
            <a href='/'>
                <img src={logo} alt='Logomarca da Casa Verde' className={styles['header-logo']}/>
            </a>
            <nav>
                <ul className={styles.nav}>
                    {routes.map((route, index) => 
                        <li key={index} className={styles['nav-item']}>
                            <a href={route.to} className={styles['nav-link']}>
                                {route.label}
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}