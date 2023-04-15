import styles from './Header.module.css';
import { useState } from 'react';


const Header =  ({title, parentRefs = {}})=>{
    const [isToggled, toggleMenu] = useState(false);
    const navigatTo = (name, toggle=true)=>{
        if(toggle) toggleMenu(!isToggled);
        if(parentRefs[name] && parentRefs[name].current) parentRefs[name].current.scrollIntoView({behavior: 'smooth'});
    }
    return <div className={styles.header}>
        <div className={styles.title} onClick={()=>navigatTo('home',false)}>{title}</div>
        <div className={styles.menuItems}>
            <ul className={styles.menuItem}>
                <li onClick={()=>navigatTo('home',false)}>Home</li>
                <li onClick={()=>navigatTo('about',false)}>About Me</li>
                <li onClick={()=>navigatTo('exp',false)}>Experience</li>
                <li onClick={()=>navigatTo('skills',false)}>Skills</li>
                {/* <li onClick={()=>navigatTo('exp',false)}>Experience</li> */}
                {/* <li onClick={()=>navigatTo('resp',false)}>Responsibility</li> */}
                {/* <li onClick={()=>navigatTo('edu',false)}>Education</li> */}
                <li onClick={()=>navigatTo('proj',false)}>Projects</li>
                {/* <li onClick={()=>navigatTo('contact',false)}>Contact</li> */}
            </ul>    
        </div>
        {!isToggled && <button className={`${styles.button}`} onClick={()=>toggleMenu(!isToggled)}>&#9776;</button>}
        {isToggled && <button className={`${styles.button} ${styles.closebtn}`} onClick={()=>toggleMenu(!isToggled)}>&times;</button>}
        {isToggled && <div className={`${styles.menu}`}>
            <ul className={styles.mobilemenuItem}>
                <li onClick={()=>navigatTo('home')}>Home</li>
                <li onClick={()=>navigatTo('about')}>About Me</li>
                <li onClick={()=>navigatTo('exp')}>Experience</li>
                <li onClick={()=>navigatTo('skills')}>Skills</li>
                {/* <li onClick={()=>navigatTo('exp')}>Experience</li> */}
                {/* <li onClick={()=>navigatTo('resp')}>Responsibility</li> */}
                {/* <li onClick={()=>navigatTo('edu')}>Education</li> */}
                <li onClick={()=>navigatTo('proj')}>Projects</li>
                {/* <li onClick={()=>navigatTo('contact')}>Contact</li> */}
            </ul>
        </div>}
    </div>
}

Header.displayName = 'Header';

export default Header;