import { Project } from "./Project"
import inventomate_image from '../assets/images/projects/Inventomate.png'

export const Projects = () => {
  return (
    <section className="max-w-sm m-auto my-8 md:max-w-3xl xl:max-w-5xl">
      <header className="my-4">
        <h2 className="text-2xl font-semibold -text--color-dark-orange">Projects</h2>
      </header>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <Project
          title="InventoMate"
          description="It's a predictive system for improve inventory management. This system perform predictive sales and trend 
                        analysis."
          image={inventomate_image}
          icons={{ react: true, typescript: true, vite: true, tailwind: true, kubernetes: true, docker: true, googleCloud: true }}
          site_url="https://inventomate.xyz/"
          github_url="https://github.com/SimonDiLeoGIT/inventomate"
        />
      </section>
    </section>
  )
}