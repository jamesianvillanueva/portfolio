import Head from 'next/head'
import Image from 'next/image'
import About from '../components/main-components/About/about'
import Achievements from '../components/main-components/Achievements/achievements'
import Hero from '../components/main-components/Hero/hero'
import Projects from '../components/main-components/Projects/projects'
import Skills from '../components/main-components/Skills/skills'
import Layout from '../layout/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <Layout>
      <Hero/>
      <About />
      <Skills />
      <Achievements />
      <Projects />
    </Layout>
  )
}
