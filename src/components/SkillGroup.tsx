import { Icons } from "./Icons"

interface props {
  title: string
}

export const SkillGroup: React.FC<props> = ({ title }) => {
  return (
    <article className="mb-2">
      <h3 className="-text--color-live-pink mb-2">{title}</h3>
      {
        title === 'Frontend'
        &&
        <Icons
          html
          css
          javascript
          typescript
          react
          vite
          tailwind
        />
      }
      {
        title === 'Backend'
        &&
        <Icons
          java
          python
          mysql
          postgresql
        />
      }
      {
        title === 'Devops'
        &&
        <Icons
          kubernetes
          docker
          googleCloud
        />
      }
    </article>
  )
}