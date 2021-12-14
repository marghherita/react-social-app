import styles from './Footer.module.scss';

const Footer = () => {

const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <hr />
            <p className={styles} >Copyright Edgemony {year}</p>
        </footer>
    )
}

export default Footer;