import github from '../assets/icons/github.svg'
import url_icon from '../assets/icons/url-checker.svg'
import { Button } from "./Button"

interface props {
  github_url: string
  site_url: string
}

export const ImageHover: React.FC<props> = ({ site_url, github_url }) => {
  return (
    <div className="h-full w-full opacity-0 group-hover:opacity-100 group-hover:cursor-pointer -bg--color-dark-violet bg-opacity-60 absolute inset-0 grid place-content-center gap-4">
      <Button icon={github} text="Repository" url={github_url} />
      <Button icon={url_icon} text="Page" url={site_url} />
    </div>
  )
}