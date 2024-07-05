// import image from '../assets/images/Screenshot (848).png'
import { IconProps, Icons } from './Icons'
import { ImageHover } from './ImageHover'
import { ItemDescription } from "./ItemDescription"

interface props {
  title: string
  description: string
  image: string
  icons: IconProps;
  github_url: string
  site_url: string
}

export const Project: React.FC<props> = ({ title, description, image, icons, site_url, github_url }) => {
  return (
    <article className="shadow-md -shadow--color-pink rounded-xl overflow-hidden">
      <div className='rounded-xl overflow-hidden group relative'>
        <img
          src={image}
          className="w-full max-h-64 object-cover"
        />
        <ImageHover
          site_url={site_url}
          github_url={github_url}
        />
      </div>
      <div className="relative p-2 -bg--color-dark-violet bg-opacity-60">
        <ItemDescription title={title} description={description} />
        <div className='mt-2'>
          <Icons {...icons} />
        </div>
      </div>
    </article>
  )
}