import { SkillGroup } from "./SkillGroup"

export const Skills = () => {
  return (
    <section className="">
      <header className="my-2">
        <h2 className="text-2xl font-semibold -text--color-dark-orange">Skills</h2>
      </header>
      <section className="grid p-3 -bg--color-dark-violet rounded-xl bg-opacity-70 shadow-md -shadow--color-orange">
        <SkillGroup title="Frontend" />
        <SkillGroup title="Backend" />
        <SkillGroup title="Devops" />
      </section>
    </section>
  )
}