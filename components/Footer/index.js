import styles from './footer.module.css';

const Footer =  ({})=>{
    const curentDate = new Date();
    return <footer className={`${styles.footer} container`}>
        {/* <span>
            Designed by
            <span className={styles.logo}>
                <a href="https://www.linkedin.com/in/deebanraj-r-7853b223a/" target="_blank" alt="Author" title="Author" rel="noreferrer">Deebanraj</a>
            </span>
        </span>*/}
        <span> 
            Built by
            <span className={styles.logo}>
                <a href="https://www.linkedin.com/in/senthur-athiban-181a85b2/" target="_blank" alt="Author" title="Author" rel="noreferrer">Senthur Athiban</a>
            </span>
        </span>
        <span className={styles.copyright}> {curentDate.getFullYear()} © All rights reserved.</span>
    </footer>
}

Footer.displayName = 'Footer';

export default Footer;