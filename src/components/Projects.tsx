import { Project } from "./Project"
import crystalgym from '../assets/images/projects/crystalgym.png'

export const Projects = () => {
  return (
    <section className="max-w-sm m-auto my-8 md:max-w-3xl xl:max-w-5xl">
      <header className="my-4">
        <h2 className="text-2xl font-semibold -text--color-dark-orange">Projects</h2>
      </header>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Project
          title="CrystalGym"
          description="Urban and Gym clothing e-commerce"
          image={crystalgym}
          icons={{ react: true, typescript: true, vite: true, tailwind: true, css: true }}
          site_url="https://crystalgym.vercel.app/"
          github_url="https://github.com/SimonDiLeoGIT/clothing-ecommerce"
        />
      </section>
    </section>
  )
}