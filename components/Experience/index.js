import styles from './index.module.css';
import React from 'react';

const Card = ({data={}})=>{
    return <div className={`${styles.card} ${styles[data.className]}`}>
        <div className={styles.white}>
            <div className={styles.cardTitle} dangerouslySetInnerHTML={{__html: data.title}}></div>
            <div className={styles.yearWrapper}>
                <div className={styles.year}>{data.year}</div>
                <div className={styles.yearTxt}>{data.yearTxt}</div>
            </div>
        </div>
        <div className={styles.cardDescription}>
            <div className={styles.descriptionTitle}>{data.descriptionTitle}</div>
            <div>{data.description}</div>
        </div>
    </div>
};
const Exp =  React.forwardRef(({},ref)=>{
    const data = [
    {
        className: '',
        title: 'DESIGN</br>LEAD',
        year: '2022',
        yearTxt: 'to TILL DATE',
        descriptionTitle: 'Ample Technologies - Bengaluru',
        description: 'UI/UX, Print, Digital, Video Ads',
    },
    {
        className: 'reverse',
        title: 'SENIOR</br>DESIGNER',
        year: '2016',
        yearTxt: 'to Sep,2022',
        descriptionTitle: 'Jivox Software India Pvt Ltd - Bengaluru',
        description: 'UI/UX, Digital & Video Ads',
    },{
        className: '',
        title: 'ADVERTISING</br>EXECUTIVE',
        year: '2014',
        yearTxt: 'to Jun,2016',
        descriptionTitle: 'Williams Lea Tag - Chennai',
        description: 'Printed Media, Magazine & Digital Ads',
    },{
        className: 'reverse',
        title: 'ASSOCIATE</br>DESIGNER',
        year: '2013',
        yearTxt: 'to May,2014',
        descriptionTitle: '3D Red Eye Studios - Chennai',
        description: 'Brochures, Catalogue, Flyer, Roto & 3D Video Editing',
    }];

    return <div className={styles.wrapper}>
        <div className={styles.bgImg}></div>
        <section className={`${styles.aboutme} container`} ref={ref}>
            <div className={styles.aboutTitle}>
                EXPERIENCE
            </div>
            <div className={styles.expContainer}>
                {
                    data.map((c,i)=><Card data={c} key={i}/>)
                }
            </div>
        </section>
    </div>
});

Exp.displayName = 'Exp';

export default Exp;