import styles from './card.module.css';
const Cards =  ({title, defaultImg, handleClick})=>{
    return <div className={styles.card} style={{
            backgroundRepeat:'no-repeat',
            backgroundImage: `url("${defaultImg}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }} onClick={handleClick}>
        <div className={styles.overlay}>
            <div>{title}</div>
        </div>
    </div>
}

Cards.displayName = 'Cards';
export default Cards;