import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Education } from '../components/Education'
import { Header } from '../components/Header'
import { useEffect } from 'react'

export const Home = () => {

  useEffect(() => {
    document.title = 'Portfolio | Simón Di Leo';
  }, []);

  return (
    <main className='min-h-screen max-w-screen m-auto w-11/12 md:w-10/12 py-4'>
      <Header />
      <Projects />
      <section className='max-w-sm m-auto my-8 md:max-w-3xl md:grid gap-4 md:grid-cols-2 xl:max-w-5xl'>
        <Education />
        <Skills />
      </section>
    </main>
  )
}