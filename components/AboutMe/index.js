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
                    {/* <span className={styles.largeTxt}>S</span> */}
                    Highly creative and passionate to unique designs as per the project requirement. Ability to handle my team to understand how to evaluate the effects of strategies to handle multiple projects simultaneously without compromising on the quality of work. Adaptable to work under stringent deadlines without losing enthusiasm. Ability to work cross-team and synthesize feedback from different teams. Excellent communication, coordination and presentation skills.
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