import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Exp from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const exp = useRef(null);
  const resp = useRef(null);
  const edu = useRef(null);
  const proj = useRef(null);
  const contact = useRef(null);

  const [parentRefs,setParentRefs]  = useState({});

  useEffect(()=>{
    setParentRefs({
      home,
      about,
      skills,
      exp,
      resp,
      edu,
      proj,
      contact
    })
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Deebanraj - Graphic Designer</title>
        <meta name="description" content="Deebanraj - Graphic Designer with 8 years of experience" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="D" parentRefs={parentRefs}/>
      <main className={styles.main}>
        <Banner ref={home}/>
        <AboutMe ref={about}/>
        <Exp ref={exp}/>
        <Skills ref={skills}/>
        <Projects ref={proj}/>
      </main>
      <Footer/>
    </div>
  )
}
