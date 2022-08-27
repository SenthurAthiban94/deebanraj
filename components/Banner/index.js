import React from 'react';
import styles from './Banner.module.css';

const Banner = React.forwardRef(({},ref)=>{
    return <section className={`${styles.banner} container`} ref={ref}>
        <div className={styles.content}>
            <div className={styles.designation}>SENIOR DESIGNER</div>
            <div className={styles.name}>Deebanraj</div>
            <div className={styles.expcontainer}>
                <div className={styles.exp}>9</div>
                <div className={styles.expcontent}>
                    <div>YEARS</div>
                    <div>EXPERIENCE</div>
                </div>
            </div>
        </div>
    </section>
})

Banner.displayName = 'Banner';
export default Banner;