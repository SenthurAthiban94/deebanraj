import styles from './index.module.css';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
 
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function Circle({data={}}) {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
        if (percentage < data.percentage) {
            setPercentage(percentage + 1);
        }
    }, 10);
  }, [percentage]);
 
  console.log(data.symbol);
  return (
    <div style={{ width: 150 }}>
        <CircularProgressbarWithChildren value={percentage}>
            <img className={styles.skillIcon} src={data.symbol}/>
        </CircularProgressbarWithChildren> 
        <div className={styles.skillName} dangerouslySetInnerHTML={{__html: data.name}}></div>
    </div>
  );
}

const Exp =  React.forwardRef(({},ref)=>{
    const skill = useRef(null);
    const [load, setLoad] = useState(false);
    const onScroll = useCallback(event => {
        if(isInViewport(skill.current)) setLoad(isInViewport(skill.current));
    }, []);
  
    useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
         window.removeEventListener("scroll", onScroll, { passive: true });
      }
    }, []);


    const data = [
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-01.png',
            name: 'ADOBE<br/>PHOTOSHOP',
            percentage: 80
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-02.png',
            name: 'ADOBE<br/>ILLUSTRATOR',
            percentage: 70
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-03.png',
            name: 'ADOBE<br/>INDESIGN',
            percentage: 80
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-04.png',
            name: 'ADOBE<br/>XD',
            percentage: 70
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-05.png',
            name: 'ADOBE<br/>AFTER EFFECTS',
            percentage: 70
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-06.png',
            name: 'ADOBE<br/>ANIMATE',
            percentage: 70
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-07.png',
            name: 'ADOBE<br/>PREMIERE PRO',
            percentage: 70
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-08.png',
            name: 'GOOGLE WEB<br/>DESIGNER',
            percentage: 50
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-09.png',
            name: 'AUTODESK<br/>MAYA',
            percentage: 50
        },
        {
            symbol: 'img/bgImage/Vector Smart Object_Seprate-10.png',
            name: 'AUTODESK<br/>3DS MAX',
            percentage: 50
        },
    ];
    
    return <div className={styles.wrapper}>
        <div className={styles.bgImg}></div>
        <section className={`${styles.aboutme} container`} ref={ref}>
            <div className={styles.aboutTitle}>
                SKILLS
            </div>
            <div className={styles.SkillContainer} ref={skill}>
                {load && data.map((d,i)=><Circle key={i} data={d}/>)}
            </div>
        </section>
    </div>
});

Exp.displayName = 'Exp';

export default Exp;