import React from 'react';
import styles from './Aboutme.module.css';

const AboutMe = React.forwardRef(({},ref)=>{
    return <div className={styles.wrapper}>
            <div className={styles.bgImg}></div>
            <section className={`${styles.aboutme} container`} ref={ref}>
            <div className={styles.aboutcontent}>
                <div className={styles.aboutTitle}>
                    About Me
                </div>
                <div className={styles.aboutDesc}>
                    <span className={styles.largeTxt}>S</span>enior designer with 8 years of experience excited to help the brand expand their social media engagement with captivating video, Animated and static assets. Technical expertise and outside-the-box thinking will prove to be a valuable addition to the creative team and personal contributions.
                </div>
            </div>
            <div className={styles.aboutImg}>
                <img src="/img/profile.jpg" width={100} height={100}/>
            </div>
        </section>
        </div>
})

AboutMe.displayName = 'AboutMe';
export default AboutMe;