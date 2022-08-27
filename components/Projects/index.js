import React from 'react';
import styles from './Projects.module.css';
import ImageGallery from 'react-image-gallery';
import Card from './cards';
import { useState } from 'react';
import {ProjectWorks} from './projects.js';
import "react-image-gallery/styles/css/image-gallery.css";

const Projects =  React.forwardRef(({},ref)=>{
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemGallery, setSelectedItemGallery] = useState([]);

    const openGallery = (galleryName)=>{
      setSelectedItem(galleryName);
      setSelectedItemGallery(ProjectWorks[galleryName]);
    }

    const resetSelection = ()=>{
      setSelectedItem(null);
      setSelectedItemGallery([]);
    }
    
    return <div className={styles.wrapper}>
      <div className={styles.bgImg}></div>
      <section className={`${styles.projects} container`} ref={ref}>
          {/* <ImageGallery items={ProjectWorks} originalTitle={'Animate cc'} thumbnailTitle={'Animate cc'} thumbnailLabel={'Animate cc'}/> */}
          <h2>Projects</h2>
          <div className={styles.cardContainer}>
            {
              Object.keys(ProjectWorks).map((p,pid)=>{
                return ProjectWorks[p].length ? <Card key={pid} title={p} defaultImg={ProjectWorks[p][0].original} handleClick={()=>openGallery(p)}/> : null;
              })
            }
          </div>
          {
            Boolean(selectedItemGallery.length) && <div className={styles.popup}>
              <span onClick={()=>resetSelection()}>X CLOSE</span>
              <ImageGallery items={selectedItemGallery} originalTitle={selectedItem} thumbnailTitle={selectedItem} thumbnailLabel={selectedItem}/> 
            </div>
          }
      </section>
    </div>
})

Projects.displayName = 'Projects';
export default Projects;